import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import { ThemeContext } from "../../context/Provider";

const BlogSidebar = ({ blogPage }) => {
  const { closePageContents } = React.useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query {
      allStrapiBlogCategory(sort: { blog_category_name: ASC }) {
        nodes {
          blog_category_name
          blog_category_slug
        }
      }
    }
  `);
  const categories = data.allStrapiBlogCategory.nodes;
  return (
    <Aside>
      <h3>Categories: </h3>
      <ul className="tags-list">
        {categories.map((category, index) => {
          return (
            <button className="tag-button" onClick={closePageContents}>
              <Link
                key={index}
                className="tag-link"
                to={`/blog/${category.blog_category_slug}`}
              >
                {category.blog_category_name}
              </Link>
            </button>
          );
        })}
      </ul>
    </Aside>
  );
};

const Aside = styled.aside`
  display: none;
  max-height: 50vh; /* TODO to see exactly how high when i have all the categs */
  overflow-x: visible;
  overflow-y: auti;
  @media screen and (min-width: 900px) {
    width: 100%;
    text-align: right;
    height: max-content;
    display: flex;
    flex-direction: column;
    position: -webkit-sticky;
    position: sticky;
    top: 5.5rem; /* necessary for sticky positioning */
  }

  .tags-list {
    padding: 0;
    margin-top: 1rem;
    list-style: none;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .tag-button {
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    height: 2rem;
    width: max-content;
    background-color: ${(props) => props.theme.colors.tag};
    font-size: 1.2rem;
    letter-spacing: ${(props) => props.theme.spacing};
    border-radius: ${(props) => props.theme.radiusL};
    box-shadow: ${(props) => props.theme.elevations.elevation3};
    -webkit-box-shadow: ${(props) => props.theme.elevations.elevation3};
    padding: 0.2rem 0.7rem;
    margin-bottom: 0.5rem;
    transition: ${(props) => props.theme.transition};
    &:hover {
      transform: scale(1.1);
    }
  }
  .tag-link {
    color: ${(props) => props.theme.colors.buttonTextSecondary};
  }
`;

export default BlogSidebar;
