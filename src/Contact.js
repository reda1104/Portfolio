import React from "react";
import { FaArrowUp } from "react-icons/fa";

function Contact() {
  const cvPath = process.env.PUBLIC_URL + "/document/Resume.pdf";

  return (
    <div className="section-style w-full min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="font-mark md:text-[6rem] text-[16vw] w-full md:mb-4 leading-10 text-start relative max-md:top-[1.1rem] md:-left-8  ">
          let's chat
        </div>
        <div className=" md:mb-5 ">
          <a
            href="mailto:mohameded.reda204@gmail.com"
            className="font-marc h-[8rem] leading-[8rem] rounded-tr-[20px] rounded-bl-[20px] hover:text-pinkSelection-0 underline underline-offset-2 px-6 md:py-8 py-6 w-[50vw] bg-white  text-black md:text-[4.5rem] text-[12vw] mx-auto"
          >
            <span className="group-hover:tracking-wide transition-all duration-300">
              Get in touch
            </span>
          </a>
        </div>
        <div className=" flex justify-center ">
          <div className=" flex gap-[2rem]">
            <a
              href="https://github.com/reda1104"
              target="_blank"
              rel="noreferrer"
              className="underline group font-marc  flex items-center transition-all duration-100 hover:text-pinkSelection-0 opacity-[0.8] md:text-[24px] text-[4.5vw]"
            >
              <span className="group-hover:tracking-wide transition-all duration-300">
                github
              </span>
              <FaArrowUp className="  group-hover:translate-x-[30%] transition-all group-hover:-translate-y-[60%] duration-300 -translate-y-[30%] rotate-45 relative" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-reda-youssef/"
              target="_blank"
              rel="noreferrer"
              className="underline group font-marc  flex items-center ease-linear duration-300 hover:text-pinkSelection-0 opacity-[0.8] md:text-[24px] text-[4.5vw]"
            >
              <span className="group-hover:tracking-wide transition-all duration-300">
                Linkedin
              </span>
              <FaArrowUp className="  group-hover:translate-x-[30%] transition-all group-hover:-translate-y-[60%] duration-300 -translate-y-[30%] rotate-45 relative" />{" "}
            </a>
            <a
              href={cvPath}
              download="Mohamed-Reda-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline group font-marc  flex items-center ease-linear duration-300 hover:text-pinkSelection-0 opacity-[0.8] md:text-[24px] text-[4.5vw]"
            >
              <span className="group-hover:tracking-wide transition-all duration-300">
                Resume
              </span>
              <FaArrowUp className="  group-hover:translate-x-[30%] transition-all group-hover:-translate-y-[60%] duration-300 -translate-y-[30%] rotate-45 relative" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
