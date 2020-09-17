import React from 'react';
import { getYear } from '../../utils/date';

const CompletionMessage = () => {
  return (
    <div className="text-center text-green-dark pb-2">
      <p className="text-xl">You have successfully completed Frogtoberfest {getYear()}!</p>
    </div>
  );
};

export default CompletionMessage;
