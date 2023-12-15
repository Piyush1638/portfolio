"use client"

import { useState } from "react";

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

const Education_Certfication = () => {
    const [showEducation, setShowEducation] = useState(true);
  const [showCertifications, setShowCertifications] = useState(false);
  return (
    <div className="flex flex-col">
    <div className="flex items-center justify-center gap-3 w-full my-3">
      <button
        onClick={() => {
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
  )
}

export default Education_Certfication