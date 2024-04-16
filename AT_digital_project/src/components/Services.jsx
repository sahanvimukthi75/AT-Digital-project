import React from 'react';
import background from "../assets/laptop.jpg";
import Button from './layouts/Button';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
      <div className="w-full lg:w-2/3">
        <div className=" bg-gradient-to-br from-green-400 to-blue-400 p-8 rounded-lg" style={{ marginTop: '300px', marginLeft: '50px', marginRight:'100px'}}>
          <h1 className="font-semibold text-6xl text-white">
            We crush your competitors, goals, and sales records - without the B.S.
          </h1>
          <Button title="Get free consultation" />
        </div>
      </div>
    </div>
  );
};

export default Services;
