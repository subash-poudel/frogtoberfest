import React from 'react';

const CompletionMessage = () => {
  return (
    <div className="text-center text-white pb-2" style={completionMessageStyle}>
      <p className="text-2xl">Thank you for your contributions!</p>
      <p className="text-xl">You have sucessfully completed Frogtoberfest 2019</p>
    </div>
  );
};

const completionMessageStyle = {
  color: 'green'
};

export default CompletionMessage;
