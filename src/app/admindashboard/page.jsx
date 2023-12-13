"use client";

import Image from "next/image";
import { useState } from "react";

const BoxComponent = ({ title, count }) => (
  <div className="flex flex-col justify-center bg-secondary rounded-lg p-4 ">
    <h3 className="flex items-center justify-center font-bold text-slate-200">
      {title}
    </h3>
    <p className="flex items-center justify-center font-bold text-slate-200">
      {count}
    </p>
  </div>
);

const Message =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime recusandae et, inventore fuga atque beatae culpa voluptas soluta modi officiis? Assumenda aperiam doloribus nihil quas error, enim nulla autem dolorum illo. Atque maiores enim eos, a possimus id soluta porro sequi. Laboriosam quasi rem repudiandae placeat, iste totam ut soluta distinctio mollitia nihil esse eligendi doloribus incidunt architecto illum aperiam nisi. Laudantium facere odio voluptates ea cum, obcaecati, quibusdam cumque similique veniam laboriosam provident tenetur distinctio tempora sapiente asperiores, reprehenderit nisi totam pariatur. Dignissimos, ratione id pariatur voluptatum optio, quod dolor alias quia eaque saepe tempore, explicabo magni. Fuga, inventore?";

const page = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showMarkAsRead, setShowMarkAsRead] = useState(false)
  return (
    <main className="bg-gradient-to-r h-full min-h-screen  relative from-[#000000] to-[#434343] md:p-24 p-10">
      <div className="flex flex-col">
        <h1 className="font-bold font-montserrat text-2xl text-slate-200">
          Dashboard Panel
        </h1>
        <div className="flex items-center justify-start my-5 gap-6">
          <BoxComponent title="Total Message" count={30} />
          <BoxComponent title="Total Message" count={30} />
        </div>

        <div className="w-full">
          <h2 className="font-bold font-montserrat text-xl text-slate-200 my-10">
            Messages
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
              <div className="flex flex-col gap-2">
                <p className="font-bold font-montserrat text-slate-200">Name</p>
                <p className="font-bold font-montserrat text-slate-300">
                  Piyush Kumar Singh
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold font-montserrat text-slate-200">
                  Email
                </p>
                <p className="font-bold font-montserrat text-slate-300">
                  piyushkumarsingh665@gmail.com
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold font-montserrat text-slate-200">
                  Subject
                </p>
                <p className="font-bold font-montserrat text-slate-300">
                  Offering Internship
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold font-montserrat text-slate-200">
                  Message
                </p>
                <p className="font-bold flex-nowrap font-montserrat text-slate-300">
                  {Message.slice(0, 50)}
                </p>
              </div>
              <div className="flex items-center justify-center relative h-full">
                <Image className="cursor-pointer" onClick={()=>setShowMarkAsRead(!showMarkAsRead)} src="/more.png" alt="Three-dot" height={20} width={20} />
                {showMarkAsRead && (
                  <div className=" p-1 rounded-lg">
                    <p className="font-montserrat font-bold text-xs p-4 rounded-md text-white bg-primary absolute bottom-0">
                      Mark as Read
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
