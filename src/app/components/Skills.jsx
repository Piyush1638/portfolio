import React from "react";
import SkillsDiv from "./SkillsDiv";

import {motion} from "framer-motion"

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-[600px] bg-transparent w-full my-10 border-b-2 border-slate-400 pb-10"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale:1 }}
      transition={{ duration: 1}}
      viewport={{once:true}}
    >
      <h1 className="sm:text-4xl text-center text-3xl font-semibold font-montserrat text-white my-10">
        Skills
      </h1>
      <p className="text-slate-300 text-base text-justify font-montserrat">
        Armed with a versatile toolkit, I specialize in an array of technologies
        and frameworks that empower me as a Full Stack Web Developer and
        Blockchain maestro. Whether it's architecting scalable web solutions or
        delving into the decentralized realm of blockchain, I thrive on
        transforming ideas into tangible, impactful creations.
      </p>
      <SkillsDiv/>
    </motion.section>
  );
};

export default Skills;
