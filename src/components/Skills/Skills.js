import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiMysql
} from "react-icons/si";


export default function Skills() {
  const skills = [
    <CgCPlusPlus />,
    <DiJavascript1 />,
    <DiNodejs />,
    <DiReact />,
    <DiPython />,
    <DiMongodb />,
    <DiGit />,
    <SiFirebase />,
    <SiMysql />
  ];
  return (
    <section id="skills" className="px-10 w-full my-40 max-w-5xl mx-auto">
      <h2 className="text-center text-6xl font-bold">My <span className="text-amber-900">Skills</span>...</h2>
      <div
        className="mt-10 flex gap-5 justify-center 
							flex-wrap mx-auto max-w-xl"
      >
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer px-12 py-10 
										rounded bg-blue-300 text-5xl 
										flex items-center justify-center 
										font-bold hover:shadow-xl"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
}
