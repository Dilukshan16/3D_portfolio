import { span } from "motion/react-client";
import React from "react";

const Project = ({title, description, subDescription, href, image, tags}) => {
  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => ( 
              <span key={tag.id}> {tag.name} </span>
               ))}
          </div>
        </div>
        <button className="flex items-center gap-1 cursor-pointer hover-animation">
          Read More
          <img src="assets/arrow-right.svg" alt="right arrow" className="w-5" />
        </button>
      </div>
      <div
        className="bg-linear-to-r from-transparent via-neutral-700 
    to-transparent mt-12 h-px w-full"
      />
    </>
  );
};

export default Project;
