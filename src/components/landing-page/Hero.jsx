import React from "react";

const Hero = () => {
  return (
    <section className="pt-16 md:mt-0 h-auto md:h-screen">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="px-6 text-lg text-gray-600 font-inter">
          With fun-to-use digital assistants, that do work for you, on demand.
          </h1>
          <p className="mt-5 text-4xl font-bold leading-tight text-customBlue sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
          Empower Your Real Estate Business with <br/>
            <span className="relative inline-flex sm:inline">
              {/* <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span> */}
              {/* <span className="relative bg-opacity-80 text-white  bg-gradient-to-r from-customBlue via-customBlue to-customOrange">AI-Powered Avatars  </span> */}
              <span className="relative text-white">
  <span className="absolute inset-0 bg-gradient-to-r from-customBlue via-blue-950 to-customOrange opacity-80 rounded-lg blur-lg"></span>
  <span className="relative bg-opacity-80">AI-Powered Avatars</span>
</span>

            </span>
          </p>

          <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-customBlue border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Get Started
            </a>

          
          </div>

          <p className="mt-8 text-base text-gray-500 font-inter">
            60 Days free trial · No credit card required
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
