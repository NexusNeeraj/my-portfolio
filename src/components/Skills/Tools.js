import React from "react";
import { SiWindows11, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Tools = () =>{
  const tools = [<SiWindows11 />, <VscVscode />, <SiPostman />];
  return (
    <section id="tools" className="px-10 w-full my-40 max-w-5xl mx-auto">
      <h2 className="text-center text-6xl font-bold"><span className="text-amber-900">Tools</span> I use </h2>
      <div
        className="mt-10 flex gap-5 justify-center 
							flex-wrap mx-auto max-w-xl"
      >
        {tools.map((tool, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer px-12 py-10 
										rounded bg-blue-300 text-5xl 
										flex items-center justify-center 
										font-bold hover:shadow-xl"
            >
              {tool}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Tools;