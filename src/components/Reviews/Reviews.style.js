"use client";

import styled from "styled-components";
import { device } from "@/constants";

export const Reviews = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 0;
  margin-block: 8rem;
  margin-bottom: 17em;
  

  @media (max-width: 425px) {
    padding-inline: 40px;
  }

  @media (min-width: 1600px) {
    padding-inline: 4vw;
  }

  h2 {
    margin: 2.5rem;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.5rem;
    color: var(--primaryColor);

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

  .reviews {
    width: 80%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 650px) {
      overflow-x: scroll;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      justify-content: flex-start;
      min-width: 270px;
    }

    .review {
      background: var(--reviews);
      border-radius: 10px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      flex-wrap: wrap;
      width: 300px;
      padding: 20px;
      gap: 1rem;

      @media (max-width: 650px) {
        flex-shrink: 0;
        scroll-snap-align: start;
        width: 100%;
      }

      @media (min-width: 1600px) {
        width: 30%;
        padding: 3vw;
      }

      img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        align-self: center;

        @media ${device.isSmallDevice} {
            height: 60px;
            width: 60px;
        }

        @media (min-width: 1600px) {
          height: 6vw;
          width: 6vw;
        }
      }

      h3 {
        font-weight: 600;
        padding-top: 0.5em;
        color: var(--white);
        font-size: 1.3rem;

        @media ${device.laptop} {
          font-size: 1.2rem;
        }

        @media (min-width: 1600px) {
          font-size: 1.3vw;
          line-height: 1.3vw;
          margin: 1vw 0;
        }
      }

      p {
        font-weight: 400;
        text-align: center;
        color: var(--white);
        text-align: center;
        font-size: 1rem;

        @media (min-width: 1600px) {
          font-size: 1vw;
          line-height: 1.3vw;
        }
      }
    }
  }

  .scroll {
    background: #2b2b29;
    border-radius: 30px;
    padding: 20px;
    text-align: center;
    color: #fff;
    width: 238px;
    font-weight: 600;
    margin: 1em 0;
    align-self: flex-end;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
