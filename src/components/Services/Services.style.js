"use client";

import styled from "styled-components";
import { device } from "@/constants";

export const Services = styled.div`
  text-align: center;
  background: var(--services);
  padding: 2em 0;
  width: 80%;
  margin: 8rem auto;
  border-radius: 10px;

  @media (min-width: 1600px) {
    padding: 3vw 0;
  }

  h2 {
    font-weight: 700;
    padding: 1em;
    color: var(--white);
    font-size: 3rem;
    line-height: 3.5rem !important;

    @media ${device.laptop} {
      font-size: 2.5rem;
      line-height: 3rem;
    }

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
      margin-bottom: 3rem;

      img {
        width: 3rem;
        height: 3rem;

        @media (min-width: 1600px) {
          width: 4vw;
          height: 4vw;
        }
      }

      h4 {
        font-weight: 600;
        color: var(--white);
        margin: 1rem 0;
        font-size: 1.3rem;

        @media ${device.laptop} {
          font-size: 1.2rem;
        }

        @media (min-width: 1600px) {
          font-size: 1.3vw;
          line-height: 1.3vw;
          margin: 1.2vw 0;
        }
      }

      p {
        font-size: 14px;
        line-height: 18px !important;
        text-align: center;
        color: var(--white);
        font-size: 1rem;

        @media (min-width: 1600px) {
          font-size: 1vw;
          line-height: 1.3vw;
        }
      }
    }
  }
`;
