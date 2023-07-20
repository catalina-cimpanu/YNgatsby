import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogCard = ({
  id,
  index,
  blogpost_slug,
  blogpost_title,
  blogpost_summary,
  blog_categories,
  blogpost_image,
}) => {
  const blog_img = blogpost_image.localFile.childImageSharp.gatsbyImageData;
  return (
    <Card
      key={id}
      index={index}
      to={`/blog/${blogpost_slug}`}
      aria-label={`link to the article ${blogpost_title}`}
    >
      {blog_img && (
        <GatsbyImage
          className="card-image"
          image={blog_img}
          alt={blogpost_title}
        />
      )}
      <div className="card-body">
        <div className="tags">
          {/* this thing is a bit shitty code, but I didn't know how to get the
          first element without iterating ocver them */}
          {blog_categories.map(
            (category, index) =>
              index === 0 && (
                <p className="tag" key={category.id}>
                  {category.blog_category_name}
                </p>
              )
          )}
        </div>
        <h3>{blogpost_title}</h3>
        <p>{blogpost_summary}</p>
      </div>
    </Card>
  );
};

const Card = styled(Link)`
  display: ${(props) => (props.index > 2 ? "none" : "block")};
  min-height: 370px;
  max-height: 500px;
  min-width: 100%;
  border-radius: ${(props) => props.theme.radiusL};
  box-shadow: ${(props) => props.theme.elevations.elevation3};
  background-color: ${(props) => props.theme.colors.surface2};
  margin: 0 0.3rem 2rem 0.3rem;
  transition: ${(props) => props.theme.transition};

  .card-image {
    height: 45%;
    border-top-left-radius: ${(props) => props.theme.radiusL};
    border-top-right-radius: ${(props) => props.theme.radiusL};
  }

  .card-body {
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1.5rem 2rem 1.5rem;
    margin-bottom: 0;
    border-bottom-left-radius: ${(props) => props.theme.radiusL};
    border-bottom-right-radius: ${(props) => props.theme.radiusL};
  }

  .tags {
    display: flex;
    align-content: flex-end;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .tag {
    background-color: ${(props) => props.theme.colors.tag};
    border-radius: ${(props) => props.theme.radiusL};
    padding: 0.1rem 0.5rem;
    margin: 0 0.2rem 0.2rem 0;
    width: max-content;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    overflow-y: auto;
  }

  /* the whole freaking logic behind the animation */

  &:hover {
    transform: scale(1.02);
    box-shadow: ${(props) => props.theme.shadows.shadowTab};
  }
  @media screen and (min-width: 600px) {
    min-width: 0px;
    max-width: 48%;
  }
  @media screen and (min-width: 900px) {
    max-width: 31%;
  }
  /* only for pcs */
  @media screen and (min-width: 1025px) {
    display: block;
    max-width: 31%;
    box-shadow: -1rem 0 1rem rgba(0, 0, 0, 0.2),
      ${(props) => props.theme.elevations.elevation3};
    transition: 0.2s;
    position: relative;
    &:focus-within ~ & {
      transform: translateX(130px);
      transition: 0.2s;
    }
    &:hover ~ & {
      transform: translateX(130px);
      transition: 0.2s;
    }
    &:hover {
      transform: translateY(-1rem);
      transition: 0.2s;
    }
    &:not(:first-child) {
      margin-left: -130px;
    }
  }
  @media screen and (min-width: 1064px) {
    max-width: 30%;
  }
  @media screen and (min-width: 1170px) {
    max-width: 29%;
  }
  @media screen and (min-width: 1300px) {
    max-width: 28%;
  }
  @media screen and (min-width: 1462px) {
    max-width: 27%;
  }
  @media screen and (min-width: 1671px) {
    max-width: 26%;
  }
  @media screen and (min-width: 1950px) {
    max-width: 25%;
  }
  @media screen and (min-width: 2340px) {
    max-width: 24%;
  }
  @media screen and (min-width: 2925px) {
    max-width: 23%;
  }
`;

BlogCard.propTypes = {
  id: PropTypes.string.isRequired,
  blogpost_title: PropTypes.string.isRequired,
  blogpost_summary: PropTypes.string.isRequired,
  blogpost_slug: PropTypes.string.isRequired,
  blogpost_image: PropTypes.object,
  blog_categories: PropTypes.array,
};

export default BlogCard;
