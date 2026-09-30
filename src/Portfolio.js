import React from "react";
import Loading from "./assets/images/bakeora.png";
import ecommerce from "./assets/images/ecommerce.png";
import newsapp from "./assets/images/newsapp.png";
import myweather from "./assets/images/myweather.png";
import habit from "./assets/images/habittracker.png";

import { MdOutlineArrowOutward } from "react-icons/md";
import { BsChevronBarExpand } from "react-icons/bs";

const Reda = [
  {
    id: "weather",
    image: myweather,
    title: "Weather App",
    skills: ["Flutter", "BLoC", "REST API", "Geolocator"],
    code: "https://github.com/reda1104/Weather-App",
    link: "https://appetize.io/app/b_bbcvkhsue3o4xmjxhdc3er3qxu",
    description:
      "A Flutter weather app that provides current weather by city or device location. Built with BLoC, REST APIs, Geolocator, animated weather visuals, and loading/error state handling.",
  },
  {
    id: "habit",
    image: habit,
    title: "Habit Tracker",
    skills: ["Flutter", "Provider", "Hive", "Local Notifications"],
    code: "https://github.com/reda1104/Habit-Tracker",
    link: "https://appetize.io/app/b_bq5mmr3ufa3auoy37jdar2xhxu",
    description:
      "An offline habit tracking app with habit creation, completion history, streaks, activity charts, local reminders, and Hive persistence using Provider for state management.",
  },
  {
    id: "ecommerce",
    image: ecommerce,
    title: "E-Commerce App",
    skills: ["Flutter", "Cubit", "Firebase", "Firestore"],
    code: "https://github.com/reda1104/e_commerce",
    link: "https://github.com/reda1104/e_commerce",
    description:
      "A Flutter e-commerce app featuring authentication, product browsing, favorites, cart interactions, product details, and checkout interfaces using Cubit, Firebase Authentication, and Cloud Firestore.",
  },
  {
    id: "news",
    image: newsapp,
    title: "News App",
    skills: ["Flutter", "Cubit", "Dio", "Hive"],
    code: "https://github.com/reda1104/news_app",
    link: "https://github.com/reda1104/news_app",
    description:
      "A Flutter news application with breaking headlines, search, article details, and locally saved favorites. Built with Cubit, Dio, NewsAPI, and Hive for persistent storage.",
  },
];

function Portfolio() {
  return (
    <div className="section-style w-full flex flex-col items-center ">
      <div className=" relative md:h-screen h-[90px] flex-shrink-0 w-full font-st flex md:items-center  justify-center ">
        {/* SVG clipPath definition */}
        <svg width="0" height="0" className="absolute">
          <clipPath id="portfolio-clip" clipPathUnits="objectBoundingBox">
            <path d="m0 .5C.5 1 .5 0 1 .5V1H0V.5" />
          </clipPath>
        </svg>

        {/* Base text */}
        <div className="absolute md:text-[14rem] text-[5rem] tracking-wider max-md:und  text-white">
          PORTFOLIO
        </div>

        {/* Clipped text effect */}
        <div
          className="absolute md:text-[14rem] text-[5rem] tracking-wider  text-pinkSelection-0"
          style={{
            clipPath: "url(#portfolio-clip)",
            WebkitClipPath: "url(#portfolio-clip)",
          }}
        >
          PORTFOLIO
        </div>
        <p className="absolute text-xl right-[40%] top-[67%] max-md:hidden">
          Explore More Projects on <a href="https://github.com/reda1104" className="underline text-pinkSelection-0">GitHub</a>
        </p>

        <a
          href="#portfolio"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("portfolio").scrollIntoView({
              behavior: "smooth",
            });
          }}
          className={` relative
              opacity-[0.3] hover:opacity-[1] max-md:hidden hover:scale-[1.2]   duration-500 hover:translate-y-5 w-7 h-7  border-[3px] border-t-0 border-l-0  rotate-45 top-[40%] cursor-pointer border-white animate-pulse`}
        >
          {" "}
        </a>
      </div>

      <div
        id="portfolio"
        className="w-screen min-h-[1000px] bg-black text-white z-[100000]"
      >
        <div className="md:py-[90px] py-[40px]">
          <div className="container min-h-full max-md:grid grid-cols-1 md:columns-2 lg:gap-10">
            {/* Card */}
            {Reda.map(
              ({ id, title, image, skills, code, link, description }, i) => (
                <div
                  key={id + i}
                  className="mb-20 p-4 break-inside-avoid flex flex-row gap-2 transition-all duration-500 border-stylish transform-gpu relative group"
                >
                  <div className="flex flex-col">
                    {/* Bullets */}
                    <div className="flex gap-1 pb-4">
                      <div className="w-2 h-2 rounded-full bg-white/30 backdrop:blur-md animate-pulse group-hover:bg-[#ff4500] "></div>
                      <div className="w-2 h-2 rounded-full bg-white/30 backdrop:blur-md animate-pulse group-hover:bg-[#0ff]"></div>
                      <div className="w-2 h-2 rounded-full bg-white/30 backdrop:blur-md animate-pulse group-hover:bg-[#ffa500]"></div>
                      <div className="shadow-circle rotate-45 relative ml-auto group-hover:shadow-[inset_0_0_0_3px_rgb(206,100,134)]"></div>
                    </div>
                    {/* Image */}
                    <div className="w-full relative shadow-[inset_0px_0px_50px_rgba(255,255,255,.5),0px_0px_5px_2px_rgba(255,255,255,0.4)] overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="object-cover w-full aspect-[16/9] transition-all duration-300"
                      />
                      <div className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0 bg-gradient-to-t from-black/70 to-black/20"></div>
                    </div>
                    {/* Title */}
                    <div className="flex w-full justify-between max-md:flex-col max-md:gap-2  md:items-center mt-4">
                      <h3 className="text-2xl">{title}</h3>
                      <div className="group-hover:hidden flex items-center gap-1">
                        <BsChevronBarExpand />
                        <div>Expand View</div>
                      </div>
                      <div className="hidden group-hover:flex gap-1">
                        <a
                          href={code}
                          target="_blank"
                          rel="noreferrer"
                          className="button-card flex gap-1 items-center"
                        >
                          Code <MdOutlineArrowOutward />
                        </a>

                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="button-card flex gap-1 items-center"
                        >
                          View Project <MdOutlineArrowOutward />
                        </a>
                      </div>
                    </div>
                    {/* Desc */}
                    <div className="sub-card origin-bottom opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:mt-5">
                      <p className="text-[#999]">{description}</p>
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex flex-col flex-wrap mt-4 shrink-0 items-start gap-2 transition-[max-width,padding]  duration-300 max-w-0 group-hover:max-w-[100px] group-hover:p-2 sub-card">
                    {skills.map((s) => (
                      <div key={s} className="skill-card">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
            {Reda.length % 2 === 1 && (
              <div className="mb-20 p-4 break-inside-avoid flex flex-row gap-2 transition-all duration-500 border-stylish transform-gpu relative group">
                <div className="">
                  {/* Bullets */}
                  <div className="flex gap-1 pb-4 w-full">
                    <div className="w-2 h-2 rounded-full bg-white/30 backdrop:blur-md animate-pulse group-hover:bg-[#ff4500] "></div>
                    <div className="w-2 h-2 rounded-full bg-white/30 backdrop:blur-md animate-pulse group-hover:bg-[#0ff]"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30 backdrop:blur-md animate-pulse group-hover:bg-[#ffa500]"></div>
                    <div className="shadow-circle rotate-45 relative ml-auto group-hover:shadow-[inset_0_0_0_3px_rgb(206,100,134)]"></div>
                  </div>
                  <div className="w-full relative shadow-[inset_0px_0px_50px_rgba(255,255,255,.3),0px_0px_5px_2px_rgba(255,255,255,0.2)] overflow-hidden">
                    <img
                      src={Loading}
                      alt="In progress"
                      loading="lazy"
                      className="object-cover w-full aspect-[16/9] transition-all duration-300 blur-md"
                    />
                    <div className="absolute inset-0 opacity-100 transition-opacity duration-300  bg-gradient-to-t from-black/70 to-black/20"></div>
                    <div className=" flex items-center w-full absolute top-[50%] bg-[rgba(0,0,0,0.5)] ">
                      <h3 className=" lg:text-5xl text-3xl w-full animate-pulse  font-mark text-center">
                        In progress
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
