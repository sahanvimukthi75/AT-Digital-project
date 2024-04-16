import React from 'react';
import lense from "../assets/lense.png";
import Button from './layouts/Button';

const About1 = () => {
  return (
    <div className="flex items-center justify-center">
     
      <div className="mr-8">
        <h1 className='text-2xl font-bold' style={{ color: '#6B3CC9' }}>Digital Strategy Consulting</h1>
        <p className='mt-5'>
        Your digital strategy should complement the overall marketing strategy <br/>
        of the company. In online marketing, each component will never work in<br/>
         isolation and every business needs a different mix. We provide a clear <br/>
         concept and strategic overview to find the most efficient model for your business.
        </p>
        <div className="mt-4"> 
          <Button title="LEARN MORE" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mr-8">
        <img src={lense} alt="PC1" />
      </div>
      

      

      
    </div>

 
  );
}

export default About1;