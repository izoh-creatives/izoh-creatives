import Link from "next/link";
import { ChevronsRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-screen h-100 lg:h-130 flex flex-col justify-end items-start pl-4 pr-8 pb-1.5 lg:justify-center lg:pl-8 hero">
      {/* Content */}
      <div className="w-full flex flex-col items-start space-y-3.5 pb-6 lg:space-y-3 lg:pb-1 lg:mt-24">
        {/* Subtitle */}
        <h5 className="text-lg text-white/90 font-medium">Hey, am Izoh</h5>
        {/* Main title */}
        <h2 className="text-md lg:text-2xl bg-linear-to-r from-red-500 to-red-700 text-transparent bg-clip-text font-medium">
          Web & Graphics Designer
        </h2>
        {/* Text */}
        <p className="w-full sm:w-97.5 text-[11px] text-white text-justify leading-7">
          I help businesses and individuals to enhance their online presence and
          make more sales through modern website design,graphics design and
          professional photo editing
        </p>
        {/* Button */}
        <Link href="#contacts" scroll={false}>
          <button className="w-31 flex justify-between items-center bg-red-600 text-xs rounded-4xl z-1000 px-3.5 py-2 lg:mt-2 group hover:shadow-[0_0_50px] hover:scale-95 hover:shadow-red-600 smooth-animation">
            Get in touch
            <ChevronsRight className="w-4 h-6 font-medium smooth-animation" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
