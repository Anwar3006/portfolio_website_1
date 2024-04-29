import React, { ReactNode } from "react";

interface SocialButtonProps {
  children: ReactNode;
  bgColor: string | undefined;
  link: string | undefined;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  children,
  bgColor,
  link,
}) => {
  let bgHoverColorclass;

  switch (bgColor) {
    case "dribble":
      bgHoverColorclass = "hover:bg-dribble";
      break;

    case "instagram":
      bgHoverColorclass = "hover:bg-instagram";
      break;

    case "twitter":
      bgHoverColorclass = "hover:bg-twitter";
      break;

    case "linkedin":
      bgHoverColorclass = "hover:bg-linkedin";
      break;

    default:
      bgHoverColorclass = "hover:bg-black";
      break;
  }

  return (
    <button
      className={`group h-12 w-12 bg-white ${bgHoverColorclass} rounded-full transition-colors duration-200 ease-in-out`}>
      <a href={link}>
        <div className="fill-black transition-colors duration-200 ease-in-out group-hover:fill-white flex items-center justify-center">
          {children}
        </div>
      </a>
    </button>
  );
};

export default SocialButton;
