import React from "react";
import styled from "styled-components";
import SocialLinksArray from "../../constants/socialLinks";

const SideMenuSocialLinks = () => {
  return (
    <SocialList>
      {SocialLinksArray.map((socialLink) => {
        const { id, url, icon } = socialLink;
        return (
          <li key={id}>
            <SocialLink aria-label={`social link to ${url}`} href={url}>
              {icon}
            </SocialLink>
          </li>
        );
      })}
    </SocialList>
  );
};

// .social-links (ul)
const SocialList = styled.ul`
  margin: 0.3rem auto 0.3 auto;
  width: 7rem;
  display: flex;
  justify-content: space-around;
  @media screen and (min-height: 305px) {
    margin: 0.3rem auto 0 auto;
  }
  @media screen and (min-height: 325px) {
    margin: 1rem auto 0 auto;
  }
  @media screen and (min-height: 350px) {
    margin: 1.5rem auto 0 auto;
  }
  @media screen and (min-height: 400px) {
    margin: 2rem auto 0 auto;
  }
  @media screen and (min-height: 500px) {
    margin: 1.5rem auto 0 auto;
  }
  @media screen and (min-height: 550px) {
    margin: 2.5rem auto 0 auto;
  }
  @media screen and (min-height: 600px) {
    margin: 3rem auto 0 auto;
  }
  @media screen and (min-height: 650px) {
    margin: 4rem auto 0 auto;
  }
  @media screen and (min-height: 700px) {
    margin: 5rem auto 0 auto;
  }
  @media screen and (min-height: 750px) {
    margin: 6rem auto 0 auto;
  }
  @media screen and (min-height: 800px) {
    margin: 7rem auto 0 auto;
  }
`;
// .social-link (li)
const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.H1H2};
  transition: ${(props) => props.theme.transition};
  border-radius: ${(props) => props.theme.radiusL};
  display: flex;
  padding: 3px;
  :hover {
    color: ${(props) => props.theme.colors.bg};
    background-color: ${(props) => props.theme.colors.H1H2};
    border-radius: ${(props) => props.theme.radiusL};
  }
`;

export default SideMenuSocialLinks;
