"use client";
import { Link as ScrollLink } from "react-scroll";
import { ChevronsRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-screen h-100 lg:h-130 flex flex-col justify-end items-start pl-4 pr-8 pb-1.5 lg:justify-center lg:pl-8 hero">
      {/* Content */}
      <div className="w-full flex flex-col items-start space-y-3.5 pb-6 lg:space-y-3 lg:pb-1 lg:mt-24">
        {/* Subtitle */}
        <h5 className="text-[15px] lg:text-lg text-white font-medium">
          Hey, am Izoh
        </h5>
        {/* Main title */}
        <h2 className="text-[16px] lg:text-2xl text-red-500 font-medium">
          Web & Graphics Designer
        </h2>
        {/* Text */}
        <p className="w-full sm:w-97.5 text-[11px] text-white text-justify leading-7">
          I help businesses and individuals to enhance their online presence and
          make more sales through modern website design,graphics design and
          professional photo editing
        </p>
        {/* Button */}
        <ScrollLink to="contacts">
          <button className="w-auto flex justify-between items-center gap-x-2 bg-red-600 text-xs rounded-4xl z-1000 px-3 py-1.5 lg:mt-2 group hover:shadow-[0_0_50px] hover:scale-95 hover:shadow-red-600 smooth-animation">
            <span className="text-xxs lg:text-sm">Get in touch</span>
            <ChevronsRight className="w-4 h-6 font-medium smooth-animation" />
          </button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Hero;
