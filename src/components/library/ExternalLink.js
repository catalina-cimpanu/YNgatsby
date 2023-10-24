import React from "react";
import styled from "styled-components";
import { RiExternalLinkLine } from "react-icons/ri";

const ExternalLink = ({ text, url }) => {
  console.log(text, url);
  return (
    <MyLink href={url}>
      <p>
        {text} <RiExternalLinkLine className="icon" />
      </p>
    </MyLink>
  );
};

const MyLink = styled.a`
  grid-area: ext_link;
  justify-self: right; /* applies only in accordion :) */
  &:hover p {
    color: ${(props) => props.theme.colors.H1H2};
  }

  .icon {
    margin-bottom: -1.5px;
    /* cuz i needed it to be aligned with the text :) */
  }

  p {
    letter-spacing: ${(props) => props.theme.spacing};
    color: ${(props) => props.theme.colors.p};
  }
`;

export default ExternalLink;
