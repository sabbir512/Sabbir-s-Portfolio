import React from "react";
import { ContactInfo, ContactForm } from "./index";
function Contact() {
  return (
    <div id='contact' className="bg-gradient-to-r from-[#4A35C2] via-[#4B60CB] to-[#4F92D6] pb-7 rounded-t-3xl min-h-full ">
      <h1
        className="text-white text-center text-[40px] font-light pt-8 pb-2"
        style={{ fontFamily: "Roboto" }}
      >
        Contact
      </h1>

      <div className="grid sm:grid-cols-2 lg:px-20 pt-3 lg:gap-8 md:px-14 md:gap-6 sm:px-10 sm:gap-5 smallerPhone:grid-rows-1 mediumPhone:px-14 smallerPhone:px-10 smallerPhone:gap-y-3">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
