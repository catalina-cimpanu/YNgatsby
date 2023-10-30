import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

// https://medium.com/@daniwhkim/how-do-i-get-set-top-position-of-elements-scrolltop-offsettop-pageyoffset-scrolly-help-275a7ada5569
// it didn't work with window, but it worked with document.body

const ToTopButton = ({ showBelow }) => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (document.body.scrollTop > showBelow) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const goToTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  });

  return (
    <Button
      aria-label="to top"
      style={{ display: show ? "block" : "none" }}
      onClick={goToTop}
    >
      <IoIosArrowUp />
    </Button>
  );
};

const Button = styled.button`
  z-index: 3;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: fixed;
  bottom: 4rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.2rem;
  display: grid;
  place-items: center;
  border-radius: ${(props) => props.theme.radiusL};
  background-color: ${(props) => props.theme.colors.surface1};
  border: solid 2px ${(props) => props.theme.colors.buttonTextSecondary};
  box-shadow: ${(props) => props.theme.shadows.shadowTab};
  -webkit-box-shadow: ${(props) => props.theme.shadows.shadowTab};
  transition: ${(props) => props.theme.transition};
  @media screen and (min-width: 900px) {
    bottom: 2rem;
    right: 2rem;
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonTextSecondary};
  }
  &:hover p {
    color: ${(props) => props.theme.colors.buttonTextPrimary};
  }

  .link {
    color: ${(props) => props.theme.colors.buttonTextSecondary};
    font-size: 1rem;
    line-height: 1;
    text-align: center;
  }
`;

export default ToTopButton;
