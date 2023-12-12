import Link from "next/link";
import { motion } from "framer-motion";

const FlipCard = ({
  name,
  description,
  techStack,
  github,
  deployment,
  imageUrl,
}) => {
  return (
    <motion.div
      className="w-full h-[420px]  bg-transparent cursor-pointer group perspective"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden md:h-full h-fit w-full rounded-3xl">
          <img
            src={imageUrl}
            alt="Project1"
            className="h-full w-full object-contain rounded-sm"
          />
        </div>
        <div className="absolute backface-hidden my-rotate-y-180 w-full h-full bg-secondary rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-full md:p-10 p-5">
            <h1 className="md:text-3xl text-base text-center font-semibold text-textPurple font-montserrat">
              {name}
            </h1>
            <p className="md:text-base text-sm text-justify text-slate-400 font-poppins my-2">
              {description}
            </p>
            <p className="md:text-base text-sm text-justify text-lightPurple font-poppins">
              Tech Stack: <span className="text-slate-300">{techStack.map((tech)=>{
                return tech+" "
              })}</span>
            </p>
            <div className="flex gap-2 mt-5 items-center justify-center text-center scale-0 group-hover:scale-100 duration-1000 delay-500">
              <Link
                className="bg-primary md:p-4 p-3 rounded-lg"
                href={github}
                target="blank"
              >
                <img
                  src="/github.svg"
                  alt="Github"
                  className="h-[50px] w-[50px]"
                />
              </Link>
              <Link
                className="bg-primary md:p-4 p-3 rounded-lg"
                href={deployment}
                target="blank"
              >
                <img
                  src="/view.png"
                  alt="Deployment"
                  className="h-[50px] w-[50px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FlipCard;
