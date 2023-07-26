import React from "react";
import { destructureGuideline, destructureResource } from "./libraryFunctions";

const AccordionsList = ({ infos, type }) => {
  return (
    <div>
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
    </div>
  );
};

export default AccordionsList;
