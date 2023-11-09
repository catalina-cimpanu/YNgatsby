import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import TitleH1 from "../components/titles/TitleH1";
import NotFoundImg from "../images/not_found.inline.svg";

const NotFoundPage = () => {
  return (
    <Layout>
      <TitleH1 title="Page not found" />
      <Wrapper>
        <NotFoundImg className="img" />
        <p>
          Sorry, we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/">Go Home</Link>
        </p>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  margin-bottom: 3rem;
  .img {
    width: 80%;
    margin: 3rem;
  }
`;

export default NotFoundPage;

export const Head = () => {
  return (
    <Seo
      title="Page not found"
      description="The page that you are looking for doesn't exist."
      pathname="/404"
      image="not_found.png"
      alt="not found image"
    />
  );
};
