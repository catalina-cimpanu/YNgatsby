import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>
        Edit <code>src/pages/index.js</code> to see this page update in
        real-time. 😎
      </p>
      <StaticImage
        alt="Young Neuros Logo"
        src="../images/icon.png"
        placeholder="blurred"
        width={200}
        height={200}
      />
    </Layout>
  );
};

export default HomePage;

export const Head = () => <title>Home | Young Neuros</title>;
