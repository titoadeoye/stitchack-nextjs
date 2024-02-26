'use client';

import styled from "styled-components";
import { device } from "@/constants";

export const Wrapper = styled.div`
  padding-inline: 30px;
  padding-bottom: 120px;
  margin-top: 100px;

  margin-left: ${(props) => {
    if (props.page === "landing" || props.isSmallDevice) {
      return 0;
    } else {
      return props.theme.sideBarWidth;
    }
  }};

  @media ${device.laptop} {
    margin-left: ${(props) => {
      if (props.page === "landing" || props.isSmallDevice) {
        return 0;
      } else {
        return "175px";
      }
    }};
  }

  @media ${device.isSmallDevice} {
    padding-inline: 10px;
  }

  @media ${device.tablet} {
    min-height: calc(100vh - 100px);
    padding-bottom: 100px;
  }
`;