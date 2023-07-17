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
            <SocialLink aria-label={`social link to ${url}`} href={url}>
              {icon}
            </SocialLink>
          </li>
        );
      })}
    </SocialList>
  );
};

const SocialList = styled.ul`
  margin: 0 auto 1rem auto;
  width: 7rem;
  display: flex;
  justify-content: space-around;
`;

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

export default FooterSocialLinks;
