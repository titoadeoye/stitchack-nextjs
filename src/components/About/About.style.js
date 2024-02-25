'use client';

import { device } from "@/constants";
import styled from "styled-components";

export const About = styled.div`
    display: flex;
    margin: 8rem 5rem;
    gap: 40px;


    @media (max-width: 600px) {
        flex-direction: column;
        margin: 5em 2em;
    }

    @media (min-width: 1600px) {
        padding: 0 4vw;
    }

    img {
        height: 400px;

        @media (max-width: 900px) {
            width: 45%;
        }

        @media ${device.isSmallDevice} {
            height: 300px;
        }

        @media (max-width: 600px) {
            width: 100%;
            max-width: 360px;
            align-self: center;
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
        font-size: 3rem;
        line-height: 3.5rem;
        color: var(--primaryColor);
        margin-bottom: 2rem;

        @media ${device.laptop} {
            font-size: 2.5rem;
            line-height: 3rem;
        }

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
        width: 90%;
        text-align: left;

        @media ${device.isSmallDevice} {
            font-size: 1.2rem;
            line-height: 2rem;
        }

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

        @media ${device.isSmallDevice} {
            font-size: 1.2rem;
            line-height: 2rem;
        }

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