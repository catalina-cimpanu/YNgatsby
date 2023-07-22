import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  margin: 4rem 1rem;
  text-align: center;
`;

const TitleH1 = ({ title }) => {
  return <H1>{title || "hmmm.. title here missing"}</H1>;
};

export default TitleH1;
