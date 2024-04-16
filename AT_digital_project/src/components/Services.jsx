import React from "react";
import background from "../assets/laptop.jpg";
import Button from "./layouts/Button";

const Services = () => {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full lg:w-2/3 flex justify-center lg:justify-start">
        <div
          className="bg-gradient-to-br from-green-400 to-blue-400 p-8 rounded-lg"
          style={{
            maxWidth: "600px",
            marginLeft: "-200px",
            marginBottom: "-300px",
          }}
        >
          <h1
            className="font-semibold text-5xl text-white mb-8"
            style={{ width: "556px", height: "192px" }}
          >
            We crush your competitors, goals, and sales records - without the
            B.S.
          </h1>

          <Button title="Get free consultation" />
        </div>
      </div>
    </div>
  );
};

export default Services;
