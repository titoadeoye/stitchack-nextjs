'use client';

import styled from "styled-components";

export const About = styled.div`
    display: flex;
    padding: 5em;
    gap: 40px;

    @media (max-width: 600px) {
        flex-direction: column;
        padding: 5em 2em;
    }

    @media (min-width: 1600px) {
        padding: 0 4vw;
    }

    img {
        height: 400px;

        @media (max-width: 900px) {
            width: 45%;
        }

        @media (max-width: 600px) {
            width: 100%;
        }

        @media (min-width: 1600px) {
            width: 40vw;
            height: 35vw;
        }
    }

    div {
        margin: auto;
        @media (max-width: 900px) {
            width: 55%;
        }

        @media (max-width: 600px) {
            width: 100%;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 30px;
        line-height: 35px;
        color: var(--primaryColor);

        @media (min-width: 1600px) {
            font-size: 3vw;
            line-height: 3vw;
            margin: 3vw 0;
        }
    }

    p {
        font-size: 14px;
        line-height: 28px;
        color: var(--background);
        width: 80%;
        text-align: left;

        @media (max-width: 600px) {
            width: 100%;
        }

        @media (min-width: 1600px) {
            font-size: 1vw;
            line-height: 1.5vw;
            width: 90%;
        }
    }

    a {
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        color: #A800AB;
        font-weight: 600;

        @media (min-width: 1600px) {
            font-size: 1vw;
            line-height: 1.5vw;
            width: 90%;
        }

        &:hover {
            text-decoration-line: none;
        }
    }



`;