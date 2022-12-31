import styled from "styled-components";
import Button from "../components/Button";

export const Header = styled.header`
    width: 60%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1.5em;
    margin-top: 1.5em;
    border: 2px solid #4b9d5e5c;
    border-radius: 8px;
    background: #7272726b;
    padding: 1em;

    h2 {
        color: #4b9d5e;
        font-weight: bold;
    }

    img {
        border-radius: 50%;
        object-fit: cover;
    }

    @media (max-width: 520px) {
        width: 80%;
        flex-direction: column;
        margin-top: 7.5em;

        img {
            margin: 0 auto;
        }
    }
`

export const Content = styled.section`
    padding: 1em;

    span {
        color: #4b9d5e;
        font-weight: bold;
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

export const ButtonBack = styled(Button)`
    top: 5.5em;
    left: 1em;
    position: absolute;
    font-size: 1.5em;

    @media (max-width: 520px) {
        width: 85%;
        top: 3.3em;
        left: 1.3em;
    }
`
