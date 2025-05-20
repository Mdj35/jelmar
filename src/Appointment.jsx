import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  DateContainer,
  TimeContainer,
  RadioGroup,
  RadioLabel,
  DentistInput,
  FormWrapper,
  Container, 
  ImageWrapper, 
  StyledImage, 
  TitleSection, 
  Title,
  TextArea
} from "./AppointmentDesign.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Header";
import Footer from "./Footer";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

const OFFICE_START = 9; // 9 AM
const OFFICE_END = 19;  // 7 PM

const getTimeOptions = () => {
  const options = [];
  for (let hour = OFFICE_START; hour < OFFICE_END; hour++) {
    const startHour = hour % 12 === 0 ? 12 : hour % 12;
    const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
    const startPeriod = hour < 12 ? "AM" : "PM";
    const endPeriod = hour + 1 < 12 ? "AM" : "PM";
    const label = `${startHour} ${startPeriod} - ${endHour} ${endPeriod}`;
    const value = `${startHour} ${startPeriod} - ${endHour} ${endPeriod}`;
    options.push({ value, label });
  }
  return options;
};

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    branch: "",
    service: "",
    isPatient: "",
    dentist: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  // Handle input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle radio button
  const handleRadio = e => {
    setFormData(prev => ({
      ...prev,
      isPatient: e.target.value
    }));
  };

  // Handle form submit
 const handleSubmit = async e => {
  e.preventDefault();
  setSubmitting(true);
  setSuccess(null);

  // Prepare data for API, allow null for dentist and message
  const payload = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    contactNo: formData.contactNo,
    appointmentDate: selectedDate
      ? selectedDate.toISOString().split("T")[0]
      : "",
    appointmentTime: selectedTime,
    branch: formData.branch,
    service: formData.service,
    isPatient: formData.isPatient,
    dentist: formData.dentist ? formData.dentist : null,
    message: formData.message ? formData.message : null
  };

  try {
    const res = await fetch("https://vynceianoani.helioho.st/dentailclinic/form.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      setSuccess("Appointment submitted! We will contact you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNo: "",
        branch: "",
        service: "",
        isPatient: "",
        dentist: "",
        message: ""
      });
      setSelectedDate(null);
      setSelectedTime("");
    } else {
      setSuccess("Submission failed. Please try again.");
    }
  } catch (err) {
    setSuccess("Submission failed. Please try again.");
  }
  setSubmitting(false);
};

  return (
    <>
      <Header />
      <Container>
        <ImageWrapper>
          <StyledImage
            src="https://storage.googleapis.com/a1aa/image/856d543d-541e-40aa-c88d-324c6f465974.jpg"
            alt="Closeup of dentist wearing blue gloves holding dental tools near a smiling patient's mouth"
          />
        </ImageWrapper>
        <TitleSection>
          <Title>Book Now!</Title>
        </TitleSection>
      </Container>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="First Name *"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            placeholder="Last Name *"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder="Email Address *"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            placeholder="Contact No. *"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />

          <DateContainer style={{ position: "relative" }}>
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              minDate={new Date()}
              placeholderText="Preferred Appointment Date *"
              dateFormat="yyyy-MM-dd"
              customInput={
                <Input style={{ paddingRight: "2.5rem" }} />
              }
              required
            />
            <span style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#4a2a00",
              pointerEvents: "none",
              fontSize: "1.1em"
            }}>
              <FaRegCalendarAlt />
            </span>
          </DateContainer>

          <TimeContainer style={{ position: "relative" }}>
            <Select
              value={selectedTime}
              onChange={e => setSelectedTime(e.target.value)}
              required
              style={{ paddingRight: "2.5rem" }}
            >
              <option value="" disabled>
                Preferred Appointment Time *
              </option>
              {getTimeOptions().map(time => (
                <option key={time.value} value={time.value}>
                  {time.label}
                </option>
              ))}
            </Select>
            <span style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#4a2a00",
              pointerEvents: "none",
              fontSize: "1.1em"
            }}>
              <FaRegClock />
            </span>
          </TimeContainer>

          <Select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Branch
            </option>
            <option>Branch 1</option>
            <option>Branch 2</option>
            <option>Branch 3</option>
          </Select>

          <Select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Services Required
            </option>
            <option>Teeth Removal</option>
            <option>Veneers</option>
            <option>Teeth Whitening</option>
          </Select>

          <RadioGroup>
            <span>Already a patient?</span>
            <RadioLabel>
              <span>YES</span>
              <input
                type="radio"
                name="patient"
                value="yes"
                checked={formData.isPatient === "yes"}
                onChange={handleRadio}
              />
            </RadioLabel>
            <RadioLabel>
              <span>NO</span>
              <input
                type="radio"
                name="patient"
                value="no"
                checked={formData.isPatient === "no"}
                onChange={handleRadio}
              />
            </RadioLabel>
          </RadioGroup>

          <DentistInput
            type="text"
            placeholder="If Yes, Name of Attending Dentist (may be left blank)"
            name="dentist"
            value={formData.dentist}
            onChange={handleChange}
          />
          <TextArea
            placeholder="Message (optional)"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={submitting}
            style={{
              gridColumn: "span 2",
              background: "#4a2a00",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              padding: "0.75rem 2rem",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer"
            }}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
          {success && (
            <div
              style={{
                gridColumn: "span 2",
                color: success.includes("success") ? "green" : "red",
                textAlign: "center",
                marginTop: "0.5rem"
              }}
            >
              {success}
            </div>
          )}
        </Form>
      </FormWrapper>
      <Footer />
    </>
  );
};

export default AppointmentForm;