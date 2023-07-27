import React from "react";
import styled from "styled-components";
import { destructureGuideline, destructureResource } from "./libraryFunctions";
import ExternalLink from "./ExternalLink";

const AccordionsList = ({ infos, type }) => {
  return (
    <List>
      {type === "guidelines" &&
        infos.map((info, index) => {
          const guideline = destructureGuideline(info);
          return <p key={index}>{guideline.title}</p>;
        })}
      {type === "resources" &&
        infos.map((info, index) => {
          const resource = destructureResource(info);
          return <p key={index}>{resource.title}</p>;
        })}
      {type === "links" &&
        infos.map((info, index) => {
          return (
            <ExternalLink
              key={index}
              text={info.link_text}
              url={info.link_url}
            />
          );
        })}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default AccordionsList;
