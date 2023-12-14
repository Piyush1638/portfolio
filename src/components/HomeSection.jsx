import { IoIosArrowDropright } from "react-icons/io";


const HomeSection = () => {
  return (
    <section className="flex flex-col justify-center items-center  min-h-[600px] border-b-2 border-slate-400">
      <span className="w-[100px] h-[100px] bg-lightPurple rounded-full absolute  top-40 left-40 blur-3xl" />{" "}
      <div className="gap-4 flex flex-col items-center justify-center">
        <h1 className="text-center px-4 py-3 font-semibold md:text-5xl text-xl font-poppins text-white">
          Hi👋, I&apos;m Piyush Kumar Singh
        </h1>
        <h3 className="text-center md:text-5xl text-2xl font-bold font-montserrat bg-gradient-to-r from-textPurple  to-textPink bg-clip-text text-transparent">
          I&apos;m Full Stack Web & Blockchain Developer
        </h3>
        <p className="text-slate-300 font-semibold font-poppins">
          Beautifully Crafting Ideas Into Web Apps
        </p>
        <button className="bg-lightPurple px-4 py-5 rounded-lg w-fit ">
          <a
            className="flex items-center gap-3 text-white font-montserrat"
            href="#my-works"
          >
            My Projects 
            <span>
              <IoIosArrowDropright />
            </span>
          </a>
        </button>
      </div>
    </section>
  );
};

export default HomeSection;
