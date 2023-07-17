import * as React from "react";
import Layout from "../../components/Layout";

const NeuroskillsPage = () => {
  return (
    <Layout>
      <h1>NeuroSkills</h1>
      <p>This is the Neuroskills page</p>
    </Layout>
  );
};

export default NeuroskillsPage;

export const Head = () => <title>Neuroskills | Young Neuros</title>;
