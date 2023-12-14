import { useState } from "react";
import Image from "next/image";

const Education_Certifications = ({ duration, course, organization }) => (
  <div className="flex flex-col gap-2 bg-secondary p-6 rounded-lg">
    <h1 className="text-white font-semibold font-montserrat md:text-lg text-base flex items-center justify-between">
      {course}{" "}
      <span className="md:text-sm text-xs font-poppins text-slate-400">
        {duration}
      </span>
    </h1>
    <p className="text-slate-300 font-montserrat">{organization}</p>
  </div>
);

const About = () => {
  const [showEducation, setShowEducation] = useState(true);
  const [showCertifications, setShowCertifications] = useState(false);
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
          <div className="flex flex-col">
            <div className="flex items-center justify-center gap-3 w-full my-3">
              <button
                onClick={(e) => {
                  setShowEducation(true);
                  setShowCertifications(false);
                }}
                className={`text-white border-2 ${
                  showEducation ? "bg-textPurple" : "bg-transparent"
                } border-slate-600 hover:bg-lightPurple px-4 py-3 rounded-lg`}
              >
                Education
              </button>
              <button
                onClick={() => {
                  setShowEducation(false);
                  setShowCertifications(true);
                }}
                className={`text-white border-2 ${
                  showCertifications ? "bg-textPurple" : "bg-transparent"
                } border-slate-600 hover:bg-lightPurple px-4 py-3 rounded-lg`}
              >
                Certifications
              </button>
            </div>
            {showEducation && (
              <div className="md:border-2 md:border-lightPurple rounded-md w-full md:p-10">
                <div className="flex flex-col gap-3">
                  <h1 className="md:flex hidden text-white font-semibold font-montserrat text-xl">
                    Education
                  </h1>
                  <div className="flex flex-col gap-3">
                    <Education_Certifications
                      duration="2021-Present"
                      course="B.E/B.Tech"
                      organization="Chandigarh University, Punjab, India"
                    />
                    <Education_Certifications
                      duration="2019-2021"
                      course="Intermediate"
                      organization="D.A.V. Paonta Sahib, Sirmaur, Himachal Pradesh, India"
                    />
                    <Education_Certifications
                      duration="2017-2018"
                      course="High School"
                      organization="Manas International Public School, Jehanabad, Bihar, India"
                    />
                  </div>
                </div>
              </div>
            )}

            {showCertifications && (
              <div className="md:border-2 md:border-lightPurple rounded-md w-full md:p-10">
                <div className="flex flex-col gap-3">
                  <h1 className="text-white md:flex hidden font-semibold font-montserrat text-xl">
                    Cetifications
                  </h1>
                  <Education_Certifications
                    duration="2023"
                    course="Blockchain Technology using Ethereum and Polygon"
                    organization="Metacrafter"
                  />
                  <Education_Certifications
                    duration="2021"
                    course="An Introduction To Programming Through C++"
                    organization="NPTEL, India."
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex sm:w-1/2 bg-transparent  z-10 items-center justify-center relative sm:my-0 my-10">
          <span className="w-[50px] sm:block  h-[50px] bg-lightPurple rounded-full -z-10 absolute blur-sm sm:top-20 sm:right-20 top-0 right-5 animate-pulse" />
          <span className="md:w-24 sm:block  md:h-24 sm:h-16 sm:w-16 w-20 h-20 bg-lightPurple rounded-full md:z-10 -z-10  absolute blur-sm sm:bottom-10 bottom-0 md:left-1 lg:left-20 left-0  animate-pulse" />
          <span className="w-[30px] sm:block hidden  h-[30px] bg-lightPurple rounded-full  absolute blur-sm top-0 left-40 animate-pulse" />

          <Image
            className="sm:rounded-lg p-10 rounded-full  aspect-auto object-contain sm:shadow-2xl"
            src="/ProfilePic-removebg-preview.png"
            alt="Piyush Kumar Singh"
            height={300}
            width={500}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
