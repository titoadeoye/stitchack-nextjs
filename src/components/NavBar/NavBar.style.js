'use client';

import styled from "styled-components";
import { device } from "@/constants";
import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';


export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Logo = styled.img`
  background-color: transparent;
  width: 130px;
  height: 65px;

  @media (min-width: 1600px) {
    height: 7vh;
    width: fit-content;
  }
`;

export const Button = styled.button`
  // background: linear-gradient(139.52deg,#6251C3 -73.08%,#A800AB 150.16%);
  border-radius: 5px;
  border: none;
  margin: 2em 3em;
  padding: 0 2em;
  font-weight: 700;

  @media ${device.isSmallDevice} {
    height: 40px;
    padding: 0;
  }
`;

export const Wrapper = styled(Navbar)`
  background-color: transparent;
  height: 80px;
  padding: 0 2rem;

  @media (min-width: 1600px) {
    height: 10vh;
  }

  .link {
    // margin: 0 0.5em;

    // @media (min-width: 1600px) {
    //     margin: 0 1vw;
    // }
  }

  .link, .link:hover, .link:focus, .link:active {
    color: #EEEEEE;
    font-size: 1.2rem;
    font-weight: 700;
    transition: color 0.5s linear, text-decoration 0.5s linear;
    align-self: center;

    @media (min-width: 1600px) {
      font-size: 1.1vw;
      line-height: 1.1vw;
    } 
  }

  .offcanvas-body button {
    background: var(--white);
    border-radius: 5px;
    color: white !important;
    border: none;
    margin: 0em 2em;

    @media (min-width: 1600px) {
      height: 3vh;
      margin: 0 1.5vw;

    }
  }

  .navbar > .container-fluid {
    height: 80px !important;

    @media (max-width: 760px) {
        margin-top: -1em;
    }
  }

  .navbar-toggler-icon {
    background-color: #fff;
    border-radius: 5px;
  }

  .logo {
    text-align: center;
    display: inline-flex;
    margin-left: 0;
  }
  
  .canvas_logo{
    text-align: center;
    display: inline-flex;
    /* height: 8rem;
    width: 8rem; */
    margin: 0;
  }
  
  
  button.navbar-toggler.collapsed {
    padding: 3px 0;
    width: 2.5em;
    margin: 0em !important;
    position: absolute;
    right: 10px;
    top: 30px;
    background-color: #fff;
  }
`;