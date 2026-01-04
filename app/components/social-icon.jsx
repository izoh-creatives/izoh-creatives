import Link from "next/link";
import { socialIcons } from "../data";

const SocialIcons = ({ heading }) => {
  return (
    <div className="flex flex-col items-start">
      <h6 className="text-[13px] lg:text-sm font-medium mb-4">{heading}</h6>
      <div className="flex justify-start items-center space-x-4">
        {socialIcons.map((socialIcon) => (
          <Link
            key={socialIcon.title}
            href={socialIcon.link}
            title={socialIcon.title}
          >
            <div className="w-8.5 h-8.5 flex justify-center items-center rounded-lg red-bg text-white p-2.5 hover:scale-95 hover:shadow-[0_0_25px] hover:shadow-red-600 smooth-animation">
              {socialIcon.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
