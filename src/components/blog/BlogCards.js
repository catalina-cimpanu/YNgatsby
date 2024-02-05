import React from "react";
import styled from "styled-components";
import TitleH2 from "../titles/TitleH2";
import { Link } from "gatsby";
import BlogCard from "./BlogCard";
import BlogCardBlogPage from "./BlogCardBlogpage";
import SecondaryButton from "../buttons/SecondaryButton";

const BlogCards = ({ title, articles, showLink }) => {
  return (
    <Section inSection={showLink}>
      {title && <TitleH2 title={title} />}
      <div className="card-list">
        {articles.map((article, index) => {
          return showLink ? (
            <BlogCard key={index} index={index} article={article} />
          ) : (
            <BlogCardBlogPage key={index} index={index} article={article} />
          );
        })}
      </div>
      {showLink && (
        <div className="see-link">
          <SecondaryButton buttonLink="/blog" buttonText="see more posts" />
        </div>
      )}
    </Section>
  );
};

const Section = styled.section`
  background-color: ${(props) =>
    props.inSection && props.theme.colors.sectionBg};
  padding-top: 0.1rem;
  z-index: 1;
  .card-list {
    margin: ${(props) => (props.inSection ? "0 8%" : "")};
    padding-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
  .see-link {
    display: grid;
    place-items: center;
    padding: 1rem 0 4rem 0;
    /* so that the button shows in the middle, cuz padding bottom 1 rem of the cardlist + margin-bottom 2 rem of the card */
  }
`;

export default BlogCards;
