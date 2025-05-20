import React, { useRef, useState, useEffect } from "react";
import {
  GlobalStyle,
  Page,
  Sidebar,
  Logo,
  Main,
  Header,
  Title,
  ClinicName,
  StatsSection,
  StatCard,
  StatLabel,
  StatNumber,
  Tabs,
  TabButton,
  CardsContainer,
  BookingCard,
  CardName,
  CardLabel,
  CardText,
  CardMeta,
  MetaBlock,
  CardActions,
  ApproveButton,
  DeclineButton,
  ScrollBtn,
  ModalOverlay,
  ModalContent,
  ModalClose,
} from "./DashboardDesign.js";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Dashboard() {
  const cardsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Online Bookings");
  const [appointments, setAppointments] = useState([]);
  const [stats, setStats] = useState({
    bookings: 0,
    pendings: 0,
    approved: 0,
    comments: 0,
  });
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Pagination state
  const [page, setPage] = useState(0);
  const CARDS_PER_PAGE = 4;

  // Fetch appointments
  useEffect(() => {
    fetch("https://vynceianoani.helioho.st/dentailclinic/bookings.php")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setAppointments(data);
      })
      .catch(() => setAppointments([]));
  }, []);

  // Fetch stats from a separate API
  useEffect(() => {
    fetch("https://vynceianoani.helioho.st/dentailclinic/stats.php")
      .then((res) => res.json())
      .then((data) => {
        if (data) setStats(data);
      })
      .catch(() =>
        setStats({
          bookings: 0,
          pendings: 0,
          approved: 0,
          comments: 0,
        })
      );
  }, []);

  // Filter appointments based on tab
  let filtered = [];
  if (activeTab === "Online Bookings") {
    filtered = appointments.filter(
      (a) => a.status === "pending" && a.read_status === "unread"
    );
  } else if (activeTab === "Pending") {
    filtered = appointments.filter((a) => a.status === "pending");
  } else if (activeTab === "Approved") {
    filtered = appointments.filter((a) => a.status === "approved");
  }

  // Reset page to 0 when tab or filtered changes
  useEffect(() => {
    setPage(0);
  }, [activeTab, appointments]);

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const paginated = filtered.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const scrollLeft = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const scrollRight = () => {
    setPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const handleCardClick = (booking) => {
    setSelectedBooking(booking);
    if (
      activeTab === "Online Bookings" &&
      booking.read_status === "unread" &&
      booking.status === "pending"
    ) {
      fetch("https://vynceianoani.helioho.st/dentailclinic/update_read.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: booking.id }),
      });
      setAppointments((prev) =>
        prev.map((a) =>
          a.id === booking.id ? { ...a, read_status: "read" } : a
        )
      );
    }
  };

  const handleStatusUpdate = (booking, newStatus) => {
    fetch("https://vynceianoani.helioho.st/dentailclinic/update_status.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: booking.id,
        status: newStatus,
        email: booking.email,
        contact_no: booking.contact_no,
        first_name: booking.first_name,
        last_name: booking.last_name,
        appointment_date: booking.appointment_date,
        appointment_time: booking.appointment_time,
        branch: booking.branch,
        service: booking.service,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAppointments((prev) =>
            prev.map((a) =>
              a.id === booking.id ? { ...a, status: newStatus } : a
            )
          );
          setSelectedBooking((prev) =>
            prev ? { ...prev, status: newStatus } : prev
          );
        }
      });
  };

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <>
      <GlobalStyle />
      <Page>
        <Sidebar>
          <Logo
            src="https://storage.googleapis.com/a1aa/image/483c2748-df4f-4d00-97ac-ccbc18bc178f.jpg"
            alt="Clinic Logo"
          />
        </Sidebar>

        <Main>
          <Header>
            <Title>Dashboard</Title>
            <ClinicName>DR. A DENTAL CLINIC</ClinicName>
          </Header>

          <StatsSection>
            <StatCard>
              <StatLabel>Bookings</StatLabel>
              <StatNumber>{stats.bookings}</StatNumber>
            </StatCard>
            <StatCard>
              <StatLabel>Pendings</StatLabel>
              <StatNumber>{stats.pendings}</StatNumber>
            </StatCard>
            <StatCard>
              <StatLabel>Approved</StatLabel>
              <StatNumber>{stats.approved}</StatNumber>
            </StatCard>
            <StatCard>
              <StatLabel>Comments</StatLabel>
              <StatNumber>{stats.comments}</StatNumber>
            </StatCard>
          </StatsSection>

          <Tabs>
            <TabButton
              active={activeTab === "Online Bookings"}
              onClick={() => setActiveTab("Online Bookings")}
            >
              Online Bookings
            </TabButton>
            <TabButton
              active={activeTab === "Pending"}
              onClick={() => setActiveTab("Pending")}
            >
              Pending
            </TabButton>
            <TabButton
              active={activeTab === "Approved"}
              onClick={() => setActiveTab("Approved")}
            >
              Approved
            </TabButton>
          </Tabs>

          <CardsContainer ref={cardsRef}>
            {paginated.length === 0 && (
              <div style={{ padding: "2rem", color: "#888" }}>
                No appointments found.
              </div>
            )}
            {paginated.map((b) => (
              <BookingCard
                key={b.id}
                style={{ cursor: "pointer" }}
                onClick={() => handleCardClick(b)}
              >
                <CardName>
                  {b.first_name} {b.last_name}
                </CardName>
                <CardLabel>Service</CardLabel>
                <CardText>{b.service}</CardText>
                <CardMeta>
                  <MetaBlock>
                    Date:
                    <br />
                    {formatDate(b.appointment_date)}
                  </MetaBlock>
                  <MetaBlock>
                    Time:
                    <br />
                    {b.appointment_time}
                  </MetaBlock>
                </CardMeta>
                {b.status !== "approved" && (
                  <CardActions>
                    <ApproveButton
                      onClick={e => {
                        e.stopPropagation();
                        handleStatusUpdate(b, "approved");
                      }}
                    >
                      Approve
                    </ApproveButton>
                    <DeclineButton
                      onClick={e => {
                        e.stopPropagation();
                        handleStatusUpdate(b, "declined");
                      }}
                    >
                      Decline
                    </DeclineButton>
                  </CardActions>
                )}
              </BookingCard>
            ))}

            {totalPages > 1 && (
              <>
                <ScrollBtn
                  aria-label="Scroll left"
                  onClick={scrollLeft}
                  disabled={page === 0}
                  style={{
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                  }}
                >
                  <FaArrowLeft />
                </ScrollBtn>
                <ScrollBtn
                  aria-label="Scroll right"
                  onClick={scrollRight}
                  disabled={page >= totalPages - 1}
                  style={{
                    right: 0,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                  }}
                >
                  <FaArrowRight />
                </ScrollBtn>
              </>
            )}
          </CardsContainer>
        </Main>
      </Page>

      {/* Modal */}
      {selectedBooking && (
        <ModalOverlay onClick={() => setSelectedBooking(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalClose onClick={() => setSelectedBooking(null)}>&times;</ModalClose>
            <h2>
              {selectedBooking.first_name} {selectedBooking.last_name}
            </h2>
            <p><b>Email:</b> {selectedBooking.email}</p>
            <p><b>Contact No:</b> {selectedBooking.contact_no}</p>
            <p><b>Date:</b> {formatDate(selectedBooking.appointment_date)}</p>
            <p><b>Time:</b> {selectedBooking.appointment_time}</p>
            <p><b>Branch:</b> {selectedBooking.branch}</p>
            <p><b>Service:</b> {selectedBooking.service}</p>
            <p><b>Patient:</b> {selectedBooking.is_patient}</p>
            <p><b>Dentist:</b> {selectedBooking.dentist}</p>
            <p><b>Message:</b> {selectedBooking.message}</p>
            <p><b>Status:</b> {selectedBooking.status}</p>
            <p><b>Read Status:</b> {selectedBooking.read_status}</p>
            <p><b>Created At:</b> {selectedBooking.created_at}</p>
            {selectedBooking.status !== "approved" && (
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
                <ApproveButton onClick={() => handleStatusUpdate(selectedBooking, "approved")}>
                  Approve
                </ApproveButton>
                <DeclineButton onClick={() => handleStatusUpdate(selectedBooking, "declined")}>
                  Decline
                </DeclineButton>
              </div>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}