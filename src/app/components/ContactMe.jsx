import React from "react";

const ContactMe = () => {
  return (
    <section
      id="my-projects"
      className="relative min-h-[600px] bg-transparent w-full my-10 border-b-2 border-slate-400 pb-10"
    >
      <h1 className="sm:text-4xl text-center text-3xl font-semibold font-montserrat text-white my-10">
        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPurple to-textPink">Me</span>
      </h1>
      <p className="text-center font-poppins font-medium text-slate-200">Email me: because carrier pigeons are so last century 🕊️.</p>
    </section>
  );
};

export default ContactMe;
