import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";


const HomeSection = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[600px] border-b-2 border-slate-400">
      <span className="w-[100px] h-[100px] bg-lightPurple rounded-full absolute  top-40 left-40 blur-3xl" />{" "}
      <div className="gap-4 flex flex-col items-center justify-center">
        {/* <img
              className="rounded-full border-2 border-lightPurple h-[200px] w-[200px] p-4 object-contain shadow-2xl"
              src="/sampleImage.png"
              alt="Piyush Kumar Singh"
            /> */}
        <h1 className="text-center font-semibold sm:text-5xl text-3xl font-poppins text-white">
          Hi👋, I'm Piyush Kumar Singh
        </h1>
        <h1 className="text-center sm:text-5xl text-3xl font-bold font-montserrat bg-gradient-to-r from-textPurple to-textPink bg-clip-text text-transparent">
          I,m Full Stack Web & Blockchain Developer
        </h1>
        <p className="text-slate-400">
          Beautifully Crafting Ideas Into Web Apps
        </p>
        <button className="bg-lightPurple px-4 py-5 rounded-lg w-fit ">
          <a
            className="flex items-center gap-3 text-white font-montserrat"
            href="#my-projects"
          >
            My Projects{" "}
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
