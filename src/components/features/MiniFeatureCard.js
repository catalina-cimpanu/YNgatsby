import React, { useContext } from "react";
import { ThemeContext } from "../../context/Provider";
import styled from "styled-components";
import NoAdsSvg from "../../images//minifeature_images/no_ads_people.inline.svg";
import OpenAccessSvg from "../../images//minifeature_images/open_access.inline.svg";
import UserFriendlySvg from "../../images//minifeature_images/user_friendly.inline.svg";
import FeedbackSvg from "../../images//minifeature_images/feedback.inline.svg";
import TalkingSvg from "../../images//minifeature_images/talking.inline.svg";
import TeamSvg from "../../images//minifeature_images/team.inline.svg";

const MiniFeatureCard = ({ feature }) => {
  const { title, text, codename } = feature;
  const { darkMode } = useContext(ThemeContext);

  return (
    <MiniCard>
      <div className="minicard-img">
        {codename === "open-access" && <OpenAccessSvg />}
        {codename === "no-ads" && <NoAdsSvg />}
        {codename === "user-friendly" && <UserFriendlySvg />}
        {codename === "feedback" && <FeedbackSvg />}
        {codename === "talk" && <TalkingSvg />}
        {codename === "join" && <TeamSvg />}
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </MiniCard>
  );
};

const MiniCard = styled.div`
  border-radius: ${(props) => props.theme.radiusL};
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  .minicard-img {
    width: 65%;
    padding: 1rem;
    /* background-color: ${(props) =>
      props.darkMode && props.theme.colors.miniFeatureBG}; */
    /* background-color: ${(props) => props.theme.colors.miniFeatureBG}; */
    border-radius: ${(props) => props.theme.radiusS};
    @media screen and (min-width: 900px) {
      width: 45%;
    }
  }
`;

export default MiniFeatureCard;
