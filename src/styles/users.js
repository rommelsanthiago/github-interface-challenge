import styled from "styled-components";
import Button from "../components/Button";

export const Main = styled.main`
    h1: first-child {
        text-align: center;
    }
`

export const ButtonHome = styled(Button)`
    top: 2.5em;
    left: 1em;
    position: absolute;
    font-size: 1.5em;

    @media (max-width: 520px) {
        width: 85%;
        top: 0.3em;
        left: 1.3em;
    }
`
