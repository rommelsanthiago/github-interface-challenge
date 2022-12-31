import styled from "styled-components";

export const Container = styled.li`
    width: 60%;
    margin: 0 auto;
    margin-top: 1em;
    list-style-type: none;
    background: #383838;
    border-radius: 8px;
    overflow: hidden;
    padding: 0 1em;
    transition: 0.4s;

    a {
        display: flex;
        align-items: center;
        position: relative;

        p: first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 1em;
            min-width: 5em;
            &:before {
                content: '';
                position: absolute;
                top: -14px;
                left: calc(10% + 12px);
                bottom: -14px;
                width: 3px;
                background: #4b9d5e;
            }
            &:after {
                content: "";
                display: table;
                clear: both;
            }

            @media (max-width: 920px){
                &:before {
                    left: calc(16% + 18px);
                }
            }

            @media (max-width: 520px){
                &:before {
                    left: calc(18% + 20px);
                }
            }
        }

        section {
            padding: 1em 0.5em;
        }
    }

    &:hover {
        background: #525252;
    }

    @media (max-width: 520px) {
        width: 85%;
    }
`