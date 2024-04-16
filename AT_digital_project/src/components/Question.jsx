import React, { useState } from 'react';

const Question = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  const [showAnswer1, setShowAnswer1] = useState(false);

  const toggleAnswer1 = () => {
    setShowAnswer1(!showAnswer1);
  };

  const [showAnswer2, setShowAnswer2] = useState(false);

  const toggleAnswer2 = () => {
    setShowAnswer2(!showAnswer2);
  };


  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='text-2xl font-bold mb-4' style={{ color: '#6B3CC9' }}>Frequently asked questions</h1>
      <div className="max-w-md bg-question rounded-lg shadow-md p-6 mb-8" style={{ maxWidth: '1000px' }}>
        {/* Question */}
        <div onClick={toggleAnswer} className="flex items-center cursor-pointer">
          <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h3>
          {showAnswer ? <span>-</span> : <span>+</span>}
        </div>

        {/* Answer */}
        {showAnswer && (
          <div className="mt-4">
            <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum<br/>
               ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
          </div>
        )}
      </div>

      <div className="max-w-md bg-question rounded-lg shadow-md p-6 mb-8" style={{ maxWidth: '1000px' }}>
        {/* Question */}
        <div onClick={toggleAnswer1} className="flex items-center cursor-pointer">
          <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h3>
          {showAnswer1 ? <span>-</span> : <span>+</span>}
        </div>

        {/* Answer */}
        {showAnswer1 && (
          <div className="mt-4">
            <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum<br/>
               ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
          </div>
        )}
      </div>

      <div className="max-w-md bg-question rounded-lg shadow-md p-6 mb-8" style={{ maxWidth: '1000px' }}>
        {/* Question */}
        <div onClick={toggleAnswer2} className="flex items-center cursor-pointer">
          <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h3>
          {showAnswer1 ? <span>-</span> : <span>+</span>}
        </div>

        {/* Answer */}
        {showAnswer2 && (
          <div className="mt-4">
            <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum<br/>
               ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
          </div>
        )}
      </div>
    </div>

    
  );
};

export default Question;
