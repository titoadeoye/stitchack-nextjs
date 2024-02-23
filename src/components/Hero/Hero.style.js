'use client';

import styled from "styled-components";
import Link from "next/link";



export const Button = styled(Link)`
    background: var(--white);
    border-radius: 10px;
    border: none;
    color: #141414;
    font-weight: 700;
    font-size: 1.3em;
    padding: 13px 70px;
    margin-top: 1em;

    @media (max-width: 460px) {
        width: 74%;
        padding: 13px 9px;
    }

    @media (min-width: 1600px) {
        margin-top: 1vw;
        padding: 0;
        height: 5vh;
        width: 24vw;
        font-size: 1.4vw;
        line-height: 1.4vw;
    }
`;