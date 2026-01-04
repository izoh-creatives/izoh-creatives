import { whys } from "../data";

const WhyMe = () => {
  return (
    <div className="grid grid-cols-1 space-y-11 sm:grid-cols-2 sm:space-x-10 sm:space-y-14 lg:grid-cols-4 lg:space-y-0 px-4 py-12 red-bg">
      {whys.map((why, index) => (
        <div key={index}>
          <div className="flex flex-row items-start space-x-3 sm:flex-col sm:items-center space-y-3">
            <div className="w-11 h-11 flex justify-center items-center bg-white   p-3.5 rounded-full red-text">
              {why.icon}
            </div>
            <div className="flex flex-col items-start sm:items-center space-y-1">
              <h3 className="text-[15px] font-medium">{why.title}</h3>
              <p className="md:w-[80%] lg:w-full text-xs text-white/90 leading-6">
                {why.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyMe;
