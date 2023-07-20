import React from "react";
import { SiOpenaccess } from "react-icons/si";
import { FaBan } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";

export default [
  {
    id: 1,
    icon: <SiOpenaccess />,
    codename: "open-access",
    title: "Online & open access",
    text: `We focus on the resources that are reachable online and that are freely available. We believe learning should be accessible to anyone with interest and motivation.`,
  },
  {
    id: 2,
    icon: <FaBan />,
    codename: "no-ads",
    title: "No ads",
    text: `We wish to create an unbiased and undisturbed environment. We do not place any advertisment banners and we do not receive any funding from pharmaceutical or medical device manufacturers.`,
  },
  {
    id: 3,
    icon: <GrUserExpert />,
    codename: "user-friendly",
    title: "User friendly",
    text: `We strive to make Young Neuros as enjoyable and functional as possible. We use the latest web development technologies to ensure rapid loading times, modern design, and even offline accessibility.`,
  },
];
