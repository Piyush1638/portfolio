import Link from "next/link";
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
          I&apos;m Full Stack Web Developer
        </h3>
        <p className="text-slate-300 font-semibold font-poppins">
          Beautifully Crafting Ideas Into Web Apps
        </p>
        <Link  
        href="https://drive.google.com/file/d/1CGg0O9LePzFJAbJq2qHqU0g99defmsHN/view" className="bg-lightPurple p-3 rounded-lg w-fit flex items-center justify-center gap-2 text-slate-50 font-montserrat "
        target="blank"
        >
            My Resume 
            <span>
              <IoIosArrowDropright />
            </span>
        </Link>
      </div>
    </section>
  );
};

export default HomeSection;
