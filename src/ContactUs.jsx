import React from "react";
import {
  Wrapper,
  Banner,
  HeadingSection,
  Heading,
  PageWrapper,
  StyledForm,
  Input,
  TextArea,
  FlexGroup
} from "./ContactDesign.js";          // adjust the import path as needed
import Header from "./Header";          // adjust the import path as needed
import Footer from "./Footer";          


const ContactUs = () => (
    <>
    <Header />
  <Wrapper>
    <Banner
      src="https://storage.googleapis.com/a1aa/image/f47674bd-4e2e-4450-1164-db414549f21b.jpg"
      alt="Dentist wearing mask and gloves examining a child's teeth with a dental mirror"
      width="600"
      height="150"
      loading="lazy"
    />

    <HeadingSection>
      <Heading>Contact&nbsp;Us</Heading>
    </HeadingSection>
  </Wrapper>
   <PageWrapper>
      <StyledForm>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <FlexGroup>
          <Input type="email" placeholder="Email Address" />
          <Input type="text" placeholder="Contact No." />
        </FlexGroup>
        <TextArea placeholder="Message" rows="5" />
      </StyledForm>
    </PageWrapper>
    <Footer />
  </>
);

export default ContactUs;
