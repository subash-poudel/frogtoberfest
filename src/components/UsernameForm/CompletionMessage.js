import React from 'react';
import { getQueryYear as year } from '../../utils/utils';

const CompletionMessage = () => {
  return (
    <div className="text-center text-green-dark pb-2">
      <p className="text-xl">You have successfully completed Frogtoberfest {year()}!</p>
    </div>
  );
};

export default CompletionMessage;
