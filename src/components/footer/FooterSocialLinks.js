import React from "react";
import styled from "styled-components";
import SocialLinksArray from "../../constants/socialLinks";

const FooterSocialLinks = () => {
  return (
    <SocialList>
      {SocialLinksArray.map((socialLink) => {
        const { id, url, icon } = socialLink;
        return (
          <li key={id}>
            <a aria-label={`social link to ${url}`} href={url}>
              {icon}
            </a>
          </li>
        );
      })}
    </SocialList>
  );
};

const SocialList = styled.ul`
  @media screen and (min-width: 350px) {
    width: 25vw;
    justify-self: center;
  }
  display: flex;
  justify-content: space-evenly;
  a {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.H1H2};
    transition: ${(props) => props.theme.transition};
    border-radius: ${(props) => props.theme.radiusL};
    /* height is the same as for round icons */
    height: 5vh;
    width: 5vh;
    @media screen and (min-width: 320px) {
      height: 4vh;
      width: 4vh;
    }
    /* rules for the elements inside it = the icons */
    display: grid;
    align-content: center;
    justify-content: center;
    &:hover {
      color: ${(props) => props.theme.colors.bg};
      background-color: ${(props) => props.theme.colors.H1H2};
      border-radius: ${(props) => props.theme.radiusL};
    }
  }
`;

export default FooterSocialLinks;
