import { useState } from "react";
import "./contact.scss";

// Contact

/*
Full name (Minimum number of characters is 3, required)
Subject (Minimum number of characters is 3, required)
Email (Must be a valid email address, required)
Body (Minimum number of characters is 3, required)
*/

interface MessageType {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [contactForm, setContactForm] = useState<MessageType>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  return (
    <div className="contact__container">
      <h1>Contact</h1>
      <form
        className="grid__form"
        onSubmit={(e) => {
          e.preventDefault();
          // Validate  ( we already validate everything through the form )
          console.log(contactForm);
        }}
      >
        <label>
          <span>Name</span>
          <input
            type="text"
            min={3}
            required
            value={contactForm.name}
            onChange={(e) => {
              setContactForm({ ...contactForm, name: e.target.value });
            }}
          />
        </label>
        <label>
          <span>Subject</span>
          <input
            type="text"
            min={3}
            required
            value={contactForm.subject}
            onChange={(e) => {
              setContactForm({ ...contactForm, subject: e.target.value });
            }}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            required
            value={contactForm.email}
            onChange={(e) => {
              setContactForm({ ...contactForm, email: e.target.value });
            }}
          />
        </label>
        <label>
          <span>Message</span>
          <textarea
            value={contactForm.message}
            onChange={(e) => {
              setContactForm({ ...contactForm, message: e.target.value });
            }}
          />
        </label>
        <button type="submit">
          <span>Send your message!</span>
        </button>
      </form>
      <p>We do not want to alarm you, but we do store your details for the use of contacting you after you have sent us this message...</p>
    </div>
  );
}
