import React, { useRef, useState, useEffect } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { FaArrowUp } from "react-icons/fa";

function About() {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef(null);

  const words = ["developer", "problem solver"];

  const education = [
    "Bachelor of Computer Science – Higher Technological Institute (2018 – 2022)",
    "Mobile Application Development Diploma – CLS (2021) Specialized in Java & Flutter app development.",
    "Flutter Advanced Course (BLoC & MVVM) – Udemy (2023) Deep dive into Flutter state management & clean architecture."
  ];

  const skills =
    "I’m Mohamed Reda, a Flutter developer passionate about creating cross-platform mobile applications. I specialize in Flutter (Dart) development, using BLoC state management and Firebase to build scalable apps with real-time functionality. My work focuses on integrating RESTful APIs, applying Clean Architecture and SOLID principles, and delivering user-friendly UI/UX. I also value code quality, with experience in testing, debugging, and version control through Git and GitHub. With a strong background in problem solving, I aim to craft reliable apps that provide real impact.";
  // Typing/erasing speeds (in milliseconds)
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenWords = 2000;

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isTyping) {
      // Typing logic
      if (charIndex < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Switch to erasing after delay
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenWords);
      }
    } else {
      // Erasing logic
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, erasingSpeed);
      } else {
        // Move to next word and start typing again
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true);
      }
    }

    // Clean up timeout on unmount
    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, currentWordIndex, isTyping, words]);

  return (
    <section id="about" className="section-style w-full  bg-black text-white">
      <div className="container-style font-st">
        <AnimatedSection>
          <p className="text-[clamp(42px,7vw,60px)] md:text-[clamp(80px,10vw,96px)] max-md:mb-8 leading-tight pb-5">
            Hi, It's Reda <br /> I 'm a{" "}
            <span className="text-pinkSelection-0">{displayText}</span>.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 md:gap-36 ">
          <AnimatedSection delay={0.8}>
            <div>
              <p className="w-full text-center opacity-[0.8] border-b-[1px] text-[35px]">
                Education
              </p>
              <ul>
                {education.map((index) => (
                  <li className="my-4 md:text-[30px] text-[23px]  ">
                    <span className="opacity-[0.5]">-</span>
                    {index}
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
              <ul className="pt-4 text-lg md:text-2xl leading-relaxed text-white-600">
                {skills}
                
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default About;
