import styled from "styled-components";

// Center the form wrapper
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
  padding-top: 3rem;
  background: #f9f9f9;
`;

export const Form = styled.form`
  max-width: 64rem;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 1rem;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  font-family: 'Montserrat', sans-serif;
`;

export const Input = styled.input`
  background-color: white;
  border-radius: 9999px;
  padding: 0.625rem ;
  font-size: 13px;
  color: #4a2a00;
  font-weight: 600;
  outline: none;

  &::placeholder {
    color: #4a2a00;
    opacity: 1;
  }

  /* Show placeholder for date/time only when empty */
  &[type="date"]:not(:focus):not([value]):before {
    content: attr(placeholder);
    color: #4a2a00;
    position: absolute;
    left: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    font-weight: 400;
    font-size: 13px;
    opacity: 0.7;
  }
  &[type="date"]:focus:before,
  &[type="date"][value]:before {
    content: "";
  }

  &[type="time"]:not(:focus):not([value]):before {
    content: attr(placeholder);
    color: #4a2a00;
    position: absolute;
    left: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    font-weight: 400;
    font-size: 13px;
    opacity: 0.7;
  }
  &[type="time"]:focus:before,
  &[type="time"][value]:before {
    content: "";
  }
`;

export const Select = styled.select`
  background-color: white;
  border-radius: 9999px;
  padding: 0.625rem 1.25rem;
  font-size: 13px;
  color: #4a2a00;
  font-weight: 600;
  outline: none;
  grid-column: span 2;
`;

export const DateContainer = styled.div`
  position: relative;
`;

export const TimeContainer = styled.div`
  position: relative;
`;

export const Span = styled.span`
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 13px;
  color: #4a2a00;
  font-weight: 600;
  pointer-events: none;
`;

export const Icon = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #4a2a00;
  font-size: 14px;
  pointer-events: none;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  grid-column: span 2;
  font-size: 13px;
  color: #4a2a00;
  font-weight: 600;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  input[type="radio"] {
    accent-color: #4a2a00;
  }
`;

export const DentistInput = styled(Input)`
  grid-column: span 2;
  font-size: 11px;
`;
export const Container = styled.div`
  background-color: white;
  font-family: 'Poppins', sans-serif;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  height: 250px;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const Title = styled.h1`
  color: #4B2E05;
  font-size: 1.875rem; /* Tailwind text-3xl */
  font-weight: 800; /* Tailwind font-extrabold */
`;  

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.75rem 1.25rem;
  font-size: 13px;
  color: #4a2a00;
  font-family: 'Montserrat', sans-serif;
  border-radius: 0.75rem;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  outline: none;
  resize: vertical;
  margin-bottom: 0.5rem;

  &::placeholder {
    color: #4a2a00;
    opacity: 0.7;
  }
`;