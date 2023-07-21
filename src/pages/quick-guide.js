import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const QuickGuide = () => {
  return (
    <Layout>
      <Container>
        <h1>Quick guide page</h1>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  margin: 0 8%;
`;

export default QuickGuide;
