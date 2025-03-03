import styled, { css } from 'styled-components'

const Heading = styled.h1`
    ${(props) => props.as === 'h1' && css`
        font-size :  30px;
      
        font-weight : 800;
    `
    }
    ${(props) => props.as === 'h2' && css`
        
        font-weight : 600;
        font-size : 20px;
        `}
    ${(props) => props.as === 'h3' && css`
            
            font-size : 16px;
            font-weight : 600;
        `}
        line-height : 1.4;
  
`
export default Heading