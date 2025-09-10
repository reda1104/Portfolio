import React from "react";
import { AnimatedSection } from "./AnimatedSection";

const Home = ({ handleSlider }) => {
  return (
    <section className="section-style overflow-hidden max-sm:py-24  w-full  ">
      <div className="container-style font-st  ">
        <div className=" relative leading-tight font-medium    ">
          <AnimatedSection>
            <p className=" p-0 h-[clamp(80px,15vw,113px)] flex items-center max-md:flex-col max-md:items-start text-[clamp(3.47rem,10vw,5rem)] md:text-[clamp(80px,10vw,129px)] w-fit  tracking-[1px] ">
              <span className="inline-block w-[clamp(40px,5vw,50px)] md:w-[150px] h-[0.7em] relative top-[-2.5px] bg-white mr-[10px]"></span>{" "}
              Mohamed Reda.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.8}>
            <p className="relative h-[clamp(80px,15vw,113px)] flex underline-offset-8 underline   w-fit  tracking-[3px] text-[clamp(1.9rem,7vw,8rem)]">
              Strive for perfection
            </p>
          </AnimatedSection>
        </div>
        <div className="relative leading-none">
          <AnimatedSection delay={1}>
            <h3 className="text-[min(25vw,24.5rem)] absolute opacity-[0.1] ">
              Explore
            </h3>
          </AnimatedSection>
          <p className="md:absolute relative  flex flex-col justify-between md:top-[4rem] text-[clamp(1rem,3vw,2rem)] md:left-[8rem] top-[1rem] left-[3rem] ">
            <AnimatedSection delay={1.5}>
              <span
                onClick={() => handleSlider(1)}
                className="  opacity-60 hover:opacity-100 md:hover:scale-150 hover:translate-x-8 
              transition-all duration-500 ease-in-out transform block cursor-pointer"
              >
                About
              </span>
            </AnimatedSection>

            <AnimatedSection delay={1.5}>
              <span
                onClick={() => handleSlider(2)}
                className="  opacity-60 hover:opacity-100 md:hover:scale-150 hover:translate-x-8 
              transition-all duration-500 ease-in-out transform block cursor-pointer"
              >
                Skills
              </span>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <span
                onClick={() => handleSlider(3)}
                className=" opacity-60 hover:opacity-100 md:hover:scale-150 hover:translate-x-8 
               transition-all duration-500 ease-in-out transform block cursor-pointer"
              >
                Portfolio
              </span>
            </AnimatedSection>
            <AnimatedSection delay={2.5}>
              <span
                onClick={() => handleSlider(4)}
                className=" opacity-60 hover:opacity-100 md:hover:scale-150 hover:translate-x-8 
               transition-all duration-500 ease-in-out transform block cursor-pointer"
              >
                Contact
              </span>
            </AnimatedSection>
          </p>
        </div>
      </div>
      <div className="swipe m-auto text-[#999] text-xl md:hidden text-center p-2 flex justify-center items-center font-st">
        {"Swipe to Explore".split("").map((char, index) => (
          <span
            key={index}
            className={char === " " ? "inline-block w-1" : "animate-pulse"}
            style={{ animationDelay: ` ${0.05 * index}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
        <div
          className="w-3 h-3 border-t-4 animate-pulse border-r-4 rotate-45"
          style={{ animationDelay: ` ${0.05 * "Swipe to Explore".length}s` }}
        ></div>
      </div>
    </section>
  );
};

export default Home;
