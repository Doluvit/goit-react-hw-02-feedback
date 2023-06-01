import styled from "styled-components";


export const ButtonList = styled.ul`
display: flex;
gap: 10px;
padding: 0;
`

export const ButtonItem = styled.button`
border: 1px solid lightgray;
border-radius: 5px;
font-size: medium;


&:hover {
    scale: 1.1;
}

&:active {
    background-color: lightskyblue;
}
`