import styled from '@emotion/styled'
import { MediaQuery } from '@manskuy/breakpoints'

const SimpleHeaderWrapper = styled.header`
    height: 80px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
    display: flex;
    gap: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${MediaQuery.mobileOnly(`
        height: 50px;
    `)}

    h3 {
        cursor: pointer;

        ${MediaQuery.mobileOnly(`
            font-size: 14px;
        `)}
    }

    h3:hover {
        text-decoration: underline;
    }
`

export default SimpleHeaderWrapper