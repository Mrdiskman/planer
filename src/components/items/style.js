import { styled } from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    .itemAnimationContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 80px;
        background-color: blue;
        color: black;
        font-family: 'Poppins', sans-serif;
        gap: 30px;
    }
`