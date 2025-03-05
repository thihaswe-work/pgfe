"use client";
import React, { useEffect } from "react";
import { handleContactData } from "@/lib/action";

import { ChangeEvent, useActionState, useState } from "react";

const FormField = () => {
  const [message, setMessage] = useState("");
  const maxLength = 175; // Maximum number of characters
  // Handle input change
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  // State to control visibility of success and error messages
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [state, formAction] = useActionState(handleContactData, null);

  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000); // Hide after 5 seconds
    }

    if (state?.error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000); // Hide after 5 seconds
    }

    return () => {
      setShowError(false);
      setShowSuccess(false);
    };
  }, [state]);
  return (
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start ">
      <form
        className="flex flex-col items-start w-[450px] 1xl:w-[610px] gap-2 box-border"
        action={formAction}
      >
        <label htmlFor="fullname" className="font-semibold">
          Full Name<span className="text-red-500">*</span>
        </label>
        <input
          name="fullname"
          placeholder="Enter Your Name"
          className="w-full p-2 bg-transparent border-[1px] border-thirdBgColor rounded-md focus:ring-2 focus:outline-none"
        />
        <label htmlFor="email" className="font-semibold">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          placeholder=".....@gmail.com"
          className="w-full p-2 bg-transparent border-[1px] border-thirdBgColor rounded-md focus:ring-2 focus:outline-none"
        />

        <label htmlFor="message" className=" font-semibold">
          Cover Letter
        </label>
        <div className="relative w-full">
          <textarea
            className=" w-full p-4 bg-transparent border-[1px] border-thirdBgColor rounded-md resize-none h-[253px] focus:outline-none focus:ring-2 "
            id="message"
            name="message"
            placeholder="You can sent whatever you want"
            onChange={handleMessageChange}
            maxLength={maxLength}
          ></textarea>
          <span className="absolute bottom-3 right-3 text-sm">
            {message.length}/{maxLength}
          </span>
        </div>

        <button
          type="submit"
          className=" px-[24px] py-[18px] bg-textColor text-background rounded-md"
        >
          Send Message
        </button>
        {/* <span className="text-green-500">
          {state?.success && state?.success}
        </span>
        <span className="text-red-500">{state?.error && state?.error}</span> */}
        {/* Success Message */}
        {showSuccess && (
          <span className="text-green-500">Message sent successfully!</span>
        )}

        {/* Error Message */}
        {showError && (
          <span className="text-red-500">
            There was an error sending your message.
          </span>
        )}
      </form>
    </div>
  );
};

export default FormField;
