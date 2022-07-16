import React from "react";
import cred from "../assets/portfolio/cred.jpg";
import designs from "../assets/portfolio/9designs.png";
import chat from "../assets/portfolio/chatApp.png";
import todo from "../assets/portfolio/todo.png";
import tip from "../assets/portfolio/tip.png";
import countries from "../assets/portfolio/countries.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cred,
      urll: "https://cred-clone-workskills.netlify.app/",
      code: "https://github.com/Mr-Patelz/Cred-clone",
    },
    {
      id: 2,
      src: todo,
      urll: "https://schedule-todo.netlify.app/",
      code: "https://github.com/Mr-Patelz/ToDo-Application",
    },
    {
      id: 3,
      src: chat,
      urll: "https://react-chat-appl.netlify.app/",
      code: "https://github.com/Mr-Patelz/Chat-Application",
    },
    {
      id: 4,
      src: tip,
      urll: "https://tip-calc-react.netlify.app/",
      code: "https://github.com/Mr-Patelz/tip-calculator",
    },
    {
      id: 5,
      src: designs,
      urll: "",
      code: "https://github.com/Mr-Patelz/9Designs",
    },
    {
      id: 6,
      src: countries,
      urll: "https://countries-reac.netlify.app/",
      code: "https://github.com/Mr-Patelz/Countries-list",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
        <div className="pb-20"> </div>
           {/* <div className="pb-20"> </div> */}
            <div className="pb-20"> </div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, urll, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={urll} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br/> <br/> <br/>
    </div>
  );
};

export default Portfolio;
