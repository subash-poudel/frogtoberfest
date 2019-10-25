import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import TimeMessage from './TimeMessage';
import UsernameInput from './UsernameInput';
import CheckButton from './CheckButton';

/**
 * Username form component.
 */
class UsernameForm extends Component {
  static propTypes = {
    username: PropTypes.string,
    // Provided by withRouter()
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  static defaultProps = {
    username: ''
  };

  state = {
    username: this.props.username
  };

  /**
   * Event handler for username change.
   *
   * @param {*} e
   */
  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  /**
   * Event handler for form submission.
   *
   * @param {*} e
   */
  handleSubmit = e => {
    e.preventDefault();

    const username = this.state.username;

    if (username.trim().length === 0) {
      return;
    }
    const userUrl = this.getUserUrl(username);

    this.props.history.push(userUrl);
  };

  /**
   * Get URL for the user by username.
   *
   * TODO: Extract this out of the component as a util function.
   *
   * @param {string} username
   */
  getUserUrl = username => {
    return `/user/${username}`;
  };

  render = () => (
    <div className="pb-8 md:pt-16">
      <TimeMessage />
      <form
        action="/"
        className="flex h-8 mx-auto w-3/4 sm:w-1/2"
        method="get"
        onSubmit={this.handleSubmit}
        style={formStyle}
      >
        <UsernameInput value={this.state.username} onChange={this.handleUsernameChange} />
        <CheckButton />
      </form>
    </div>
  );
}

const formStyle = {
  border: '1px solid #6cb2eb',
  borderRadius: '4px',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
};

export default withRouter(UsernameForm);
