import Link from 'next/link'

import SectionTitle from '../SectionTitle'
import SimpleHeaderWrapper from './styles'

const SimpleHeader = () => {
    return (
        <SimpleHeaderWrapper>
            <Link href={`/`}>
                <SectionTitle>Home</SectionTitle>
            </Link>
            <Link href={`/favorites`}>
                <SectionTitle>My Favorite Meals</SectionTitle>
            </Link>
        </SimpleHeaderWrapper>
    )
}
 
export default SimpleHeader