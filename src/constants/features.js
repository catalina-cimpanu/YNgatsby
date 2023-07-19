import React from "react";
import { RiDossierLine, RiCalendarCheckFill, RiTeamLine } from "react-icons/ri";
// import Library from "../assets/Library1.svg";
// import Calendar from "../assets/Calendar.svg";
// import Community from "../assets/Community.svg";

export default [
  {
    id: 1,
    icon: <RiDossierLine />,
    //  img: Library,
    img_src: "",
    img_png: "Library.png",
    title: "Library",
    link: "/library",
    text: `Make your learning more immersive with this curated collection of diverse resources, from guidelines and articles all the way to podcasts and apps, conveniently organized and categorized.`,
    // A collection of diverse resources, from guidelines and articles all the way to podcasts and apps, to make your learning more dynamic and immersive. With an accent on free and open source.
    // A collection of guidelines, articles, and other assets (from books and webinars all the way to apps and podcats), with an accent on free resources
    //  (With an accent on free and open source.) [A collection of diverse resources, from guidelines and articles all the way to podcasts and apps, to make your learning more dynamic and immersive. With an accent on free and open source.]
  },
  {
    id: 2,
    icon: <RiCalendarCheckFill />,
    //  img: Calendar,
    img_src: "",
    img_png: "Calendar.png",
    title: "Calendar",
    link: "/calendar",
    text: `All important events in one place. Never miss a deadline or a registration again.`,
  },
  {
    id: 3,
    icon: <RiTeamLine />,
    //  img: Community,
    img_src: "",
    img_png: "Community.png",
    title: "Community",
    link: "https://community.youngneuros.com/",
    text: `Connect, find answers and share experiences on our unique platform exclusively for young neurologists. Because collaboration accelerates growth.`,
    // A unique platform exclusively for young neurologists, where you can connect, find answers and share experiences. Because collaboration accelerates growth.
    //  [A unique platform exclusively for young neurologists, where you can connect, find answers and share experiences. Because collaboration accelerates growth.]
  },
];
