import React from 'react';
import PropTypes from 'prop-types';
import getMessage from './getMessage';

const Message = ({ pullRequestCount, otherReposCount }) => (
  <p className="font-medium text-green-darker text-3xl m-3">{getMessage(pullRequestCount, otherReposCount)}</p>
);

Message.propTypes = {
  pullRequestCount: PropTypes.number,
  otherReposCount: PropTypes.number
};

export default Message;
