import genio from "../assets/images/genio.jpeg";
import draic from "../assets/images/image2.png";
import rbl from "../assets/images/RBL.png";
import stealth from "../assets/images/stealth.jpeg";

import { blue, green, orange, pink, yellow, purple } from "../utils";

export const experiences = [
  {
    logo: stealth,
    name: "BeMap Inc.",
    joined: "Oct'25",
    end: "Present",
    title: "Software Engineer",
    bio: "Software Engineer in Tokyo working at the intersection of cloud-native systems, hardware integration, and large-scale mapping on Azure.",
    color: blue,
  },
  {
    logo: rbl,
    name: "Hackfest",
    joined: "Apr'24",
    end: "May'24",
    title: "Tech Head",
    bio: " I was the tech head of the previously held Hackfest’24 and worked on the official fully fledged website from making every team register through the website and build an attendance system management application. Tech stack: NextJS, NodeJS and MongoDB",
    color: purple,
  },
  {
    logo: genio,
    name: "Yellow Backs",
    joined: "Feb'22",
    end: "Mar'22",
    title: "Software Developer Intern",
    bio: "Worked on various projects from basic static sites to dynamic complex websites using VueJS, NodeJS, HTML, CSS, Quasar.dev Built Rest API's for various use cases",
    color: yellow,
  },
  {
    logo: draic,
    name: "ARKA",
    joined: "Jul'22",
    end: "Present",
    title: "Team Member",
    bio: "It is the official Astronomy club of IIT(ISM) Dhanbad, dedicated to bringing together space enthusiasts and explorers who possess a profound fascination with the wonders of the night sky. Recently, we were involved on a project to develop a CubeSat and launch it into space.",
    color: orange,
  },
];
