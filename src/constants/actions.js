import React from "react";
import { RiDossierLine, RiCalendarCheckFill, RiTeamLine } from "react-icons/ri";

export default [
  {
    id: 1,
    icon: <RiDossierLine />,
    title: "Give us feedback!",
    codename: "feedback",
    text: `Help us make Young Neuros even better. We are grateful for any feedback regarding the content, design, and usability of our website.`,
  },
  {
    id: 2,
    icon: <RiCalendarCheckFill />,
    title: "Talk about us!",
    codename: "talk",
    text: `Do you find Young Neuros beneficial in your work? Show the page to your friends and colleagues! Do you think the site is great and do you write a blog yourself (or report on medical topics)? Recommend us to your readers!`,
  },
  {
    id: 3,
    icon: <RiTeamLine />,
    title: "Join us!",
    codename: "join",
    text: `You have an interesting resource that you desire to share with us, you'd love writing blog posts or you'd like to get involved with our community? Contributions and collaborations are welcome! `,
  },
];
