"use client";

import styled from "styled-components";
import { device } from "@/constants";

export const Page = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;

  @media ${device.isSmallDevice} {
    flex-direction: column;
  }
`;

export const Main = styled.section`
  width: 65%;

  @media ${device.isSmallDevice} {
    width: 100%;
  }
`;

export const SideBar = styled.section`
  width: 35%;

  @media ${device.isSmallDevice} {
    width: 100%;
  }
`;
