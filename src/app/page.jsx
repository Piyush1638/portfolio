"use client";
import Navbar from "./components/Navbar";

import HomeSection from "./components/HomeSection";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="bg-gradient-to-r h-full min-h-screen  relative from-[#000000] to-[#434343] sm:px-20 px-4">
      {/* <span className="w-[100px] h-[100px] bg-lightPurple rounded-full absolute top-96 left-44 blur-3xl" />
      <span className="w-[100px] h-[100px] bg-lightPurple rounded-full absolute bottom-10 right-2 " />
      <span className="w-[100px] h-[100px] bg-lightPurple rounded-full absolute  bottom-20 left-8 blur-2xl" /> */}
      <div className="p-3 z-10 bg-transparent flex flex-col gap-5">
        <Navbar />

        {/* Home Section */}
        <HomeSection />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* My Projects Section */}
        <section
          id="my-projects"
          className="min-h-[600px] bg-transparent w-full my-10 border-b-2 border-slate-400 pb-10"
        >
          <h1 className="sm:text-4xl text-center text-3xl font-semibold font-montserrat text-white my-10">
            My Projects
          </h1>
          <p className="text-slate-300 text-base text-justify font-montserrat">
            I am a passionate developer who loves to build new things. Here are
            some of my projects that I have worked on.
          </p>
        </section>
      </div>
    </main>
  );
}
