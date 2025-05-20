// DentalClinicStyles.js
import styled, { createGlobalStyle } from "styled-components";
import { FiMenu, FiX } from "react-icons/fi"; // Ensure you're importing icons in your component file
import  { css } from "styled-components";


// Global styles
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to bottom, white, #f3e9e3);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    html {
  scroll-behavior: smooth;
}
  }
`;

export const ClinicName = styled.span`
  color: #6b4a2e;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  user-select: none;
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 15rem 1.5rem 1.5rem; /* Added top padding */
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  pointer-events: none;
  user-select: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export const Headline = styled.h1`
  color: #4a2e0b;
  font-weight: 800;
  font-size: 2rem;
  line-height: 1.25;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const BookButton = styled.button`
  margin-top: 1.5rem;
  background-color: #6b4a2e;
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
`;

export const BrownSection = styled.section`
  background-color: #6b4423;
  font-family: "Inter", sans-serif;
  color: white;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 1;
  user-select: none;
`;

export const BrownContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.div`
  height: 3.5rem;
  border-right: 1px solid #8b7b6b;
`;
export const ServicesSection = styled.section`
  background-color: white;
  font-family: "Poppins", sans-serif;
  padding: 2.5rem 1rem;
  max-width: 1120px;
  margin: 0 auto;
`;

export const SubHeading = styled.p`
  font-size: 10px;
  font-weight: 800;
  color: #5b3a0a;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.5rem;
`;
export const ContactButton = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: block;
    background-color: #6b4a2e;
    color: white;
    font-size: 0.625rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
  }
`;
export const MainHeading = styled.h2`
  font-size: 1.875rem;
  font-weight: 800;
  color: #5b3a0a;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const ServiceFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

export const FilterButton = styled.button`
  background-color: #5b3a0a;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;

export const ServicesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const ServiceCard = styled.div`
  width: 10rem;
  height: 12rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 10px;
  font-weight: 800;
  color: #5b3a0a;
  text-transform: uppercase;
  line-height: 1.2;
`;
export const ActivitiesSection = styled.section`
  background-color: white;
  padding: 3rem 1rem;
  max-width: 96rem;
  margin: 0 auto;
`;

export const ActivitiesHeading = styled.h2`
  text-align: center;
  color: #4b2e0e;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

export const ActivitiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const ActivityCard = styled.div`
  width: 10rem;
  height: 7rem;
  background-color: #d1d5db; /* Tailwind's gray-300 */
  position: relative;
`;

export const ActivityBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  background-color: #4b2e0e;
`;
export const Container = styled.div`
  background-color: white;
  padding: 2rem;
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 24rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Label = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #4b2e0e;
  color: white;
  font-size: 0.75rem;
  font-family: "Montserrat", monospace;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
`;
const montserrat = css`
  font-family: "Montserrat", sans-serif;
`;

/* ------------- layout -------------- */
export const PageWrapper = styled.div`
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;      // Center vertically
  min-height: 50vh;
  padding-top: 5rem;
  width: 100vw;             // Ensure full width
`;

// ...existing code...
export const Card2 = styled.div`
  background: #e6e8e4;
  border-radius: 0.5rem;
  padding: 1rem;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;      // Center content horizontally
  /* Removed justify-content: center; to align items to the top */
`;



export const Title = styled.h1`
  ${montserrat};
  font-weight: 800;        /* extrabold */
  color: #4a2f22;
  font-size: 1.25rem;      /* text-xl */
  text-align: center;
  margin-bottom: 1.5rem;   /* mb-6 */
  letter-spacing: 0.05em;
`;

export const Input = styled.input`
  width: 100%;
  background: white;
  border-radius: 9999px;   /* rounded-full */
  font-size: 9px;
  padding: 0.25rem 0.75rem;/* py-1 px-3 */
  outline: none;
  border: none;
  margin-bottom: 1rem;     // Add space below input
`;