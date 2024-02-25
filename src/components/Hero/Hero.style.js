'use client';

import styled from "styled-components";


export const Button = styled.div`
    background: var(--white);
    border-radius: 10px;
    border: none;
    color: #141414;
    font-weight: 700;
    font-size: 1.3em;
    height: 4rem;
    width: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 2rem;
    

    @media (min-width: 1600px) {
        margin-top: 1vw;
        padding: 0;
        height: 5vh;
        width: 24vw;
        font-size: 1.4vw;
        line-height: 1.4vw;
    }
`;