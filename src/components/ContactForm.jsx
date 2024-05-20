import React from "react";
import Button from "./Button";
function ContactForm() {
  return (
    <div className="flex flex-row items-center pt-4">
      <form action="">
        <input
          type="text"
          placeholder="Name"
          className="border-blue-400 border-2 border-solid sm:h-[44px] lg:w-[350px] placeholder:text-[18px] placeholder:pl-3 rounded md:w-[290px] sm:w-[250px] extPhone:w-[285px] mediumPhone:w-[260px] mediumPhone:h-[40px] smallerPhone:w-[188px] smallerPhone:h-[36px] "
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          className="border-blue-400 border-2 border-solid h-[44px] lg:w-[350px] placeholder:text-[18px] placeholder:pl-3 rounded md:w-[290px] sm:w-[250px] extPhone:w-[285px] mediumPhone:w-[260px] mediumPhone:h-[40px] smallerPhone:w-[188px] smallerPhone:h-[36px]"
        />

        <br />
        <br />
        <textarea
          placeholder="Message"
          className="border-blue-400 border-2 border-solid lg:h-[144px] lg:w-[350px] placeholder:text-[18px] placeholder:pl-3 rounded md:w-[290px] md:h-[110px] sm:w-[250px] sm:h-[90px] extPhone:w-[285px] mediumPhone:w-[260px] mediumPhone:h-[100px] smallerPhone:w-[188px] smallerPhone:h-[69px]"
        ></textarea>

        <Button text="SEND" />
      </form>
    </div>
  );
}

export default ContactForm;
