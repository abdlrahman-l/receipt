import { FunctionComponent, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Column from '@manskuy/column'
import Row from '@manskuy/row'

import { selectComments, setComment } from '../../redux/persist'
import Button from '../Button'
import SectionTitle from '../SectionTitle'
import { CommentsSectionWrapper, ListCommentsWrapper } from './styles'

type CommentsSectionProps = {
    readonly mealId: string
}

const CommentsSection: FunctionComponent<CommentsSectionProps> = ({ mealId }: CommentsSectionProps) => {
    const comments = useSelector(selectComments(mealId))

    const dispatch = useDispatch()

    const inputRef = useRef<HTMLInputElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const onSubmitComment = () => {
        if (inputRef.current.value && textAreaRef.current.value) {
            dispatch(setComment({
                mealId,
                comment: textAreaRef.current.value,
                name: inputRef.current.value
            }))
            textAreaRef.current.value = ''
            inputRef.current.value = ''
        }
    }

    return (
        <Row alignItems='stretch' gap='medium'>
            <Column spans={[12,5,3]}>
                <CommentsSectionWrapper>
                    <SectionTitle>Name</SectionTitle>
                    <input ref={inputRef} type='text'/>
                    <SectionTitle>Comment</SectionTitle>
                    <textarea ref={textAreaRef} />
                    <div className='button-wrapper'>
                        <Button onClick={onSubmitComment}>
                            Submit Comment
                        </Button>
                    </div>
                </CommentsSectionWrapper>
            </Column>
            <Column spans={[12,7,9]}>
                <ListCommentsWrapper>
                    {
                        comments?.map(c => (
                            <div className='each-comment'>
                                <label className='name'>{c.name}</label>
                                <p className='comment'>{c.comment}</p>
                            </div>
                        ))
                    }
                </ListCommentsWrapper>
            </Column>
        </Row>
    );
}
 
export default CommentsSection;