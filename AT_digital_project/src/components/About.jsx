import React from 'react';
import pc1 from "../assets/pc1.png";
import Button from './layouts/Button';

const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mr-8">
        <img src={pc1} alt="PC1" />
      </div>
      <div className="mr-8">
        <h1 className='text-2xl font-bold' style={{ color: '#6B3CC9' }}>Web & Mobile App Development</h1>
        <p className='mt-5'>
          Your web and mobile Apps are pieces of the puzzle to grow your<br/>
          business. We use frameworks which tailor content and engagement<br/>
          methods to respond to different intents shown by your potential<br/> 
          customers who interact with your business online.
        </p>
        <div className="mt-4"> 
          <Button title="LEARN MORE" />
        </div>
      </div>
      

      

      
    </div>

 
  );
}

export default About;
