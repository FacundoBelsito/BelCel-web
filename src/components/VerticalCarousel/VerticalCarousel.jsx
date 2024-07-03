import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Slide from "../Slide/Slide"
import PropTypes from "prop-types"

const VerticalCarousel = ({ slides, offsetRadius, showNavigation, animationConfig }) => {
  const [index, setIndex] = React.useState(0);

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
    <div className="relative flex justify-center w-full h-full">
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