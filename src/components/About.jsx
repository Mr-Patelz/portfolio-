import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    > 
    <div className="pb-20"> </div>
    <div className="pb-5"> </div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1"> 
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Logical and organised individual with a strong foundation in software engineering.
         Proficient in C, C++, Java, React. Seeking to raise coding skills by providing error-free codes. 
         Ability to translate business requirements into innovative software solutions. Excellent teamwork, 
         interpersonal and communication skills. Looking to start a career as an entry-level professional with a reputed IT company.
        </p>

        <br />

        <p className="text-xl">
        I'm interested in solving real-world problems with the use of technology. 
        I like working in teams which give me exposure to the practical aspects work.
        Actively looking for opportunities that would help improve my skills and expand my network.
        </p>
      </div>
      <div className="pb-20"> </div>
      <div className="pb-20"> </div>
    </div>
    
  );
};

export default About;
