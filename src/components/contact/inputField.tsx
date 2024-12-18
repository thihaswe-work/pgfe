"use client";
// import { handleContactData } from "@/lib/action";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const InputField = () => {
  const [message, setMessage] = useState("");
  const maxLength = 175; // Maximum number of characters

  // Handle input change
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target as HTMLFormElement);
  //   console.log(formData);
  // }
  // const [state, formAction, pending] = useActionState(handleContactData, null);
  return (
    <div className="flex flex-col lg:flex-row gap-[64px] items-center lg:justify-between 1xl:justify-center lg:gap-0  px-[14px] lg:px-[45px]  ">
      {/* form section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <form
          className="flex flex-col items-start w-[450px] 1xl:w-[610px] gap-2 box-border"
          // action={formAction}
        >
          <label htmlFor="fullname" className="text-lg font-semibold">
            Full Name
          </label>
          <input
            name="fullname"
            placeholder="Enter Your Name"
            className="w-full p-5 bg-transparent border-[1px] border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <label htmlFor="email" className="text-lg font-semibold">
            E-Mail Address
          </label>
          <input
            name="email"
            placeholder=".....@gmail.com"
            className="w-full p-5 bg-transparent border-[1px] border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <label htmlFor="message" className="text-lg font-semibold">
            Message
          </label>
          <div className="relative w-full">
            <textarea
              className=" w-full p-4 bg-transparent border-[1px] border-gray-500 rounded-md resize-none h-[253px] focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className=" px-[24px] py-[18px] bg-textColor rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* map section */}
      <div className="w-full lg:w-1/2 gap-[28px] max-w-[500px] flex j flex-col ">
        <div className=" flex justify-center lg:items-end  lg:justify-start">
          <Image
            src={"/map.png"}
            alt={"map photo"}
            width={347}
            height={323}
            className="lg:w-[450px] lg:h-[466px] xl:w-full xl:h-[486px]"
          />
        </div>

        <div className="flex gap-5">
          <div className="flex gap-5">
            <span className="label">Address</span>
            <span>:</span>
          </div>
          <span>2118 Thornridge Cir. Syracuse, Connecticut 35624</span>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-7">
            <span className="label">Hotline</span>
            <span>:</span>
          </div>
          <span>+09998876554</span>
        </div>
      </div>
    </div>
  );
};

export default InputField;

// async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//   e.preventDefault();
//   const formData = new FormData(e.target as HTMLFormElement);
//   console.log(formData);
// }
