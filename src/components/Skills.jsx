import SkillsDiv from "./SkillsDiv";


const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[600px] bg-transparent w-full my-10 border-b-2 border-slate-400 pb-10"
    >
      <h1 className="sm:text-4xl text-center text-3xl font-semibold font-montserrat text-white my-10">
      My <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPurple to-textPink">Skills</span>
      </h1>
      <p className="text-slate-300 text-base text-justify font-montserrat">
        Armed with a versatile toolkit, I specialize in an array of technologies
        and frameworks that empower me as a Full Stack Web Developer and
        Blockchain maestro. Whether it&apos;s architecting scalable web solutions or
        delving into the decentralized realm of blockchain, I thrive on
        transforming ideas into tangible, impactful creations.
      </p>
      <SkillsDiv/>
    </section>
  );
};

export default Skills;
