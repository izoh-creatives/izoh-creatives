"use client";

import React, { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import SectionHeading from "./section-heading";
import { contactInfos } from "../data";
import SocialIcons from "./social-icon";

const Contacts = () => {
  // variables to store form inputs
  const [userInput, setUserInput] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });

  // Success,error or loading message
  const [feedback, setFeedback] = useState({
    message: "",
    style: "text-white",
  });

  // Update form variables when user types on input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  // Send message on form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Loading message
    setFeedback({
      message: "Sending your message,please wait...",
    });

    // Get emailjs variables from env
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      // Prepare the email input values
      const emailParams = {
        fname: userInput.fname,
        lname: userInput.lname,
        email: userInput.email,
        subject: userInput.subject,
        message: userInput.message,
      };

      // Send message
      const res = await emailjs.send(
        serviceId,
        templateId,
        emailParams,
        userId
      );

      // Display success message
      if (res.status === 200) {
        setFeedback({
          message: "Message sent successfully!We will get back soon",
          style: "text-green-500",
        });

        // Clear form inputs
        setUserInput({
          fname: "",
          lname: "",
          email: "",
          subject: "",
          message: "",
        });
      }
      // Display error message
    } catch (error) {
      setFeedback({
        message: "Failed to send message. Please try again later",
        style: "text-red-500",
      });
    }
  };

  return (
    <div
      id="contacts"
      className="flex flex-col items-start space-y-2 sm:flex-row sm:space-x-6 md:space-x-8 bg-[#121212] px-3.5 md:px-6 py-8 md:py-10"
    >
      {/* Contact info */}
      <div className="w-full flex flex-col items-start space-y-2">
        <SectionHeading text="Get in Touch" />
        <p className="text-[11px] xl:text-xs text-left text-white/70 leading-7 pr-4 mb-7 sm:pr-0">
          Have any project or work for me? Feel free to reach out and will get
          back to you as soon as possible.Your satisfaction is my happiness
        </p>
        {/* Contact info */}
        <div className="flex flex-col items-start space-y-8 mb-8">
          {contactInfos.map((contactInfo, index) => (
            // Contact info
            <Link key={index} href={contactInfo.link}>
              <div className="flex items-center space-x-2">
                {/* Icon */}
                <div className="w-8.75 h-8.75 flex justify-center items-center rounded-xl bg-red-600 p-2.75">
                  {contactInfo.icon}
                </div>
                {/* Content */}
                <div className="flex flex-col items-start space-y-1.5">
                  <h5 className="text-xs">{contactInfo.title}</h5>
                  <p className="text-[11px] lg:text-xs text-white/70">
                    {contactInfo.text}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Social media icons */}
        <SocialIcons heading="Let's Connect" />
      </div>
      {/* Send message */}
      <div className="w-full flex flex-col items-start space-y-5 lg:space-y-8 mt-8 pr-4 md:px-4 md:pr-1">
        {/* Feedback */}
        {feedback.message != "" && (
          <p className={`text-[11px] xl:text-xs leading-6 ${feedback.style}`}>
            {feedback.message}
          </p>
        )}
        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-start space-y-7 contact-form"
        >
          <div className="w-full flex flex-col lg:flex-row space-y-7 lg:space-x-4 lg:space-y-0">
            <input
              type="text"
              name="fname"
              placeholder="First name"
              value={userInput.fname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lname"
              placeholder="Last name"
              value={userInput.lname}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={userInput.subject}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={userInput.email}
            onChange={handleChange}
            required
          />
          <textarea
            rows="8"
            name="message"
            placeholder="Message"
            value={userInput.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="red-bg text-xs rounded-2xl link px-4 py-2 ml-auto hover:scale-[98%] hover:shadow-[0_0_50px] hover:shadow-red-600 smooth-animation"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
