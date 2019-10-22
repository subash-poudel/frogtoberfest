import React from 'react';
import PropTypes from 'prop-types';
import UserImage from './UserImage';
import PullRequestCount from './PullRequestCount';
import ResultMessage from './ResultMessage';
import { pullRequestAmount, otherReposAmount } from '../pullRequestAmount';
import Message from './Message/Message';

const UserInfo = ({ username, userImage, pullRequestCount, otherReposCount }) => (
  <div className="pb-2 flex flex-wrap justify-center content-center rounded mx-auto overflow-hidden w-5/6 lg:w-1/2">
    <div className="mx-4">{userImage && <UserImage userImage={userImage} username={username} />}</div>

    <div className="flex flex-col  flex-wrap justify-center content-center">
      <div className="flex flex-wrap justify-center content-center">
        <div
          className="flex flex-wrap justify-center content-center flex-col"
          style={pullRequestCount >= pullRequestAmount ? completeMark : incompleteMark}
        >
          <PullRequestCount pullRequestCount={pullRequestCount} pullRequestAmount={pullRequestAmount} />
          <ResultMessage message="Total PR'S" />
        </div>
        <div
          className="flex flex-wrap justify-center content-center flex-col"
          style={otherReposCount >= otherReposAmount ? completeMark : incompleteMark}
        >
          <PullRequestCount pullRequestCount={otherReposCount} pullRequestAmount={otherReposAmount} />
          <ResultMessage message="Other Repo PR'S" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center content-center flex-col">
        <Message pullRequestCount={pullRequestCount} otherReposCount={otherReposCount} />
      </div>
    </div>
  </div>
);

const incompleteMark = {
  color: '#133370'
};

const completeMark = {
  color: 'green'
};

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  pullRequestCount: PropTypes.number.isRequired,
  otherReposCount: PropTypes.number.isRequired
};

export default UserInfo;
