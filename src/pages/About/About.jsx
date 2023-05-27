import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import ism from "../../assets/images/ism.png";
import highschool from "../../assets/images/highschool.jpeg";
import sos from "../../assets/images/sos.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
          I am a FullStack Developer and a Competitive Programmer who loves to transform ideas into reality using code. 
          I am a final year student at IIT(ISM) Dhanbad currently pursuing an Integrated Master of Technology in Mathematics and Computing. 
          <br />
          I was born and raised in Bilaspur, India. I like to learn about new technologies, take part in hackathons or simply watch anime in my free time.
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "IIT(ISM) Dhanbad",
                p: "Integrated M.tech. in Matematics and Computing (2020-2025)",
                image: ism,
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Sarvodaya Sr. Sec. School, Kota",
                p: "High School (2018-2020)",
                image: highschool,
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "Bansal Public School, Kota",
                p: "Secondary Education (2016-2018)",
                image: sos,
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
