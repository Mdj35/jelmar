import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  SectionTitle,
  SocialIcons,
  SocialLink,
  Nav,
  NavLink,
  ContactInfo,
  ContactItem,
  AddressInfo,
  FooterLogo,
  FooterDivider,
  FooterNote,
  Icon,
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "./2 (1).png";

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterContent>
        <FooterSection>
          <SectionTitle>Follow us</SectionTitle>
          <SocialIcons>
            <SocialLink href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </SocialLink>
            <SocialLink href="#" aria-label="Phone">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </SocialLink>
            <SocialLink href="#" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </SocialLink>
          </SocialIcons>
        </FooterSection>

        <FooterSection>
         
        </FooterSection>

        <FooterSection large>
          <SectionTitle>Contact</SectionTitle>
          <ContactInfo>
            <div>
              <ContactItem>
                <Icon className="fas fa-phone-alt" />
                <div>
                  <strong>Sasa Branch</strong>
                  <p>0123456789 0123456789</p>
                </div>
              </ContactItem>
              <ContactItem>
                <Icon className="fas fa-phone-alt" />
                <div>
                  <strong>Matina Branch</strong>
                  <p>0123456789 0123456789</p>
                </div>
              </ContactItem>
              <ContactItem>
                <Icon className="fas fa-envelope" />
                <p>dradentalclinic@gmail.com</p>
              </ContactItem>
            </div>
            <AddressInfo>
              <strong>SASA BRANCH (MAIN)</strong>
              <p>2nd Floor, VCM Building, Rm. 11, Sasa, Davao City</p>
              <strong style={{ marginTop: "8px" }}>MATINA BRANCH</strong>
              <p>Door A, Any Building, Matina-McArthur Highway, Davao City</p>
            </AddressInfo>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <FooterLogo
            src={logo}
            alt="Logo"
          />
        </FooterSection>
      </FooterContent>
      <FooterDivider />
      <FooterNote>© 2025 Dr. A Dental Clinic. All rights reserved</FooterNote>
    </FooterContainer>
  );
};

export default Footer;
