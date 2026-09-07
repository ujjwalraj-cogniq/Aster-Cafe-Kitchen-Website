import React, { useState } from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    partySize: '2'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, date, time, partySize } = formData;
    
    // Construct the WhatsApp message
    const message = `Hi Aster Cafe! I would like to reserve a table.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Date:* ${date}%0A*Time:* ${time}%0A*Party Size:* ${partySize} people%0A%0APlease confirm if this is available.`;
    
    // The official cafe number
    const whatsappUrl = `https://wa.me/918686745411?text=${message}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h3 className="reservation-form__title">Reserve a Table</h3>
      <p className="reservation-form__desc">Fill out the details below to send a booking request via WhatsApp.</p>
      
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          placeholder="Your Name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
          placeholder="Your Phone Number"
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input 
            type="time" 
            id="time" 
            name="time" 
            value={formData.time} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="partySize">Party Size</label>
        <select 
          id="partySize" 
          name="partySize" 
          value={formData.partySize} 
          onChange={handleChange}
        >
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value="5">5 People</option>
          <option value="6">6+ People</option>
        </select>
      </div>
      
      <button type="submit" className="cta-primary w-full mt-4">
        Send Booking Request
      </button>
    </form>
  );
};

export default ReservationForm;
