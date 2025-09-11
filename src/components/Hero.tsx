import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="m-w-7xl min-h-screen flex justify-center items-center text-black flex-col px-4">
      <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent typing-animation">
        Pratham Darji
      </h1>
      <p className="text-center text-lg max-w-3xl sm:text-2xl mt-5 sm:mt-9 text-gray-600 ">
        Software Developer passionate about creating innovative web solutions
        and bringing ideas to life through clean, efficient code.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg text-white cursor-pointer">
          Download Resume
        </button>
        <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer">
          View Work
        </button>
      </div>

      <div className="flex gap-5 mt-15">
        <a
          href="https://github.com/Pratham-D14"
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/pratham-darji"
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:pratham14104@gmail.com"
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Mail />
        </a>
      </div>
    </div>
  );
};

export default Hero;
