"use client";

import styled from "styled-components";
import { device } from "@/constants";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 520px) {
    height: 100%;
    overflow-y: auto;
    background: #fafafa;
    max-width: 100vw;
    overflow-x: hidden;
  }

  @media (max-height: 650px) {
    height: 100%;
    overflow-y: scroll;
    padding-block: 4rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 10px;

  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: initial;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  margin: auto;
  background-color: #fafafa;
  padding: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-width: 450px;

  @media (max-width: 900px) {
    width: 400px;
  }

  @media (max-width: 520px) {
    width: 100%;
    box-shadow: none;
  }

  @media (min-width: 1600px) {
    width: 50%;
    padding: 3vw;
  }

  h3 {
    color: #141414;
    text-shadow: 0 0 1px #141414;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 4rem;
    text-align: center;

    @media ${device.mobileL} {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    @media (min-width: 1600px) {
      font-size: 2.5vw;
      margin-bottom: 2vw;
    }
  }
`;

export const Error = styled.span`
  padding: 5px;
  color: #ff0000b8;
  font-weight: 900;
  font-size: 0.7em;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (min-width: 1600px) {
    font-size: 1vw;
  }
`;

export const Button = styled.button`
  border: none;
  display: flex;
  margin: auto;
  padding: 10px 30px;
  font-weight: 800;
  background-color: #141414;
  color: white;
  border-radius: 5px;
  margin: 1rem auto;
  font-size: 12px;

  @media (max-width: 520px) {
    font-size: 10px;
  }

  @media (min-width: 1600px) {
    padding: 0;
    height: 5vh;
    width: 30%;
    font-size: 1.3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5vw;
  }
`;

export const Text = styled.h6`
  font-size: 12px;
  color: #000;
  margin-top: 2em;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 10px;
  }

  @media (min-width: 1600px) {
    font-size: 1vw;
    margin-top: 2vw;
  }

  a {
    text-decoration: none;
    color: rgb(43, 5, 72);
    font-weight: 600;
    font-size: 12px;

    @media (max-width: 520px) {
      font-size: 10px;
    }

    @media (min-width: 1600px) {
      font-size: 1vw;
      margin-top: 2vw;
    }

    &:hover {
      text-decoration: underline;

      @media (min-width: 1600px) {
        font-size: 1.1vw;
        margin-top: 2vw;
      }
    }
  }
`;
