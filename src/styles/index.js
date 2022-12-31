import styled from "styled-components";
import Button from "../components/Button";

export const Main = styled.main`
    h1: first-child {
        text-align: center;
        margin-bottom: 1em;
    }

    ul {
        margin: 4em 0;
    }
`
export const Form = styled.form`
    width: 40%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;

    input {
        width: 70%;
        padding: .5em;
        background: none;
        border: 1px solid green;
        border-radius: 8px;
    }

    @media (max-width: 520px) {
        width: 85%;
    }
`

export const ButtonSend = styled(Button)`

`