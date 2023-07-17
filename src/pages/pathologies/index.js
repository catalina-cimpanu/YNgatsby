import * as React from "react";
import Layout from "../../components/Layout";

const PathologiesPage = () => {
  return (
    <Layout>
      <h1>Pathologies</h1>
      <p>This is the pathologies page</p>
    </Layout>
  );
};

export default PathologiesPage;

export const Head = () => <title>Pathologies | Young Neuros</title>;
