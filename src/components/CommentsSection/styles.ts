import styled from '@emotion/styled'
import { MediaQuery } from '@manskuy/breakpoints'

export const CommentsSectionWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5px;

   input,textarea {
    height: 48px;
    padding: 0 10px;

    ${MediaQuery.mobileOnly(`
         min-width: 100%;
         padding: 0 5px;
    `)}

    background: #FFFFFF;
    border: 1px solid #CED1D9;
    border-radius: 4px;
   }
   
   textarea {
    height: 200px;
   }

   .button-wrapper {
        margin-top: 10px;
   }
`

export const ListCommentsWrapper = styled.div`
   overflow: auto;
   display: flex;
   flex-direction: column;
   gap: 15px;

   .each-comment {
    display: flex;
    flex-direction: column;
    .name {
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 18px;
    }
    .comment {
        color: #9da3b4;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 15px;
        margin-bottom: 2px;
    }
   }

`