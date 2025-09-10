import { useEffect, useRef, useState } from "react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home.js";
import Portfolio from "./Portfolio";
import Preloader from "./Preloader.js";
import { AnimatedSection } from "./AnimatedSection.js";
import Skills from "./Temp.js";


function App() {
  const [sliderActive, setSliderActive] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  // const [smallScreen, setSmallScreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  // const itemCount = clients.length;
  // const visibleItems = smallScreen ? 4 : 2;
  const itemCount = 5;
  const handleSlider = (index) => {
    const newIndex = (index + itemCount) % itemCount;
    setSliderActive(newIndex);
    updateSliderPosition(newIndex);
  };

  const updateSliderPosition = (index) => {
    const translateX = -index * 100;
    sliderRef.current.style.transform = `translateX(${translateX}%)`;
    setCurrentTranslate(translateX);
    setPrevTranslate(translateX);
  };

  // Touch/click events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    if (
      (sliderActive === itemCount - 1 && currentX < startX) ||
      (sliderActive === 0 && currentX > startX)
    ) {
      return;
    }
    const diffX = currentX - startX;
    const newTranslate =
      prevTranslate + (diffX / containerRef.current.offsetWidth) * 100;
    setCurrentTranslate(newTranslate);
    sliderRef.current.style.transform = `translateX(${newTranslate}%)`;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Determine if we should slide to next/prev item
    const movedBy = currentTranslate - prevTranslate;
    if (Math.abs(movedBy) > 25) {
      // Threshold for slide
      const direction = movedBy > 0 ? -1 : 1;
      handleSlider(sliderActive + direction);
    } else {
      // Return to original position
      updateSliderPosition(sliderActive);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        className=" overflow-hidden   "
      >
        <div
          onClick={() => handleSlider(sliderActive - 1)}
          className={` ${
            sliderActive === 0 ? "hidden" : "block"
          } opacity-[0.5]  hover:opacity-[1] max-md:hidden hover:scale-[1.2] transition-all duration-500 hover:-translate-x-2 w-12 h-12  border-[4px] border-t-0 border-r-0 rotate-45 top-[50%] cursor-pointer translate-y-[calc(-50%-2px)] left-10 z-10 fixed border-white`}
        >
          {" "}
        </div>
        <div
          onClick={() => handleSlider(sliderActive + 1)}
          className={`${sliderActive === itemCount - 1 ? "hidden" : "block"} }
 opacity-[0.5] hover:opacity-[1] max-md:hidden hover:scale-[1.2] transition-all duration-500 hover:translate-x-2 w-12 h-12  border-[4px] border-b-0 border-l-0 rotate-45 top-[50%] cursor-pointer translate-y-[calc(-50%-2px)] right-10 z-10 fixed border-white`}
        >
          {" "}
        </div>
        <div
          className="relative  left-0 top-0 w-full h-full flex flex-row transition-all  duration-500  bg-black text-white"
          ref={sliderRef}
        >
          <AnimatedSection>
            <Home handleSlider={handleSlider} />
          </AnimatedSection>
          <AnimatedSection>
            <About />
          </AnimatedSection>

          <AnimatedSection>
            <Skills />  
          </AnimatedSection>

          <AnimatedSection>
            <Portfolio />
          </AnimatedSection>

          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}

export default App;
