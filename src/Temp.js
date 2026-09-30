import React from "react";
import { AnimatedSection } from "./AnimatedSection";
import {
  FaGithub,
  FaGitAlt,
  FaCode,
  FaLayerGroup,
  FaDatabase,
  FaLightbulb,
} from "react-icons/fa";
import { SiFlutter, SiDart, SiFirebase } from "react-icons/si";

function Skills() {
  const skills = [
  {
    name: "Flutter",
    icon: <SiFlutter size={40} className="mx-auto" />,
  },
  {
    name: "Dart",
    icon: <SiDart size={40} className="mx-auto" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={40} className="mx-auto" />,
  },
  {
    name: "REST APIs",
    icon: <FaCode size={40} className="mx-auto" />,
  },
  {
    name: "BLoC / Cubit",
    icon: <FaLayerGroup size={40} className="mx-auto" />,
  },
  {
    name: "Hive & Local Storage",
    icon: <FaDatabase size={40} className="mx-auto" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={40} className="mx-auto" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={40} className="mx-auto" />,
  },
  {
    name: "Problem Solving",
    icon: <FaLightbulb size={40} className="mx-auto" />,
  },
];

  return (
    <section id="skills" className="section-style w-full bg-black text-white">
      <div className="container-style font-st">
        <AnimatedSection>
          <p className="text-[35px] text-center border-b-[1px] opacity-[0.8] mb-10">
            Skills
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.5}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 text-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 border border-gray-700 rounded-xl hover:scale-105 transition-transform"
              >
                {skill.icon}
                <p className="mt-3 text-lg md:text-xl">{skill.name}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Skills;
