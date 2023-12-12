import {motion} from "framer-motion";
import Link from "next/link";

import Image from "next/image";

const ContactMe = () => {
  return (
    <motion.section
      id="contact"
      className="relative  min-h-[600px] bg-transparent w-full my-10 border-b-2 border-slate-400 pb-10"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale:1 }}
      transition={{ duration: 1 }}
      viewport={{once:true}}
    >
      <span className="w-[50px] sm:block hidden  h-[50px] bg-lightPurple rounded-full z-10 absolute blur-sm top-20 right-20 animate-pulse" />
      <span className="w-[100px] sm:block hidden  h-[100px] bg-lightPurple rounded-full z-10 absolute blur-sm bottom-10 md:left-1 lg:left-20 left-0  animate-pulse" />
      <span className="w-[20px] sm:block hidden  h-[20px] bg-lightPurple rounded-full  absolute blur-sm top-0 left-40 animate-pulse" />
      <h1 className="sm:text-4xl text-center text-3xl font-semibold font-montserrat text-white my-10">
        Contact{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPurple to-textPink">
          Me
        </span>
      </h1>
      <p className="text-center font-poppins font-medium z-10 text-slate-200">
        Email me: because carrier pigeons are so last century 🕊️.
      </p>
      <div className="flex items-center justify-center my-10 min-h-[400px]">
        <form className="md:w-4/5 lg:w-3/5 w-full bg-primary md:p-10 p-5 rounded-lg">
          <div className="flex flex-col gap-3 min-h-3/5">
            <input
              type="text"
              placeholder="Name"
              className="w-full text-slate-300 p-2 bg-secondary  focus:outline-textPurple rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full text-slate-300 p-2 bg-secondary  focus:outline-textPurple rounded-md"
            />
            <input
              type="text"
              placeholder="subject"
              className="w-full text-slate-300  p-2 bg-secondary focus:outline-textPurple rounded-md"
            />
            <textarea
              type="text"
              placeholder="Message"
              className="w-full text-slate-300 h-4/5 p-2 bg-secondary focus:outline-textPurple rounded-md"
            />
          </div>
          <div className="text-end">
            <button
              type="submit"
              className="bg-textPurple px-4 py-3 my-3 font-montserrat rounded-lg text-white"
            >
              Send 🚀
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-3">
          <Link href="https://github.com/Piyush1638/" className=" hover:scale-150 duration-500 ease-linear" target="blank"><Image src="/github.svg" alt="github" height={50} width={50}/></Link>
          <Link href="https://www.linkedin.com/in/piyush-kumar-singh-377112231/" className=" hover:scale-150 duration-500 ease-linear" target="blank"><Image src="/socialLinkedin.png" alt="LinkedIn" height={50} width={50} /></Link>
          <Link href="https://www.instagram.com/_piyush_singh_002/" className=" hover:scale-150 duration-500 ease-linear" target="blank"><Image src="/instagram.png" alt="Instagram" height={50} width={50} /></Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
