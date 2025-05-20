import styled, { css } from "styled-components";

/* ---------- layout ---------- */
export const SectionWrapper = styled.section`
  background: #ffffff;
  max-width: 80rem;     /* ~ max-w-7xl */
  margin: 0 auto;
  padding: 5.5rem 1rem 2rem 1rem;   /* Increased top padding to push content below header */
`;

export const Title = styled.h2`
  font-weight: 800;     /* font-extrabold */
  color: #5b3e2b;
  font-size: 1.375rem;  /* text-[22px] */
  text-align: center;
  margin-bottom: 1.5rem;/* mb-6 */
`;

export const ImagesRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;          /* gap-6 */
  flex-wrap: wrap;      /* handles very small screens */
`;

export const StyledImage = styled.img`
  width: 20rem;         /* 320px */
  height: 15.625rem;    /* 250px */
  object-fit: cover;
  opacity: 0.5;
`;
const poppins = css`
  font-family: "Poppins", sans-serif;
`;

/* ---------- layout ---------- */
export const Wrapper = styled.section`
  background: #ffffff;
  display: flex;
  justify-content: center;
  padding: 0 1rem 3rem 1rem;   /* px-4, add extra bottom padding to avoid footer overlap */
`;

export const Content = styled.div`
  max-width: 48rem;    /* ~ max-w-3xl */
  margin-top: 2rem;    /* slightly less top margin to move content up */
  margin-bottom: 2rem; /* add bottom margin to help avoid footer overlap */
`;

/* ---------- typography ---------- */
export const Heading = styled.h1`
  ${poppins};
  font-weight: 600;
  font-size: 1.375rem; /* 22px */
  line-height: 1.75rem;/* 28px */
  text-align: center;
  color: #5b3a21;
  margin-bottom: 1.5rem; /* mb-6 */
`;

export const Paragraph = styled.p`
  font-size: 0.75rem;    /* 12px */
  line-height: 1rem;     /* 16px */
  text-align: justify;
  color: #5b3a21;
  margin-bottom: 1.5rem; /* mb-6 */
`;

/* ---------- button ---------- */
export const BtnRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LearnMoreBtn = styled.button`
  background: #5b3a21;
  color: #ffffff;
  font-size: 0.875rem;   /* 14px */
  font-weight: 600;
  padding: 0.75rem 2rem; /* py-3 px-8 */
  border: none;
  border-radius: 0.125rem; /* rounded-sm */
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
export const PageWrapper = styled.div`
  background: linear-gradient(to bottom, #ffffff, #f9fafb); /* from-white to-gray-50 */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1.5rem; /* px-6 */
  font-family: 'Montserrat', sans-serif;
`;

export const StyledButton = styled.button`
  background-color: #3b2f1b;
  color: white;
  padding: 0.5rem 1.5rem;      /* py-2 px-6 */
  font-size: 0.875rem;         /* text-sm */
  font-weight: 400;            /* font-normal */
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  font-feature-settings: 'liga' 0;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }
`;