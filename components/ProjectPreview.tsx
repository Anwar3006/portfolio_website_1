import React from "react";
import ArrowIcon from "@/../public/arrow.svg";
import { motion } from "framer-motion";

interface ProjectPreviewProps {
  link?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  dark?: boolean | undefined;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  link = "#",
  name = "Default Project Name",
  description = "Default Project Description",
  imageUrl = "/project-1.png",
  bgColor = "#e4e4e7",
  dark = false,
}) => {
  return (
    <motion.div
      className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
      style={{ backgroundColor: bgColor }}
      initial="initial"
      whileInView="animate"
      variants={PreviewAnimation}>
      <div
        onClick={() => window.open(link, "_blank")}
        className="h-full w-full px-10 py-6 duration-[700ms] transition-all ease-in-out hover:scale-105 hover:cursor-pointer bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold dark:text-zinc-700">{name}</h2>
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <ArrowIcon className="h-6 w-6" />
          </div>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-300 mt-[22rem] bg-zinc-800 px-5 py-2 rounded-xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const PreviewAnimation = {
  initial: { opacity: 0, y: 30, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 0.8 },
  },
};

export default ProjectPreview;
