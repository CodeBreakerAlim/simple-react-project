import React from "react";
import heroImg from "../assets/hero.jpg"; // Image import

const Hero = () => {
  return (
    <section className="bg-gray-100 ">
      <div className="container  mx-auto flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
            marign:"0",
          }}
          className="flex-1 text-center md:text-center flex flex-col justify-center p-81"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Welcome to My Website
          </h1>
          <p className="text-lg text-white mb-6">
            Happy a coding journey with us. Explore our features and get started today!
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
