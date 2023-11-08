import React from "react";
import styled from "styled-components";
import TagsList from "./TagsList";

const BlogSidebar = ({ categories }) => {
  console.log(categories);
  return (
    <Aside>
      <h3>Categories:</h3>
      <TagsList categories={categories} />
    </Aside>
  );
};

const Aside = styled.aside`
  display: none;
  max-height: calc(100vh - 5.5rem);
  overflow-x: visible;
  @media screen and (min-width: 900px) {
    /* max-width: 100%; */
    text-align: right;
    height: max-content;
    display: flex;
    flex-direction: column;
    position: -webkit-sticky;
    position: sticky;
    top: 5.5rem; /* necessary for sticky positioning */
  }
`;

export default BlogSidebar;
