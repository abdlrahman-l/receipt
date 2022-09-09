import styled from '@emotion/styled'
import { MediaQuery } from '@manskuy/breakpoints'

export const SearchWrapper = styled.div`
   position: relative;

   ${MediaQuery.mobileOnly(`
      padding: 20px 20px 0;
   `)}

   padding: 20px;

   input {
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

   .suggestions-wrapper {
     width: 343px;
     position: absolute;
     z-index: 2;
     max-height: 250px;
     overflow-y: scroll;
     overflow-x: hidden;
     background: #FFFFFF;
     margin-top: 5px;
     border: 1px solid #CED1D9;
     border-radius: 4px;
     padding: 5px;

     ${MediaQuery.mobileOnly(`
      width: 300px;
    `)}

    li {
      display: flex;
      flex-direction: row;
      padding: 5px;
      gap: 5px;
      align-items: center;

      h4 {
         b {
            font-weight: 700;
         }
      }


     img {
      object-fit: contain;
      width: 60px;
      height: 60px;
     }
    }

    li:hover {
      background-color: #F2D388;
      font-color: #C98474;
    }
   }

   input, .suggestions-wrapper {
      ${MediaQuery.tabletAndUp(`
         width: 343px;
      `)}

      ${MediaQuery.desktopAndUp(`
            width: 343px;
      `)}
   }
`