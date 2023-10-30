import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { ThemeContext } from "../../context/Provider";

const TagsList = ({ categories, center }) => {
  const { closePageContents } = React.useContext(ThemeContext);

  return (
    <List center={center}>
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
    </List>
  );
};

const List = styled.ul`
  padding: 0;
  margin-top: 1rem;
  list-style: none;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? "center" : "flex-end")};

  .tag-button {
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: right;
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

export default TagsList;
