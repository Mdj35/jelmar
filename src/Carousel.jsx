import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Slide data
const slides = [
  {
    gray: "https://placehold.co/224x224/cccccc/000000?text=Light+Gray+Square+1",
    brown:
      "https://placehold.co/192x192/6B3F1A/ffffff?text=Dark+Brown+Square+1",
  },
  {
    gray: "https://placehold.co/224x224/d3d3d3/000000?text=Light+Gray+Square+2",
    brown:
      "https://placehold.co/192x192/5a2f0c/ffffff?text=Dark+Brown+Square+2",
  },
  {
    gray: "https://placehold.co/224x224/bfbfbf/000000?text=Light+Gray+Square+3",
    brown:
      "https://placehold.co/192x192/4e2e0a/ffffff?text=Dark+Brown+Square+3",
  },
];

// Styled components
const Section = styled.div`
  background: white;
  padding: 3rem 1rem;
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const TextContent = styled.div`
  max-width: 28rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  h1 {
    color: #6b3f1a;
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  p {
    color: #6b3f1a;
    font-size: 0.75rem;
    margin: 0.5rem 0 1.5rem;
  }
`;

const List = styled.ul`
  color: #6b3f1a;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 14rem;
  height: 14rem;
  flex-shrink: 0;
`;

const Box = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;
  opacity: 1;
  ${(props) =>
    props.animate &&
    css`
      transform: translate(12px, 12px);
      opacity: 0.7;
      z-index: 0;
    `}
`;

const BrownBox = styled(Box)`
  width: 12rem;
  height: 12rem;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

const GrayBox = styled(Box)`
  top: 0;
  left: 0;
  z-index: 20;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;

  button {
    background: none;
    border: none;
    color: #6b3f1a;
    cursor: pointer;

    &:hover {
      color: #4a2a0f;
    }
  }
`;

const CarouselSection = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const timeoutRef = useRef(null);

  const changeSlide = (direction) => {
    setAnimate(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => {
        if (direction === "next") {
          return (prev + 1) % slides.length;
        } else {
          return (prev - 1 + slides.length) % slides.length;
        }
      });
      setAnimate(false);
    }, 500); // match transition duration
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <Section>
      <TextContent>
        <h1>
          We Bring You Comfortable
          <br />
          and Safe Treatment
        </h1>
        <p>
          Your comfort and care are always our top priorities!
          <br />
          Choose Dr. A Dental Clinic and experience
        </p>
        <List>
          <ListItem>
            <FaCheckCircle />
            <span>Quality Service</span>
          </ListItem>
          <ListItem>
            <FaCheckCircle />
            <span>
              Patient-friendly <br className="md:hidden" /> Environment
            </span>
          </ListItem>
          <ListItem>
            <FaCheckCircle />
            <span>Huge Discounts</span>
          </ListItem>
        </List>
      </TextContent>

      <div>
        <CarouselWrapper>
          <BrownBox
            src={slides[index].brown}
            alt="Brown Box"
            animate={animate ? 1 : 0}
          />
          <GrayBox src={slides[index].gray} alt="Gray Box" />
        </CarouselWrapper>
        <Controls>
          <button
            onClick={() => changeSlide("prev")}
            aria-label="Previous slide"
          >
            <FaChevronLeft size={20} />
          </button>
          <button onClick={() => changeSlide("next")} aria-label="Next slide">
            <FaChevronRight size={20} />
          </button>
        </Controls>
      </div>
    </Section>
  );
};

export default CarouselSection;
