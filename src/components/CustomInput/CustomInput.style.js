"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  // --horizontal-padding: 20px;
  // --verical-padding: 9px;
  --error-font-size: 1rem;
  --border-width: 3px;

  display: flex;
  align-items: center;
  border-radius: 9.5px;
  position: relative;
  justify-content: center;
  background: white;
  margin: auto;
  margin-bottom: ${(props) => (props.error && props.touched ? 40 : 20)}px;
  border: 1px solid #ccc;

  @media (min-width: 1600px) {
    margin: auto auto 2.3vw;
  }

  .tel {
    margin-left: 1em;
    font-weight: 800;
  }

  svg {
    position: absolute;
    right: 6px;
    top: 37%;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"],
  input[type="date"] {
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    flex: 1;
    margin: 0;
    letter-spacing: 1px;
    color: #141414;
    height: 40px;
    padding-left: 1rem;
    background-color: rgba(246, 229, 247, 0.03);

    @media (min-width: 1600px) {
      font-size: 1.3vw;
      height: 4vw;
      padding-left: 1vw;
    }
  }

  input[type="checkbox"] {
    @media (min-width: 1600px) {
      height: 2vw;
      width: 2vw;
    }
  }

  input[type="textarea"] {
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    flex: 1;
    margin: 0;
    letter-spacing: 1px;
    color: grey;
    height: 180px;
    background-color: rgba(0, 87, 255, 0.02);
  }

  input[type="tel"] {
    margin-left: 1em;
  }

  input::placeholder {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #141414;

    @media (min-width: 1600px) {
      font-size: 1.3vw;
      height: 4vw;
      padding-left: 1vw;
    }
  }

  .right-text {
    color: #ccc;
    font-size: 0.6em;
    padding: 1em;
    font-weight: 600;
  }

  @media (max-width: 520px) {
    width: 30rem;
  }


  @media (max-width: 425px) {
    width: 25rem;
  }

  &.border-yellow {
    border: var(--border-width) solid
      ${(props) =>
        props.error && props.touched ? "red" : props.theme.primaryColor};
  }

  &.short {
    width: max-content;
  }

  select {
    background-color: rgba(0, 87, 255, 0.02);
    border: none;
    margin: 0;
    width: 100%;
    font-family: inherit;
    cursor: inherit;
    color: ${(props) => props.theme.white};
    line-height: inherit;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    padding: 0 1em;
    flex: 1;
    margin: 0;
    letter-spacing: 1px;
    color: grey;
    text-transformm: capitalize;
    z-index: 1;
    outline: none;
    height: 51px;
  }

  option {
    background-color: #fff;
    text-transform: capitalize;
  }

  &.nav {
    max-width: 400px;

    input[type="text"] {
      color: ${(props) => props.theme.grey};
    }

    @media (max-width: 786px) {
      max-width: 300px;
    }
  }

  &:after {
    content: "${(props) => props.touched && props.error}";
    position: absolute;
    left: 0%;
    bottom: calc((var(--error-font-size) + (var(--border-width) * 4)) * -1);
    font-size: 11px;
    margin-bottom: 0.5rem;
    width: 100%;
    color: red;
    transform: none;

    @media (max-width: 520px) {
        font-size: 9px;
    }

    @media (min-width: 1600px) {
      bottom: -2vw;
      font-size: 1vw;
    }
  }
`;

export const Label = styled.label`
	display: flex;
	align-items: center;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 1rem;
	cursor: pointer;
	position: relative;
	text-align: center;
	margin-bottom: 1em;
	justify-content: center;

	@media (min-width: 1600px) {
        font-size: 1.2vw;
		line-height: 1.2vw;
		margin: 1.5vw 0;
    }


	a {
		text-decoration: none;
		color: #141414;
		font-weight: 600;
	}

    &:after {
		content: "${(props) => props.touched && props.error}";
		color: red;
		position: absolute;
		left: 50%;
		bottom: -18px;
		font-size: 9px;
		transform: translateX(-50%);
		width: 100%;
        

		@media (min-width: 1600px) {
			bottom: -1.3vw;
			font-size: 1vw;
		}
	}
`;
