import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { IoIosArrowUp } from "react-icons/io";
import { ThemeContext } from "../../context/Provider";

const ToTopButton = () => {
  const { showButton } = React.useContext(ThemeContext);
  return (
    <>
      {showButton && (
        <Button aria-label="to top">
          <Link className="link" to="#top">
            <IoIosArrowUp />
          </Link>
        </Button>
      )}
    </>
  );
};

const Button = styled.button`
  z-index: 3;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: fixed;
  bottom: calc(1rem + 2.5rem);
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
  margin-bottom: 0.5rem;
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
