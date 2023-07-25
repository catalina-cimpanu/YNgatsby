import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const PreviousNextButtons = ({ activeArticle }) => {
  console.log("here it is", activeArticle);
  return (
    <ButtonsDiv>
      <Link
        className="link previous"
        aria-label="previous blogpost"
        to={
          activeArticle.previous
            ? "/blog/" + activeArticle.previous.blogpost_slug
            : "#"
        }
      >
        ❮ Previous post
        <span>
          {activeArticle.previous
            ? activeArticle.previous.blogpost_title
            : "No previous posts. You've read all the posts! Congrats! 👏🎉"}
        </span>
      </Link>
      <Link
        className="link next"
        aria-label="next blogpost"
        to={
          activeArticle.next ? "/blog/" + activeArticle.next.blogpost_slug : "#"
        }
      >
        Next post ❯
        <span>
          {activeArticle.next
            ? activeArticle.next.blogpost_title
            : "No more  posts. You've read all the posts! Congrats! 👏🎉"}
        </span>
      </Link>
    </ButtonsDiv>
  );
};

const ButtonsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  margin: 1rem 0 3rem 0;

  .link {
    color: ${(props) => props.theme.colors.p};
    background-color: ${(props) => props.theme.colors.surface1};
    box-shadow: ${(props) => props.theme.elevations.elevation3};
    text-align: ${(props) => (props.forNext ? "right" : "left")};
    padding: 0.3rem 0;
    padding-right: ${(props) => (props.forNext ? "0.5rem" : "2rem")};
    padding-left: ${(props) => (props.forNext ? "2rem" : "0.5rem")};
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    &:hover {
      transform: scale(1.03);
    }
  }

  .previous {
    text-align: left;
    padding-right: 2rem;
    padding-left: 0.5rem;
  }

  .next {
    text-align: right;
    padding-right: 0.5rem;
    padding-left: 2rem;
  }
  span {
    display: block;
    font-weight: bold;
  }
`;

export default PreviousNextButtons;
