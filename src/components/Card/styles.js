import styled from 'styled-components';

export const Container = styled.li`
    width: 40%;
    margin: 0 auto;
    margin-top: 1em;
    list-style-type: none;
    background: #383838;
    border-radius: 999px 300px 300px 999px;
    overflow: hidden;
    padding-right: 20px;
    transition: 0.4s;

    a {
        display: flex;
        align-items: center;
    }

    img {
        border-radius: 50%;
        object-fit: cover;
    }

    p {
        font-size: 2em;
        margin-left: 1em;
    }

    &:hover {
        background: #525252;
    }

    @media (max-width: 520px) {
        width: 85%;
    }
`;
