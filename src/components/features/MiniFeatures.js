import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import MiniFeatureCard from "./MiniFeatureCard";

const MiniFeaturesImported = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allAdvantages: allStrapiMinifeature(
  //       filter: { minifeature_type: { eq: "advantage" } }
  //     ) {
  //       nodes {
  //         id
  //         minifeature_title
  //         minifeature_description
  //         minifeature_image {
  //           alternativeText
  //           localFile {
  //             extension
  //             publicURL
  //             childImageSharp {
  //               gatsbyImageData(layout: FULL_WIDTH)
  //             }
  //           }
  //         }
  //       }
  //     }
  //     allActions: allStrapiMinifeature(
  //       filter: { minifeature_type: { eq: "action" } }
  //     ) {
  //       nodes {
  //         minifeature_title
  //         minifeature_description
  //         minifeature_image {
  //           alternativeText
  //           localFile {
  //             extension
  //             publicURL
  //             childImageSharp {
  //               gatsbyImageData(layout: FULL_WIDTH)
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // const {
  //   allAdvantages: { nodes: advantages },
  // } = data;
  // const {
  //   allActions: { nodes: actions },
  // } = data;
  return (
    <div>
      <MiniFeaturesSection blue>
        <h2>Our philosophy</h2>
        <div className="minifeatures-row ">
          mini features row
          {/* {advantages.map((advantage, index) => {
            return <MiniFeatureCard key={index} minifeature={advantage} />;
          })} */}
        </div>
      </MiniFeaturesSection>
      <MiniFeaturesSection>
        <h2>Support our work</h2>
        <div className="minifeatures-row ">
          minifeatures row
          {/* {actions.map((action, index) => {
            return <MiniFeatureCard key={index} minifeature={action} />;
          })} */}
        </div>
      </MiniFeaturesSection>
    </div>
  );
};

const MiniFeaturesSection = styled.section`
  background-color: ${(props) => props.blue && props.theme.colors.sectionBg};
  width: 100vw;
  padding: 1px 8% 4rem;

  .minifeatures-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 3rem;
    justify-content: space-evenly;
    justify-content: center;
    justify-items: center;
    /* display: flex;
    flex-wrap: wrap;
    flex-shrink: 3;
    margin: 1.5rem;
    justify-content: center;
    justify-items: space-evenly; */
  }

  h2 {
    text-align: center;
    margin: 4rem auto;
  }
`;

export default MiniFeaturesImported;
