import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import MyProjects from "@/components/MyProjects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import TopProgressLine from "@/components/TopProgressLine";



const Home = () => {

  return (
    <main className="bg-gradient-to-r h-full min-h-screen  relative from-[#000000] to-[#434343] sm:px-20 px-4">
      {/* <span className="w-[100px] h-[100px] bg-lightPurple rounded-full absolute top-96 left-44 blur-3xl" />
      <span className="w-[100px] h-[100px] bg-lightPurple rounded-full absolute bottom-10 right-2 " />
      <span className="w-[100px] h-[100px] bg-lightPurple rounded-full absolute  bottom-20 left-8 blur-2xl" /> */}
      <TopProgressLine/>
      <div className="p-3 z-10 bg-transparent flex flex-col gap-5">
        <Navbar />

        {/* Home Section */}
        <HomeSection />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* My Projects Section */}
        <MyProjects />

        {/* Contact Me Section */}
        <ContactMe />
      </div>
      
      {/* Footer */}
      <Footer/>
    </main>
  );
};

export default Home;
