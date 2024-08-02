import FlipCard from "./FlipCard";

import { projects } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";

const MyProjects = () => {
  return (
    <section
      id="my-works"
      className="min-h-[600px] bg-transparent w-full my-10 border-b-2 border-slate-400 pb-10"
    >
      <h1 className="sm:text-4xl text-center text-3xl font-semibold font-montserrat text-white my-10">
        My
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPurple to-textPink">
          {" "} Projects
        </span>
      </h1>
      <p className="text-slate-300 text-base text-justify font-montserrat my-10">
        I am a passionate developer who loves to build new things. Here are some
        of my projects that I have worked on.
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-5 gap-2">
        {projects.map((project) => {
          return (
            <FlipCard
              {...project}
              key={project.id}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              github={project.github}
              deployment={project.deployment}
              imageUrl={project.imageUrl}
            />
          );
        })}
      </div>
      <h3 className="text-end font-normal my-2 text-slate-400">
        More works coming soon...
      </h3>
      <div className="flex items-center justify-center my-5">
        <Link
          className="bg-transparent text-white font-poppins border-2 hover:bg-gradient-to-r from-textPurple to-textPink border-lightPurple p-2 rounded-lg flex items-center justify-center gap-3"
          href={"https://github.com/Piyush1638?tab=repositories"}
        >
          Traverse projects{" "}
          <Image src="github.svg" alt="github" height={40} width={40} />
        </Link>
      </div>
    </section>
  );
};

export default MyProjects;
