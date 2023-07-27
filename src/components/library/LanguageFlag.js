import React from "react";

const LanguageFlag = () => {
  return <div>LanguageFlag</div>;
};

const Span = styled.span`
  justify-self: center;
  align-self: center;
  display: grid;
  place-items: center;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export default LanguageFlag;
