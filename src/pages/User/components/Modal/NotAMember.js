import React from 'react';
import PropTypes from 'prop-types';

import './NotAMember.css';

const NotAMember = ({ close }) => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: 'translateY(0vh)',
          opacity: '1'
        }}
      >
        <div className="modal-header">
          <h3>Aw snap!</h3>
        </div>
        <div className="modal-body">
          <p>You are not a member of Leapfrog Technology.</p>
          <p>
            You can join us from <a href="https://www.lftechnology.com/careers/"> here </a> :).
          </p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={close}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

NotAMember.propTypes = {
  close: PropTypes.func
};

export default NotAMember;
