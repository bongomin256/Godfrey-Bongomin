import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import styled from "styled-components";

const ContactStyle = styled.div`
  padding-top: 200px;
  padding-bottom: 100px;
  /* padding: 200px 0; */
  background-color: var(--dark-bg);
  color: var(--grey-text);
  .contact {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    .contact-header {
      h4 {
        text-align: center;
        margin-bottom: 2.5rem;
        color: white;
      }
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      gap: 10rem;
      .contact-info {
        .contact-info-item {
          background-color: var(--lightdark-bg);
          padding: 0.8rem 1rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 20px;
          .contact-info-icon {
            height: 70px;
            width: 70px;
            font-size: 2rem;
            background-color: white;
            text-align: center;
            border-radius: 50%;
            line-height: 70px;
            color: var(--dark-bg);
          }
          .contact-info-content {
            padding-top: 1rem;
            h4 {
              color: var(--lightgreen-text);
            }
          }
        }
      }
      .contact-form {
        .form-group {
          margin-bottom: 1rem;

          display: flex;
          flex-direction: column;

          label {
            font-size: 1.6rem;
            margin-bottom: 10px;
          }
          input,
          textarea {
            width: 100%;
            background-color: var(--lightdark-bg);
            padding: 1rem 1.6rem;
            border: 2px solid var(--grey-text);
            outline: none;
            color: var(--grey-text);
            border-radius: 10px;
            &:focus {
              background-color: white;
              color: var(--dark-bg);
              border: none;
            }
          }
        }
        #button {
          padding: 0.6rem 1rem;
          font-size: 1.2rem;
          background-color: var(--dark-bg);
          border: 2px solid var(--grey-text);
          color: var(--grey-text);
          border-radius: 10px;
          margin-top: 10px;
          &:hover {
            background-color: var(--grey-text);
            color: var(--dark-bg);
          }
        }
      }
    }
    @media only screen and (max-width: 768px) {
      .contact {
        display: flex;
        flex-direction: column;
      }
      .contact-header h1 {
        text-align: center;
        margin-bottom: 1.2rem;
      }
      .container {
        flex-direction: column;
        gap: 3rem;
      }

      .contact-info {
        width: 100%;
      }
      .form-container {
        width: 100%;
      }
      label {
        font-size: 1rem;
      }
    }
  }
`;

export default function Contact() {
  const form = useRef();

  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <ContactStyle>
      <section className="contact">
        <div className="contact-header">
          <h1>Contact</h1>
          <h4>Get in touch</h4>
        </div>
        <div className="container">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MdLocationOn />
              </div>
              <div className="contact-info-content">
                <h4>Location</h4>
                <p>Seattle, WA</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MdPhone />
              </div>
              <div className="contact-info-content">
                <h4>Phone</h4>
                <p>(425)-395-0516</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MdEmail />
              </div>
              <div className="contact-info-content">
                <h4>Email Adddress</h4>
                <p>godfrey.bongomin92@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="form-container">
            <form
              className="contact-form"
              id="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={user_name}
                  onChange={handleName}
                  className="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={user_email}
                  className="email"
                  onChange={handleEmail}
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Message</label>
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  className="message"
                  onChange={handleMessage}
                  placeholder="Your message here ...!"
                />
              </div>
              <div className="button">
                <input id="button" type="submit" value="Send"></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </ContactStyle>
  );
}
