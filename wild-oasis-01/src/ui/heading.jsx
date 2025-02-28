import styled, { css } from 'styled-components'

const Heading = styled.h1`
    ${(props) => props.as === 'h1' && css`
        font-size :  60px;
        background-color : yellow;
        font-weight : 800;
    `
    }
    ${(props) => props.as === 'h2' && css`
        background-color : skyblue;
        font-weight : 600;
        font-size : 30px;
        `}
    ${(props) => props.as === 'h3' && css`
            background-color : cadetblue;
            font-size : 20px;
            font-weight : 600;
        `}
        line-height : 1.4;
  
`
export default Heading