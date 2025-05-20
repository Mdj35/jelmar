import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import KnowUs from './KnowUs' // Make sure you have this component
import ContactUs from './ContactUs' // Make sure you have this component
import Appointment from './Appointment' // Make sure you have this component
import Admin from './Dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/know-us" element={<KnowUs />} />
		<Route path="/contact-us" element={<ContactUs />} />
		<Route path="/appointment" element={<Appointment />} />
    <Route path="/admin" element={<Admin />} />
		{/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)