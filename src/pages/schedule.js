import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './schedule.scss'; 

function Schedule() {
    const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [minParticipants, setMinParticipants] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      eventName,
      selectedDate,
      eventLocation,
      eventDetails,
      minParticipants,
      maxParticipants,
    });
  };

  return (
    <div className="schedule-page">
      <header>
        <div className="header-container">
          <h1>Jardin Verdoyant</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Canada</li>
              <li><input type="text" placeholder="Search" /></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <h2>Schedule a Consultation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventName">Event Name:</label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDate">Select a date for your consultation:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="Pp"
              className="datepicker"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventLocation">Event Location:</label>
            <input
              type="text"
              id="eventLocation"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDetails">Event Details:</label>
            <textarea
              id="eventDetails"
              value={eventDetails}
              onChange={(e) => setEventDetails(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="minParticipants">Minimum Participants:</label>
            <input
              type="number"
              id="minParticipants"
              value={minParticipants}
              onChange={(e) => setMinParticipants(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxParticipants">Maximum Participants:</label>
            <input
              type="number"
              id="maxParticipants"
              value={maxParticipants}
              onChange={(e) => setMaxParticipants(e.target.value)}
              required
            />
          </div>
          <button type="submit">Schedule Event</button>
        </form>
        {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>}
      </main>
      <footer>
          <button onClick={() => navigate('/about')}>About</button>
          <button onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
          <button onClick={() => navigate('/customer-service')}>Customer Service</button>
        </footer>
    </div>
  );
}

export default Schedule;
