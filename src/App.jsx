// DentalClinic.js
import React from "react";
import {
  GlobalStyle,
  Main,
  BackgroundImage,
  ContentWrapper,
  Headline,
  BookButton,
  BrownSection,
  BrownContent,
  Divider,
  ServicesSection,
  SubHeading,
  MainHeading,
  ServiceFilter,
  FilterButton,
  ServicesGrid,
  ServiceCard,
  CardText,
  ActivitiesSection,
  ActivitiesHeading,
  ActivitiesGrid,
  ActivityCard,
  ActivityBar,
  Container,
  Card,
  Image,
  Label, 
  PageWrapper,
  Card2,
  Title,
  Input
} from "./Design";
import CarouselSection from "./Carousel";
import Footer from "./Footer";
import logo from "./background.png";
import HeaderSection from "./Header";
import { useNavigate } from "react-router-dom"; // Add this import


const DentalClinic = () => {
  const navigate = useNavigate(); // Add this line
  return (
    <>
      <HeaderSection />
      <GlobalStyle />
      <Main>
        <BackgroundImage src={logo} alt="Background heart logo" />
        <ContentWrapper>
          <Headline>
            Dedicated to Smiles,
            <br />
            Anchored in Care
          </Headline>
          <BookButton onClick={() => navigate("/appointment")}>Book Now!</BookButton>
        </ContentWrapper>
      </Main>

      <BrownSection>
        <BrownContent>
          <div>High Quality Services</div>
          <Divider />
          <div>Patient-Friendly Dental Care</div>
        </BrownContent>
      </BrownSection>
            <ServicesSection id="services">
        <SubHeading>DAVAO'S BEST DENTAL CLINIC</SubHeading>
        <MainHeading>Services Offered</MainHeading>
        <Container>
          <Card>
            <Image
              src="https://storage.googleapis.com/a1aa/image/f283a9b7-cfe3-48eb-7a38-a67c37489817.jpg"
              alt="Dentist wearing blue gloves examining a female patient's open mouth with dental tools"
              width="400"
              height="250"
            />
            <Label>General Services</Label>
          </Card>
          <Card>
            <Image
              src="https://storage.googleapis.com/a1aa/image/8d6a7604-246c-4848-ce40-126efe0bd76a.jpg"
              alt="Dentist wearing white coat and mask working on a patient sitting in dental chair in a modern clinic"
              width="400"
              height="250"
            />
            <Label>Specialized</Label>
          </Card>
        </Container>
      </ServicesSection>
     
      <CarouselSection />
       <PageWrapper>
    <div className="max-w-md w-full px-6">
      <Title>LET&nbsp;US&nbsp;KNOW&nbsp;YOUR&nbsp;COMMENTS</Title>

      <Card2>
        <Input
          type="text"
          placeholder="Start here"
          aria-label="comment-input"
        />
      </Card2>
    </div>
  </PageWrapper>
      <Footer/>
    </>
  );
};

export default DentalClinic;
