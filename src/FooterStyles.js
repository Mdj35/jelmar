import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #4d2e14;
  color: #c1b9a9;
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
`;

export const FooterContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: ${({ large }) => (large ? "2" : "1")};
`;

export const SectionTitle = styled.span`
  font-weight: 600;
  font-size: 0.625rem;

  @media (min-width: 640px) {
    font-size: 0.75rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const SocialLink = styled.a`
  color: #c1b9a9;
  font-size: 0.875rem;

  &:hover {
    color: #fff;
  }

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NavLink = styled.a`
  font-size: 0.5rem;
  color: #c1b9a9;

  @media (min-width: 640px) {
    font-size: 0.625rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 2.5rem;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.5rem;

  @media (min-width: 640px) {
    font-size: 0.625rem;
  }
`;

export const AddressInfo = styled.div`
  font-size: 0.4375rem;
  margin-top: 1rem;

  @media (min-width: 640px) {
    font-size: 0.5625rem;
    margin-top: 0;
  }
`;

export const FooterLogo = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  align-self: center;

  @media (min-width: 640px) {
    align-self: flex-end;
  }
`;

export const FooterDivider = styled.hr`
  border-color: rgba(193, 185, 169, 0.3);
  border-top-width: 1px;
  margin: 0 1.5rem;
`;

export const FooterNote = styled.p`
  text-align: center;
  font-size: 0.4375rem;
  margin: 0.5rem 0;

  @media (min-width: 640px) {
    font-size: 0.5rem;
  }
`;

export const Icon = styled.i``;
