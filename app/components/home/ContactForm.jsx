"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import styles from "@/app/styles/home.module.scss";
import RoundButton from "../common/RoundButton";

const ContactForm = () => {
  //Variables
  const form = useRef();
  const [loading, setLoading] = useState(false);

  //Send email
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm("service_pmdplqx", "template_j1vssab", form.current, {
        publicKey: "WJjQ96wR4s-U284eP",
      })
      .then(
        () => {
          e.target.reset();
          setLoading(false);
          toast.success("Message sent successfully!", { theme: "colored" });
        },
        (error) => {
          toast.error(
            "There was a problem sending the message.Please try again",
            { theme: "colored" }
          );
          setLoading(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
      <input type="text" name="name" required placeholder="Your name" />
      <input type="email" name="email" required placeholder="Email address" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea name="message" required placeholder="Message" rows="10" />
      <RoundButton
        type="submit"
        text={loading ? "Sending message..." : "Send Message"}
      />
    </form>
  );
};

export default ContactForm;
