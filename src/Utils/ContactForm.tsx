import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [missInput, setMissInput] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    if (email.length !== 0 && name.length !== 0 && message.length !== 0) {
      setMissInput(false);
      emailjs
        .send(
          "service_vowrpnp",
          "template_j33s6th",
          templateParams,
          "Ubw_FiXrlzDUCmAfX"
        )
        .then(() => {
          setModalSuccess(true);
          setTimeout(() => {
            setModalSuccess(false);
          }, 2000);
          setModalError(false);
          setEmail("");
          setName("");
          setMessage("");
        })
        .catch((error) => {
          setModalSuccess(false);
          setModalError(true);
          setError(error);
        });
    } else {
      console.log(missInput);
      setMissInput(true);
    }
  };
  return (
    <div className="contact-form">
      <p className={modalSuccess ? "true success" : " success"}>
        Message sent successfully to me. Thanks for your time.
      </p>
      <p className={modalError ? "true error" : "error"}>
        Something went wrong! {error}
      </p>
      {missInput && <p className="miss">Please fill all fields!</p>}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          onChange={(e: any) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          name="message"
          rows={10}
          onChange={(e: any) => setMessage(e.target.value)}
        />
        <div className="submit-btn">
          <button type="submit">Send Me</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
