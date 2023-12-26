
import Image from "next/image";
import Education_Certfication from "./Education_Certfication";


const About = () => {
  return (
    <section
      id="about"
      className=" min-h-[600px] bg-transparent w-full my-10 border-b-2 border-slate-400 pb-10"
    >
      <h1 className="sm:text-4xl text-center text-3xl font-semibold font-montserrat text-white my-10">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPurple to-textPink">Me</span>
      </h1>
      <div className="flex mf:flex-row  flex-col-reverse items-center justify-center w-full relative mb-10 gap-5">
        <div className="flex flex-col  mf:w-1/2 gap-5">
          <p className="text-slate-300 text-base text-justify font-montserrat">
            🚀 Hello there! With over
            <span className="text-white">
              {" "}2 years of hands-on experience in Web Development and Blockchain
              enthusiasm
            </span>
            , I&apos;m a tech enthusiast based in vibrant India. My passion for
            learning fuels my journey across diverse technologies and domains.
            Exploring new tech frontiers is my forte, and I love leveraging
            these discoveries to tackle real-world challenges. <br /> <br />
            🌐 Currently immersed in the world of Web Development, I&apos;m not just
            coding; I&apos;m crafting experiences. Backed by a solid foundation built
            over 2 years, my devotion to refining Data Structures and Algorithms
            is a testament to my commitment to mastering the craft.
          </p>
          <Education_Certfication/>
        </div>
        <div className="flex sm:w-1/2 bg-transparent  z-10 items-center justify-center relative sm:my-0 my-10">
          <span className="w-[50px] sm:block  h-[50px] bg-lightPurple rounded-full -z-10 absolute blur-sm sm:top-20 sm:right-20 top-0 right-5 animate-pulse" />
          <span className="md:w-24 sm:block  md:h-24 sm:h-16 sm:w-16 w-20 h-20 bg-lightPurple rounded-full md:z-10 -z-10  absolute blur-sm sm:bottom-10 bottom-0 md:left-1 lg:left-20 left-0  animate-pulse" />
          <span className="w-[30px] sm:block hidden  h-[30px] bg-lightPurple rounded-full  absolute blur-sm top-0 left-40 animate-pulse" />

          <Image
            className="p-10 rounded-full drop-shadow-2xl aspect-auto object-contain sm:shadow-2xl"
            src="/MyPic-removebg-preview.png"
            alt="Piyush Kumar Singh"
            height={300}
            width={500}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default About;
