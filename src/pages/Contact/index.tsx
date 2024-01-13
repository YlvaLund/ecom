import React from "react";
import "./contact.scss";

// Contact

/*
Full name (Minimum number of characters is 3, required)
Subject (Minimum number of characters is 3, required)
Email (Must be a valid email address, required)
Body (Minimum number of characters is 3, required)
*/
export default function Contact() {
  return (
    <div className="contact__container">
      <h1>Contact</h1>
      <form
        className="grid__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          <span>Name</span>
          <input type="text" min={3} required />
        </label>
        <label>
          <span>Subject</span>
          <input type="text" min={3} required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" required />
        </label>
        <label>
          <span>Message</span>
          <textarea />
        </label>
        <button type="submit">
          <span>Send your message!</span>
        </button>
      </form>
    </div>
  );
}
