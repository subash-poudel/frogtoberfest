import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import SiteTitle from '../../components/SiteTitle';
import UsernameForm from '../../components/UsernameForm';
import PullRequests from './components/PullRequests';

/**
 * User Component.
 *
 * @class User
 * @extends {Component}
 */
export class User extends Component {
  /**
   * Creates an instance of User.
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      pullRequestCount: 0,
      otherReposCount: 0
    };

    this.setUserContributionCount = this.setUserContributionCount.bind(this);
  }

  /**
   * Set User Contribution Count of Pull requests and other repo pull request count.
   *
   * @param {*} pullRequestCount
   * @param {*} otherReposCount
   */
  setUserContributionCount(pullRequestCount, otherReposCount) {
    if (pullRequestCount && otherReposCount) {
      this.setState({
        pullRequestCount,
        otherReposCount
      });
    }
  }

  /**
   * Render.
   *
   * @returns
   */
  render() {
    // Get username from props
    const {
      match: {
        params: { username }
      }
    } = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>{username}</title>
        </Helmet>
        <SiteTitle>Frogtoberfest Checker</SiteTitle>
        <UsernameForm
          username={username}
          pullRequestCount={this.state.pullRequestCount}
          otherReposCount={this.state.otherReposCount}
        />
        <PullRequests username={username} setUserContributionCount={this.setUserContributionCount} />
      </Fragment>
    );
  }
}

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default User;
