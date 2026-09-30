import React, { useRef, useState, useEffect } from "react";
import { AnimatedSection } from "./AnimatedSection";
import profile from "./assets/images/Profile.png";

const words = ["developer", "problem solver"];
function About() {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef(null);

  

  const education = [
    "Bachelor of Computer Science – Higher Technological Institute (2018 – 2022)",
    "Mobile Application Development Diploma – CLS (2021) Specialized in Java & Flutter app development.",
    "Flutter Advanced Course (BLoC & MVVM) – Udemy (2023) Deep dive into Flutter state management & clean architecture.",
  ];

  const skills =
    "I’m Mohamed Reda, a Flutter developer focused on building cross-platform mobile applications with clean, maintainable code. I work with Flutter and Dart, BLoC/Cubit, Firebase, REST APIs, and local storage solutions such as Hive. I enjoy building practical applications, solving problems, debugging, and improving projects through better architecture and reusable components. I also have experience with Git, GitHub, and native Android development using Java.";

  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenWords = 2000;

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isTyping) {
      if (charIndex < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenWords);
      }
    } else {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, erasingSpeed);
      } else {
        setCurrentWordIndex(
          (prevIndex) => (prevIndex + 1) % words.length
        );
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutRef.current);
}, [charIndex, currentWordIndex, isTyping]);

  return (
    <section
      id="about"
      className="section-style w-full bg-black text-white"
    >
      <div className="container-style font-st">
        <AnimatedSection>
          <p className="text-[clamp(42px,7vw,60px)] md:text-[clamp(80px,10vw,96px)] max-md:mb-8 leading-tight pb-5">
            Hi, It's Reda <br />
            I'm a{" "}
            <span className="text-pinkSelection-0">
              {displayText}
            </span>
            .
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 md:gap-24 lg:gap-36">
          <AnimatedSection delay={0.8}>
            <div>
              <p className="w-full text-center opacity-[0.8] border-b-[1px] text-[35px]">
                Education
              </p>

              <ul>
                {education.map((item, index) => (
                  <li
                    key={index}
                    className="my-4 md:text-[30px] text-[23px]"
                  >
                    <span className="opacity-[0.5] mr-2">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.9}>
            <div>
              <p className="w-full text-center opacity-[0.8] border-b-[1px] text-[35px]">
                About me
              </p>

              <div className="flex justify-center my-6">
                <div className="relative group">
                  <div className="absolute inset-0 rounded-full bg-pinkSelection-0 blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>

                  <img
                    src={profile}
                    alt="Mohamed Reda"
                    className="
                      relative
                      w-40 h-40
                      md:w-52 md:h-52
                      object-cover
                      rounded-full
                      border-2
                      border-white/20
                      shadow-[0_0_30px_rgba(255,255,255,0.08)]
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:border-pinkSelection-0
                    "
                  />
                </div>
              </div>

              <p className="pt-2 text-lg md:text-2xl leading-relaxed text-white/80">
                {skills}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default About;