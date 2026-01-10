"use client";
import { Link as ScrollLink } from "react-scroll";

const LinkBtn = () => {
  return (
    <ScrollLink to="contacts">
      <button className="bg-red-500 text-xs rounded-lg px-3 py-2 mt-2 hover:shadow-[0_0_50px] shadow-red-600 hover:scale-[98%] smooth-animation">
        Get in Touch
      </button>
    </ScrollLink>
  );
};

export default LinkBtn;
