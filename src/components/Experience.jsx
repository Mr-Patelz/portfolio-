import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import java from "../assets/java.png";
import c from "../assets/express.png"; 
import db from "../assets/mongo.png";

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: java,
      title: "Java",
      style: "shadow-red-400",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: db,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: node,
      title: "Node JS",
      style: "shadow-white",
    },
    {
      id: 8,
      src: c,
      title: "Express",
      style: "shadow-blue-400",
    },
    
  ];

  return (
    <div
      name="expertise"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    > <div className="pb-20"> </div>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>  
              {/* <div className="pb-20"> </div> */}
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Expertise
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
