import SectionHeading from "./section-heading";
import { services } from "../data";

const Services = () => {
  return (
    <div
      className="flex flex-col items-center space-y-6 pl-2 pr-3 sm:pl-1.5 sm:pr-5 md:pr-8 pt-10 py-10"
      id="services"
    >
      {/* Heading and text */}
      <div className="flex flex-col items-center space-y-4 mb-12">
        <SectionHeading text="Services" />
        <p className="max-w-90 lg:max-w-110 text-[11px] lg:text-xs text-center leading-6 text-white/70">
          I can take your business to another level without spending much.No
          matter where you come from, I can serve you
        </p>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  lg:place-items-center sm:gap-x-3 md:gap-x-7 xl:gap-x-12">
        {services.map((service, index) => (
          // Service
          <div
            key={index}
            className="w-full h-80 sm:h-95 flex flex-col justify-center items-center space-y-6 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl px-3 py-5 sm:px-2 group lg:space-x-6 lg:pt-14 hover:bg-red-700 smooth-animation"
          >
            <div className="w-10 h-10 flex justify-center items-center bg-red-700 rounded-xl p-3 mt-5 group-hover:bg-white group-hover:text-red-700 smooth-animation">
              {service.icon}
            </div>
            <h2 className="text-sm lg:text-md">{service.title}</h2>
            <p className="text-[11px] leading-7 text-white/80 text-left group-hover:text-white">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
