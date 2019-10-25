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
   * Creates state of User and bind functions.
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      totalPrCount: 0,
      totalOtherPrCount: 0
    };

    this.setUserContributionCount = this.setUserContributionCount.bind(this);
  }

  /**
   * Set User Contribution Count of Pull requests and other repo pull request count.
   *
   * @param {*} totalPrCount
   * @param {*} totalOtherPrCount
   */
  setUserContributionCount(totalPrCount, totalOtherPrCount) {
    if (totalPrCount && totalOtherPrCount) {
      this.setState({
        totalPrCount,
        totalOtherPrCount
      });
    }
  }

  /**
   * Render.
   *
   * @returns User Component View.
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
          totalPrCount={this.state.totalPrCount}
          totalOtherPrCount={this.state.totalOtherPrCount}
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
