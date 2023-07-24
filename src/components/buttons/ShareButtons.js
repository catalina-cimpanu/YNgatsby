import React from "react";
import styled from "styled-components";
import { Facebook, Twitter, Linkedin, Mail } from "react-feather";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";

const ShareButtons = ({ url, title, description }) => {
  return (
    <ShareIcons>
      <FacebookShareButton className="icon-btn" url={url} quote={title}>
        <Facebook class="icon" strokeWidth={1.25} />
      </FacebookShareButton>

      <LinkedinShareButton
        className="icon-btn"
        url={url}
        title={title}
        summary={description}
      >
        <Linkedin class="icon" strokeWidth={1.25} />
      </LinkedinShareButton>

      <TwitterShareButton className="icon-btn" url={url} title={title}>
        <Twitter class="icon" strokeWidth={1.25} />
      </TwitterShareButton>

      <EmailShareButton className="icon-btn" url={url} title={title}>
        <Mail class="icon" strokeWidth={1.25} />
      </EmailShareButton>
    </ShareIcons>
  );
};

const ShareIcons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (min-width: 350px) and (max-width: 500px) {
    width: 75%;
  }
  @media screen and (min-width: 500px) {
    width: 50%;
  }

  .icon-btn {
    display: flex;
    place-items: center;
    min-height: fit-content;
  }

  .icon {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.H3toH6};
    transition: ${(props) => props.theme.transition};
    height: 4vh;
    width: 4vh;
    @media screen and (min-width: 320px) {
      height: 3vh;
      width: 3vh;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default ShareButtons;
