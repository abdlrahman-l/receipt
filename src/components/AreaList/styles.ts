import styled from '@emotion/styled'
import { MediaQuery } from '@manskuy/breakpoints'

export const AreaListWrapper = styled.ul`
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;

    li {
        font-size: 17px;
        ${MediaQuery.mobileOnly('font-size: 14px;')}
        
        b {
            color: #f15b2a;
            font-weight: bold;
        }
    }

    li:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`