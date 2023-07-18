import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <Container id="description">
      <h4>
        Young Neuros is a website for young neurologists that smartly organizes
        various resources and gives access to an exclusive community, with the
        purpose of optimizing early career development and self-growth.
      </h4>
      <div></div>
      <h4>
        At Young Neuros we encourage communication and connection, because we
        believe in learning, sharing, and discussing as promoters of growth,
        prosperity, and success.
      </h4>
    </Container>
  );
};

const Container = styled.div`
  z-index: 2;
  background: ${(props) => props.theme.colors.sectionBg};
  padding: 5rem 8%;
  text-align: justify;
  display: flex;
  flex-direction: column;
  /* place-items: center; */
  /* justify-content: space-around;
  align-content: space-around; */
  h4 {
    line-height: 1.8rem;
    text-transform: none;
    font-size: clamp(1.2rem, 1.6vw, 1.5rem);
    @media screen and (max-height: 300px), (max-width: 300px) {
      font-size: 0.8rem;
    }
  }
  div {
    height: clamp(2rem, 2vh, 6rem);
  }
`;

export default Description;
