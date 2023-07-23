import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { RiCalendarFill, RiPriceTag3Fill, RiUserFill } from "react-icons/ri";

const BlogCardBlogpage = ({
  updatedAt,
  author,
  blogpost_title,
  blogpost_slug,
  blogpost_summary,
  blogpost_image: {
    localFile: { extension, publicURL, childImageSharp },
    alternativeText,
  },
  blog_categories,
}) => {
  return (
    <BlogCard to={`/blog/${blogpost_slug}`}>
      <div className="meta-div">
        {!childImageSharp && extension === "svg" ? (
          <PhotoSVG src={publicURL} alt={alternativeText} />
        ) : (
          <Photo
            image={childImageSharp.gatsbyImageData}
            alt={alternativeText}
            layout="fullWidth"
          />
        )}
        <Photo />
        <Details>
          <li className="detail">
            <RiUserFill />
            {author ? author.username : "Catalina"}
          </li>
          <li className="detail">
            <RiCalendarFill />
            {updatedAt}
          </li>
          {blog_categories && (
            <li className="detail">
              <RiPriceTag3Fill />
              {blog_categories.map(
                (category, index) =>
                  index < 3 && (
                    <span index={index}>{category.blog_category_name}</span>
                  )
              )}
            </li>
          )}
        </Details>
      </div>
      <div className="description">
        <h3>{blogpost_title}</h3>
        <div className="underline"></div>
        <p>{blogpost_summary}</p>
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
  margin: 0 0 2rem 0;
  box-shadow: ${(props) => props.theme.elevations.elevation3};
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
  @media screen and (min-width: 900px) {
    height: 37vh;
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
    height: 100%;
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

    p {
      max-height: 34%;
      overflow: auto;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .underline {
    height: 0.3rem;
    margin: 0.5rem 0;
    background: ${(props) => props.theme.colors.primary};
    width: 30%;
    border-radius: 3px;
  }

  .continue {
    color: ${(props) => props.theme.colors.H1H2};
    font-weight: bold;
    letter-spacing: ${(props) => props.theme.spacing};
    height: min-content;
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

// had to make them as components cuz of the hover effect ${BlogCard} thingy
const Photo = styled(GatsbyImage)`
  -webkit-transition: -webkit-transform 0.2s;
  position: absolute;
  height: 100%;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  ${BlogCard}:hover & {
    -webkit-transform: scale(1.3) rotate(3deg);
    transform: scale(1.3) rotate(3deg);
  }
`;

const PhotoSVG = styled.img`
  background-color: ${(props) => props.theme.colors.sectionBg2};
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2rem;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  ${BlogCard}:hover & {
    -webkit-transform: scale(1.3) rotate(3deg);
    transform: scale(1.3) rotate(3deg);
  }
`;

const Details = styled.ul`
  list-style: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100%;
  color: ${(props) => props.theme.colors.onDark};
  background: ${(props) => props.theme.colors.transparentBg};
  width: 100%;
  padding: 2rem;
  display: grid;
  /* grid-template-row: repeat(3, 1fr); */
  justify-content: center;
  justify-items: center;
  align-content: space-evenly;
  text-align: center;
  -webkit-transition: left 0.2s;
  transition: left 0.2s;
  ${BlogCard}:hover & {
    left: 0%;
  }

  .detail {
    margin: auto;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }

  .tag {
    background-color: ${(props) => props.theme.colors.tag};
    border-radius: ${(props) => props.theme.radiusL};
    padding: 0.1rem 0.3rem 0 0.3rem;
    margin: 0.2rem 0.2rem 0.2rem 0;
    width: max-content;
    height: max-content;
  }
`;

export default BlogCardBlogpage;
