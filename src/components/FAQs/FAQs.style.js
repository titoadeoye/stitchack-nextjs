"use client";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";
import styled from "styled-components";
import { device } from "@/constants";

export const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 20px 0;
  margin-block: 8rem;

  @media (min-width: 1600px) {
    padding: 3vw 0;
  }
`;

export const H2 = styled.h2`
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
`;

export const StyledAccordionItem = styled(AccordionItem)`
  margin: 0.8em;
`;

export const StyledAccordionItemHeading = styled(AccordionItemHeading)`
  padding: 1.5rem;
  width: 80%;
  background-color: var(--background);
  margin: auto;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--white);
  min-width: 270px;

  @media (min-width: 1600px) {
    padding: 1.5em;
    font-size: 1.2vw;
  }
`;

export const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  padding: 1.5em;
  width: 80%;
  margin: auto;
  font-size: 1rem;

  @media (min-width: 1600px) {
    padding: 1.5em;
    width: 80%;
    margin: auto;
    font-size: 1.2vw;
  }
`;
