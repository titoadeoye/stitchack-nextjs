'use client';

import styled from "styled-components";

export const Services = styled.div`  
    text-align: center;
    margin: 2em 0;
    background: var(--services);
    padding: 2em 0;
    width: 80%;
    margin: auto;
    border-radius: 10px;
    margin-top: 30vh;

    @media (min-width: 1600px) {
        padding: 3vw 0;
    }

    h2 {
        font-weight: 800;
        font-size: 30px;
        line-height: 35px;
        padding: 1em;
        /* color: #FEFEFE; */
        color: var(--white);

        @media (min-width: 1600px) {
            font-size: 2.5vw;
            line-height: 2.5vw;
            padding: 3vw 0;
        }
    }

    .services {
        display: flex;
        justify-content: space-around;
        margin: 2em;
        flex-wrap: wrap;

        .service {
            width: 200px;
            display: flex;
            align-items: center;
            flex-direction: column;

            @media (max-width: 550px) {
                margin-bottom: 2.5em;
            }

            svg {
                @media (min-width: 1600px) {
                    width: 4vw;
                    height: 4vw;
                }

                path {
                    fill: var(--white);
                }
            }

            
            h4 {
                font-weight: 600;
                font-size: 16px;
                line-height: 28px;
                color: var(--white);
                margin: 1em 0;

                @media (min-width: 1600px) {
                    font-size: 1.3vw;
                    line-height: 1.3vw;
                    margin: 1.3vw 0;
                }
            }

            p {
                font-size: 14px;
                line-height: 25px;
                text-align: center;
                color: var(--white);

                @media (min-width: 1600px) {
                    font-size: 0.9vw;
                    line-height: 1.1vw;
                }
            }
        }
        
    }
`;