import React, { useState } from "react";
import styled from "styled-components";
import BlogCards from "./BlogCards";

const LoadBlogposts = ({ articles }) => {
  const [hasMore, setMore] = useState(articles.length > 3);
  const [currentList, addToList] = useState([...articles.slice(0, 3)]);

  const loadArticles = () => {
    const currentLength = currentList.length;
    const more = currentLength < articles.length;
    const nextArticles = more
      ? articles.slice(currentLength, currentLength + 3)
      : [];
    setMore(more);
    addToList([...currentList, ...nextArticles]);
  };

  const handleClick = () => {
    if (hasMore) {
      loadArticles();
    } else {
      return null;
    }
  };
  return (
    <Container>
      <BlogCards articles={currentList} title={false} />
      {!hasMore && <p className="msg">That's all on this page!</p>}
      {hasMore && (
        <button
          className="button"
          aria-label="load more articles"
          onClick={handleClick}
        >
          <p>load more articles</p>
        </button>
      )}
    </Container>
  );
};

const Container = styled.div`
  grid-column: 1/2;
  width: 100%;
  display: grid;
  justify-items: center;

  .msg {
    display: block;
    padding: 2rem 0 5rem 0;
    text-transform: capitalize;
    letter-spacing: ${(props) => props.theme.spacing};
    font-size: 1.5rem;
  }

  .button {
    appearance: none;
    outline: none;
    cursor: pointer;
    width: max-content;
    padding: 0.3rem 0.7rem 0.4rem;
    margin: 1rem 0 4rem 0;
    text-align: center;
    border-radius: ${(props) => props.theme.radiusL};
    background-color: ${(props) => props.theme.colors.surface1};
    border: solid 2px ${(props) => props.theme.colors.buttonTextSecondary};
    box-shadow: ${(props) => props.theme.elevations.elevation6};
    -webkit-box-shadow: ${(props) => props.theme.elevations.elevation6};
    &:hover {
      transition: ${(props) => props.theme.transition};
      background-color: ${(props) => props.theme.colors.buttonTextSecondary};
    }
    &:hover p {
      color: ${(props) => props.theme.colors.buttonTextPrimary};
    }
    p {
      color: ${(props) => props.theme.colors.buttonTextSecondary};
      font-family: ${(props) => props.theme.fonts.primary};
      text-transform: capitalize;
      letter-spacing: ${(props) => props.theme.spacing};
      line-height: 1;
    }
  }
`;

export default LoadBlogposts;
