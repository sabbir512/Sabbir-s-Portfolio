import React from "react";
import Button from "../Button";
function ContactForm() {
  return (
    <div className="flex flex-row items-center pt-4">
      <form
        id="contactForm"
        method="POST"
        action="https://formsubmit.co/cdf4faf9cca2e84c7e56b76aa8cc6b3f"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="border-blue-400 bg-gray-300 border-2 border-solid sm:h-[44px] lg:w-[350px] placeholder:text-[18px] placeholder:text-gray-700 placeholder:pl-3 rounded md:w-[290px] sm:w-[250px] extPhone:w-[285px] mediumPhone:w-[260px] mediumPhone:h-[40px] smallerPhone:w-[188px] smallerPhone:h-[36px] "
          required
        />
        <br />
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="border-blue-400 bg-gray-300 border-2 border-solid h-[44px] lg:w-[350px] placeholder:text-[18px] placeholder:text-gray-700 placeholder:pl-3 rounded md:w-[290px] sm:w-[250px] extPhone:w-[285px] mediumPhone:w-[260px] mediumPhone:h-[40px] smallerPhone:w-[188px] smallerPhone:h-[36px]"
          required
        />

        <br />
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="border-blue-400 bg-gray-300 border-2 border-solid lg:h-[144px] lg:w-[350px] placeholder:text-[18px] placeholder:text-gray-700 placeholder:pl-3 rounded md:w-[290px] md:h-[110px] sm:w-[250px] sm:h-[90px] extPhone:w-[285px] mediumPhone:w-[260px] mediumPhone:h-[100px] smallerPhone:w-[188px] smallerPhone:h-[69px]"
        ></textarea>

        <Button text="SEND" />
      </form>
    </div>
  );
}

export default ContactForm;
