import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  margin: 4rem auto;
  text-align: center;
`;

const Title = ({ title }) => {
  return <H2>{title || "hmmm.. title here missing"}</H2>;
};

export default Title;
