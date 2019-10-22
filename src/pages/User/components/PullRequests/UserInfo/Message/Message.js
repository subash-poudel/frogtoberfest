import React from 'react';
import PropTypes from 'prop-types';
import getMessage from './getMessage';

const Message = ({ pullRequestCount, otherReposCount }) => (
  <h2 className="font-medium text-red-dark text-3xl">{getMessage(pullRequestCount, otherReposCount)}</h2>
);

Message.propTypes = {
  pullRequestCount: PropTypes.number,
  otherReposCount: PropTypes.number
};

export default Message;
