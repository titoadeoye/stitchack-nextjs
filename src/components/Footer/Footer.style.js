"use client";

import styled from "styled-components";
import { device } from "@/constants";

export const Wrapper = styled.footer`
  .box {
    --size: 50px;
    height: 160px;
    border: 1px solid;
    display: flex;
    background: radial-gradient(
          var(--size) at 50% var(--size),
          #6251c3 99%,
          #0000 101%
        )
        calc(50% - 2 * var(--size)) 0 / calc(4 * var(--size)) 100% no-repeat,
      radial-gradient(var(--size) at 50% 0px, #0000 99%, #a800ab 101%) 50%
        var(--size) / calc(4 * var(--size)) 100% no-repeat;

    @media ${device.isSmallDevice} {
      --size: 35px;
      height: 140px;
    }

    @media ${device.mobileL} {
      --size: 20px;
      height: 110px;
    }
    @media (min-width: 1600px) {
      --size: 3vw;
      height: 11vw;
    }
  }

  .box + .box {
    background-repeat: repeat-x;
  }
  .box.mask {
    -webkit-mask: radial-gradient(
          var(--size) at 50% var(--size),
          #141414 99%,
          #0000 101%
        )
        calc(50% - 2 * var(--size)) 0 / calc(4 * var(--size)) 100%,
      radial-gradient(var(--size) at 50% 0px, #0000 99%, #141414 101%) 50%
        var(--size) / calc(4 * var(--size)) 100% repeat-x;
    // -webkit-mask:
    // radial-gradient(var(--size) at 50% var(--size),#6251C3 99%,#0000 101%) calc(50% - 2*var(--size)) 0/calc(4*var(--size)) 100%,
    // radial-gradient(var(--size) at 50% 0px,#0000 99%,#A800AB 101%) 50% var(--size)/calc(4*var(--size)) 100% repeat-x;
    // background:linear-gradient(90deg,#A800AB,#6251C3);
    background: linear-gradient(90deg, #141414, #00001a);
    border: none;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 60px;
  width: 100%;
  align-self: end;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1600px) {
    height: 6vw;
    padding: 0 2vw;
  }
`;

export const Copyrights = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: end;
  justify-content: end;
  gap: 1rem;

  & p {
    font-size: 10px;
    color: #ddd;
    font-weight: lighter;
    margin-bottom: 0;

    @media ${device.isSmallDevice} {
        font-size: 8px;
    }

    @media (min-width: 1600px) {
      font-size: 0.9vw;
    }
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;


  img {
    height: 40px;

    @media (max-width: 450px) {
        height: 20px;
    }

    @media (min-width: 1600px) {
      height: 4vw;
    }
  }

  .socials {
    display: flex;
    flex-direction: row;
    margin: 0;
    gap: 10px;
    padding-top: 0.8em;

    @media (min-width: 1600px) {
      gap: 1vw;
    }



    img {
      width: 10px;
      height: 10px;

      @media (min-width: 1600px) {
        height: 1.2vw;
        width: 1.2vw;
      }
    }
  }
`;
