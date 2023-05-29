import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("შეავსეთ ყველა ველი");
    } else {
      alert("თქვენი შეტყობინება წარმატებით გაიგზავნა!");
    }
  };

  return (
    <>
      <div className="contact-box">
        <h3>Contact</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="input-box">
            <label htmlFor="name" className="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="name">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message" className="message">
              Message
            </label>
            <input
              type="text"
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
