import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { RiCalendarFill, RiPriceTag3Fill } from "react-icons/ri";

const BlogCardBlogpage = ({
  updatedAt,
  blogpost_title,
  blogpost_slug,
  blogpost_summary,
  blogpost_image: {
    localFile: {
      extension,
      publicURL,
      childImageSharp: { gatsbyImageData },
    },
    alternativeText,
  },
  blog_categories: { blog_category_id, blog_category_name, blog_category_slug },
}) => {
  return (
    <BlogCard to={`/blog/${blogpost_slug}`}>
      <div className="meta-div">
        {!gatsbyImageData && extension === "svg" ? (
          <PhotoSVG src={publicURL} alt={alternativeText} />
        ) : (
          <Photo image={gatsbyImageData} alt={alternativeText} />
        )}
        <Photo />
        <Details />
      </div>
      <div className="description">
        <h3>{blogpost_title}</h3>
        <p>{blogpost_summary}</p>
        <div className="underline"></div>
        <p className="continue">continue reading</p>
      </div>
    </BlogCard>
  );
};

const BlogCard = styled(Link)`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  margin: 1rem auto;
  box-shadow: ${(props) => props.theme.elevations.elevation3};
  margin-bottom: 1.5rem;
  background: ${(props) => props.theme.colors.surface1};
  line-height: 1.4;
  border-radius: ${(props) => props.theme.radiusL};
  overflow: hidden;
  width: 100%;
  @media (min-width: 640px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
  }

  .meta-div {
    position: relative;
    z-index: 0;
    height: 200px;
    @media (min-width: 640px) {
      flex-basis: 40%;
      height: auto;
    }
  }

  .description {
    z-index: 1;
    min-height: 350px;
    padding: 2rem 1rem;
    background: ${(props) => props.theme.colors.surface1};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom-left-radius: ${(props) => props.theme.radius};
    border-bottom-right-radius: ${(props) => props.theme.radius};
    @media (min-width: 640px) {
      flex-basis: 60%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      &::before {
        -webkit-transform: skewX(-3deg);
        transform: skewX(-3deg);
        content: "";
        background: ${(props) => props.theme.colors.surface1};
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }
  }

  .underline {
    height: 0.3rem;
    background: ${(props) => props.theme.colors.primary};
    width: 30%;
    border-radius: 3px;
  }

  .continue {
    color: ${(props) => props.theme.colors.H1H2};
    font-weight: bold;
    letter-spacing: ${(props) => props.theme.spacing};
    &:after {
      content: "❱";
      margin-left: -10px;
      opacity: 0;
      vertical-align: middle;
      -webkit-transition: margin 0.3s, opacity 0.3s;
      transition: margin 0.3s, opacity 0.3s;
    }
    &:hover:after {
      margin-left: 5px;
      opacity: 1;
    }
  }

  h3 {
    font-size: 1.2rem;
  }
`;

const Photo = styled(GatsbyImage)`
  -webkit-transition: -webkit-transform 0.2s;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background-size: cover; */
  /* background-position: center; */
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  ${BlogCard}:hover & {
    -webkit-transform: scale(1.3) rotate(3deg);
    transform: scale(1.3) rotate(3deg);
  }
`;

const PhotoSVG = styled.img`
  /* background-image: url(${(props) => props.bgImg}); */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background-size: cover;
  background-position: center; */
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  ${BlogCard}:hover & {
    -webkit-transform: scale(1.3) rotate(3deg);
    transform: scale(1.3) rotate(3deg);
  }
`;

const Details = styled.div`
  list-style: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100%;
  color: ${(props) => props.theme.colors.onDark};
  background: ${(props) => props.theme.colors.transparentBg};
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  -webkit-transition: left 0.2s;
  transition: left 0.2s;
  ${BlogCard}:hover & {
    left: 0%;
  }
`;

export default BlogCardBlogpage;
