import styled from "styled-components";

/* ---- layout wrappers ---- */
export const Wrapper = styled.section`
  margin: 0;
  padding: 0;
`;

export const Banner = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 45% 55%;     // Explicitly set horizontal and vertical center
  opacity: 0.5;
`;

export const HeadingSection = styled.div`
  background: #ffffff;
  padding: 1.5rem 0;      /* py-6 */
  display: flex;
  justify-content: center;
`;

/* ---- typography ---- */
export const Heading = styled.h1`
  font-family: "Fredoka One", cursive;
  font-weight: 700;        /* font-bold */
  font-size: 1.5rem;       /* text-2xl */
  color: #4b2e05;

  @media (min-width: 640px) {
    font-size: 1.875rem;   /* text-3xl for sm: screens */
  }
`;
export const PageWrapper = styled.div`
  background-color: #b59f91;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2.5rem; /* pt-10 */
`;

export const StyledForm = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* space-y-4 */
`;

export const Input = styled.input`
  width: 94%;
  padding: 0.5rem 0.75rem;
  font-size: 12px;
  text-align: center;
  font-family: sans-serif;
  border-radius: 0.375rem;
  border: ${(props) =>
    props.type === "text" && props.placeholder === "First Name"
      ? "1px solid #7e22ce"
      : "none"};
  background-color: ${(props) =>
    props.placeholder === "Last Name" ||
    props.placeholder === "Email Address" ||
    props.placeholder === "Contact No."
      ? "#f3f3f3"
      : "white"};
  outline: none;
  flex: 1;

`;
export const TextArea = styled.textarea`
  width: 94%;
  padding: 0.5rem 0.75rem;
  font-size: 12px;
  text-align: center;
  font-family: sans-serif;
  border-radius: 0.375rem;
  background-color: #f3f3f3;
  outline: none;
  resize: none;
  
`;

export const FlexGroup = styled.div`
  display: flex;
  gap: 2rem;
`;
