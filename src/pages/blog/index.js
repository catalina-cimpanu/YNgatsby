import * as React from "react";
import Layout from "../../components/Layout";

const BlogPage = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <p>This is the Blog page</p>
    </Layout>
  );
};

export default BlogPage;

export const Head = () => <title>Blog | Young Neuros</title>;
