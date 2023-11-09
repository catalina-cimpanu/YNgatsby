import React from "react";
import styled from "styled-components";
import ContentsSingleLink from "./ContentsSingleLink";

const ContentsSummary = ({ summary_title, subskill, sub }) => {
  const link = subskill ? `${summary_title + subskill}` : `${summary_title}`;
  return (
    <Summary sub={sub}>
      <ContentsSingleLink link_text={summary_title} link_url={link} inSummary />
    </Summary>
  );
};

const Summary = styled.summary`
  line-height: 1.25;
  font-size: ${(props) => (props.sub ? "0.8rem" : "1.2rem")};
  margin-left: ${(props) => props.sub && "1rem"};
`;
export default ContentsSummary;
