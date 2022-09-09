import styled from '@emotion/styled'
import { MediaQuery } from '@manskuy/breakpoints'

export const ReceipeWrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 10px;

    .description-wrapper {

    }
    .image-wrapper {
        img {
            border-radius: 10px;
        }
    }

    .second-description {
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #CED1D9;
        border-radius: 10px;

        ${MediaQuery.tabletAndUp('width: 400px;')}
        ${MediaQuery.desktopAndUp('width: 400px;')}

        .additional {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 15px;

            .additional-description {
                display: flex;
                flex-direction: column;

                a {
                    text-decoration: none;
                    color: black;
                }

                a:hover {
                    text-decoration: underline;
                }

                .value {
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 0;
                    line-height: 18px;
                    cursor: pointer;
                }
                .attribute {
                    color: #9da3b4;
                    font-size: 12px;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 15px;
                    margin-bottom: 2px;
                    cursor: pointer;
                }
            }
        }
    }

    h2 {
        font-weight: bold;
        line-height: normal;
        font-size: 30px;
    }

    p {
        line-height: 1.6;
        font-size: 14px;
    }

    ul {
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
    }

    .button-wrapper {
        margin-top: 20px;
        display: flex;

        ${MediaQuery.mobileOnly('justify-content: center;')}
    }
`