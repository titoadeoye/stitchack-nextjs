import React from "react";
import "./NavBar.css";
import { Wrapper, Logo, Button, LinkWrapper, Links } from "./NavBar.style";

const NavBar = () => {
  return (
    <>
      <Wrapper bg="#000000" className="mb-0 nav__bar">
        <LinkWrapper>
          <Logo src="/assets/logo.png" alt="logo" />

          <Links>
            <a className="link" href="/">
              Home
            </a>
            <a className="link" href="/#about">
              About Us
            </a>
            <a className="link" href="/#faqs">
              FAQs
            </a>
            <a className="link" href="/#contact">
              Contact Us
            </a>
            <a className="link" href="signin">
              Log in
            </a>

            <Button>
              <a
                style={{ color: "black" }}
                className="link"
                href="register"
              >
                Sign up
              </a>
            </Button>
          </Links>
        </LinkWrapper>
      </Wrapper>
    </>
  );
};

export default NavBar;
