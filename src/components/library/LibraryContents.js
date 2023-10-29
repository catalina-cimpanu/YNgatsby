import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { ThemeContext } from "../../context/Provider";
import { FilterLocationsWithInfos } from "./libraryFunctions";
import ContentsSingleLink from "./ContentsSingleLink";
import ContentsSummary from "./ContentsSummary";

const LibraryContents = ({ links, title, pureLinks, locations }) => {
  const { closePageContents } = React.useContext(ThemeContext);
  const locationsWithLinks =
    locations && FilterLocationsWithInfos(links, locations);
  return (
    <Details open>
      <ContentsSummary summary_title={title} />
      {pureLinks &&
        locationsWithLinks.map((location, index) => {
          console.log(location);
          return (
            <ContentsSingleLink
              index={index}
              link_text={location.location_name}
              link_url={location.location_name}
              pureLinks={pureLinks}
            />
          );
        })}
      {!pureLinks &&
        (locationsWithLinks ? (
          locationsWithLinks.map((location, index) => {
            return (
              <Details key={index} open>
                <ContentsSummary summary_title={location.location_name} sub />
                {location.infos.map((info, index) => {
                  const {
                    contents_link: { link_text, link_url },
                  } = info;
                  return (
                    <ContentsSingleLink
                      index={index}
                      link_text={link_text}
                      link_url={link_url}
                      sub
                    />
                  );
                })}
              </Details>
            );
          })
        ) : (
          <ul>
            {links.map((link, index) => {
              const {
                contents_link: { link_text, link_url },
              } = link;

              return (
                <ContentsSingleLink
                  index={index}
                  link_text={link_text}
                  link_url={link_url}
                />
              );
            })}
          </ul>
        ))}
    </Details>
  );
};

const Details = styled.details`
  display: block;
  white-space: nowrap;
  position: relative;
`;

export default LibraryContents;
