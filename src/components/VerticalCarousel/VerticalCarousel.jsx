import React, { useState } from "react";
import Slide from "../Slide/Slide";
import PropTypes from "prop-types";
import './VerticalCarousel.css';
import { GoArrowDown } from "react-icons/go"
import { GoArrowUp } from "react-icons/go"
import './VerticalCarousel.css'

const VerticalCarousel = ({ slides, offsetRadius, showNavigation, animationConfig }) => {
  const [index, setIndex] = useState(0);

  const mod = (a, b) => ((a % b) + b) % b;

  const moveSlide = (direction) => {
    setIndex(mod(index + direction, slides.length));
  };

  const getPresentableSlides = () => {
    const presentableSlides = [];
    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[mod(index + i, slides.length)]);
    }
    return presentableSlides;
  };

  return (
    <div className="relative flex justify-center w-full h-full car-carvelot">
      {getPresentableSlides().map((slide, presentableIndex) => (
        <Slide
          key={slide.key}
          content={slide.content}
          moveSlide={moveSlide}
          offsetRadius={offsetRadius}
          index={presentableIndex}
          animationConfig={animationConfig}
        />
      ))}
      {showNavigation && (
        <div className="navigation-buttons z-50 flex desktop:gap-x-96 desktop:mt-[40rem]">
          <button className="nav-btn text-4xl" onClick={() => moveSlide(1)}><GoArrowUp className="bg-black/50 backdrop-blur-3xl shadow-lg border-2 rounded-lg text-5xl p-2" /></button>
          <button className="nav-btn text-4xl" onClick={() => moveSlide(-1)}><GoArrowDown className="bg-black/50 backdrop-blur-3xl shadow-lg border-2 rounded-lg text-5xl p-2" /></button>
        </div>
      )}
    </div>
  );
};

VerticalCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      content: PropTypes.object
    })
  ).isRequired,
  goToSlide: PropTypes.number,
  showNavigation: PropTypes.bool,
  offsetRadius: PropTypes.number,
  animationConfig: PropTypes.object
};

VerticalCarousel.defaultProps = {
  offsetRadius: 2,
  animationConfig: { tension: 120, friction: 14 }
};

export default VerticalCarousel;
