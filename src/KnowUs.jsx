import React from "react";
import {
  SectionWrapper,
  Title,
  ImagesRow,
  StyledImage,
  Wrapper,
  Content,
  Heading,
  Paragraph,
  BtnRow,
  LearnMoreBtn,
  PageWrapper,
  StyledButton
} from "./KnowUsDesign";   // adjust the path if these files are in different folders
import Header from "./Header"; // adjust the path if these files are in different folders
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"; // Add this import

const KnowUs = () => {
    const navigate = useNavigate(); // Add this line
  return(
    <>  

    <Header />
  <SectionWrapper>
    <Title>Know&nbsp;us</Title>

    <ImagesRow>
      <StyledImage
        src="https://storage.googleapis.com/a1aa/image/0e7b9d7b-f47e-4782-790d-44750a439703.jpg"
        alt="Side profile of a woman sitting in a dental chair with a dental assistant behind her"
        width="320"
        height="250"
        loading="lazy"
      />

      <StyledImage
        src="https://storage.googleapis.com/a1aa/image/4199d49d-3fb9-4419-7b42-bd51e581d279.jpg"
        alt="Woman smiling and holding a mirror in a dental clinic with a dentist's gloved hand holding a shade guide"
        width="320"
        height="250"
        loading="lazy"
      />

      <StyledImage
        src="https://storage.googleapis.com/a1aa/image/8c37f06f-656e-446d-036f-8350d71d0a8b.jpg"
        alt="Male dentist smiling with a young boy patient in a dental clinic"
        width="320"
        height="250"
        loading="lazy"
      />
    </ImagesRow>
  </SectionWrapper>
   <Wrapper>
    <Content>
      <Heading>
        Committed to Offering the<br />
        Finest Care.
      </Heading>

      <Paragraph>
        We provide a wide range of necessary dental services as a patient-centered
        dental facility, with state-of-the-art diagnostics such as dental CT scans
        and X-rays, and sophisticated technology.
      </Paragraph>

      <Paragraph>
        For customers of all ages, we offer emergency dental care, providing timely
        care when you need it most. Our highly skilled dental team, which competes
        globally, is prepared to offer you outstanding care customized to your
        needs. All of our patients will benefit from increased accessibility and
        convenience thanks to our scalable model.
      </Paragraph>

      <BtnRow>
        <LearnMoreBtn onClick={() => navigate("/appointment")} type="button">Book Now!</LearnMoreBtn>
      </BtnRow>
    </Content>
  </Wrapper>
   <PageWrapper>
      <StyledButton>Get to Know Our Team</StyledButton>
    </PageWrapper>
  <Footer/>
  </>
  )
};

export default KnowUs;
