import genio from "../assets/images/genio.jpeg";
import draic from "../assets/images/image2.png";
import rbl from "../assets/images/RBL.png";
import stealth from "../assets/images/stealth.jpeg";

import { blue, green, orange, pink, yellow, purple } from "../utils";

export const experiences = [
  {
    logo: rbl,
    name: "Hackfest",
    joined: "June'22",
    end: "July'22",
    title: "Summer Intern",
    bio: " I was the tech head of the previously held Hackfest’23 and worked on the official fully fledged website from making every team register through the website and build an attendance system management application. Tech stack: NextJS, NodeJS and MongoDB",
    color: purple,
  },
  {
    logo: stealth,
    name: "Concetto",
    joined: "Sept'22",
    end: "Present",
    title: "Full Stack Developer",
    bio: "Implement the REST API to connect the frontend with the backend servers. Resolved the CORS error while fetching the data from the endpoints. This website hit a traffic of 100k+ in just 7 days. Tech stack: NextJS, ReactJS, Django, GCP.",
    color: blue,
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
