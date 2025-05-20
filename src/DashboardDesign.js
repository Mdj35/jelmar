// DashboardStyles.js
import styled, { createGlobalStyle, css } from "styled-components";

/* ---------- Global ---------- */

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: #f3eee8;
  }
`;

/* ---------- Layout ---------- */

export const Page = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Sidebar = styled.aside`
  width: 5rem;            /* 20 tailwind units */
  background: #5a3210;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;      /* py-6 */
  border-top-right-radius: 1.5rem;  /* rounded-tr-3xl */
  border-bottom-right-radius: 1.5rem; /* rounded-br-3xl */
`;

export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
`;

/* ---------- Main ---------- */

export const Main = styled.main`
  flex: 1;
  padding: 2rem;          /* p-8 */
  position: relative;
  max-width: 90rem;       /* max-w-7xl */
  margin: 0 auto;
`;

/* ---------- Header ---------- */

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;    /* mb-8 */
`;

export const Title = styled.h1`
  color: #5a3210;
  font-weight: 800;
  font-size: 1.875rem;    /* text-3xl */
  line-height: 1;         /* leading-none */
  user-select: none;
`;

export const ClinicName = styled.span`
  color: #5a3210;
  font-weight: 600;
  font-size: 0.75rem;     /* text-xs */
  user-select: none;
`;

/* ---------- Stats ---------- */

export const StatsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;            /* gap-6 */
  margin-bottom: 2rem;    /* mb-8 */
`;

export const StatCard = styled.div`
  width: 9rem;            /* w-36 */
  padding: 1rem 1.5rem;   /* py-4 px-6 */
  background: #ffffff;
  border-radius: 1rem;    /* rounded-2xl */
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatLabel = styled.span`
  color: #5a3210;
  font-size: 0.875rem;    /* text-sm */
  font-weight: 400;
  user-select: none;
`;

export const StatNumber = styled.span`
  color: #5a3210;
  font-size: 1.875rem;    /* text-3xl */
  font-weight: 800;
  user-select: none;
`;

/* ---------- Tabs ---------- */

export const Tabs = styled.nav`
  display: flex;
  gap: 2.5rem;            /* space-x-10 */
  border-bottom: 1px solid #d1d5db; /* border-gray-300 */
  margin-bottom: 1.5rem;  /* mb-6 */
  color: #5a3210;
  font-weight: 600;
  font-size: 0.875rem;    /* text-sm */
  user-select: none;
`;

export const TabButton = styled.button`
  background: transparent;
  border: none;
  padding-bottom: 0.25rem;  /* pb-1 */
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.6)};

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #2f8f7f; /* border-[#2f8f7f] */
    `}
`;

/* ---------- Booking Cards ---------- */

export const CardsContainer = styled.section`
  position: relative;
  display: flex;
  gap: 1.5rem;            /* gap-6 */
  overflow-x: auto;
  padding-bottom: 1.5rem; /* pb-6 */
  scroll-behavior: smooth;
  margin-left: 2rem;      /* Added: move cards a little bit to the right */
`;

export const BookingCard = styled.article`
  flex-shrink: 0;
  width: 16rem;           /* w-64 */
  background: #ffffff;
  border-radius: 1rem;    /* rounded-2xl */
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;        /* p-6 */
`;

export const CardName = styled.h2`
  color: #5a3210;
  font-weight: 600;
  margin-bottom: 0.5rem;
  user-select: none;
`;

export const CardLabel = styled.p`
  color: #5a3210;
  font-size: 0.75rem;     /* text-xs */
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  user-select: none;
`;

export const CardText = styled.p`
  color: #5a3210;
  font-size: 0.75rem;     /* text-xs */
  margin: 0 0 0.75rem 0; /* mb-3 */
  user-select: none;
`;

export const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #5a3210;
  font-size: 0.5625rem;   /* text-[9px] */
  font-weight: 400;
  margin-bottom: 1.5rem;  /* mb-6 */
  user-select: none;
`;

export const MetaBlock = styled.span``;

/* ---------- Card Actions ---------- */

export const CardActions = styled.div`
  display: flex;
  gap: 0.75rem;           /* gap-3 */
`;

const ButtonBase = styled.button`
  border: none;
  border-radius: 9999px;  /* rounded-full */
  font-size: 0.75rem;     /* text-xs */
  font-weight: 600;
  padding: 0.25rem 1.25rem; /* py-1 px-5 */
  cursor: pointer;
  transition: background 0.2s ease;
`;

export const ApproveButton = styled(ButtonBase)`
  background: #5a3210;
  color: #ffffff;

  &:hover {
    background: #4a270c;
  }
`;

export const DeclineButton = styled(ButtonBase)`
  background: #d1d5db; /* gray-300 */
  color: #5a3210;

  &:hover {
    background: #9ca3af; /* gray-400 */
  }
`;

/* ---------- Scroll Button ---------- */

export const ScrollBtn = styled(ButtonBase)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffff;
  border: 1px solid #d1d5db; /* border-gray-300 */
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5a3210;

  &:hover {
    background: #f3f4f6; /* gray-100 */
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  position: relative;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #4a2a00;
  cursor: pointer;
`;