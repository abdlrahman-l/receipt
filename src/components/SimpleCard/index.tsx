import Image from 'next/image'
import { FunctionComponent, MouseEventHandler } from 'react'

import SectionTitle from '../SectionTitle'
import { SimpleCardWrapper } from './styles'

interface SimpleCardProps {
    readonly imageSrc: string;
    readonly title: string;
    readonly onClick?: MouseEventHandler<HTMLDivElement>;
}
 
const SimpleCard: FunctionComponent<SimpleCardProps> = ({ imageSrc, title, onClick }: SimpleCardProps ) => {
    return (
        <SimpleCardWrapper>
            <div className='image-container' onClick={onClick}>
                <Image src={imageSrc} layout='responsive' width={250} height={250}  className='image' />
            </div>
            <SectionTitle>{title}</SectionTitle>
        </SimpleCardWrapper>
    );
}
 
export default SimpleCard;