"use client"

import { certificationsData, educationData } from "@/constants/constants";
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
            <div className="flex items-center gap-3 w-full my-3">
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
                <div className="w-full">
                    <div className="flex flex-col gap-3">
                        <h1 className="md:flex hidden text-white font-semibold font-montserrat text-xl">
                            Education
                        </h1>
                        <div className="flex flex-col gap-3">
                            {educationData.map((item, index) => (
                                <Education_Certifications
                                    key={index}
                                    duration={item.duration}
                                    course={item.course}
                                    organization={item.organization}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {showCertifications && (
                <div className="w-full">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white md:flex hidden font-semibold font-montserrat text-xl">
                            Certifications
                        </h1>
                        {certificationsData.map((item, index) => (
                            <Education_Certifications
                                key={index}
                                duration={item.duration}
                                course={item.course}
                                organization={item.organization}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Education_Certfication;
