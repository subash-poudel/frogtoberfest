import React from 'react';

import './NotAMember.css';

const NotAMember = props => {
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
          <a href="https://www.lftechnology.com/careers/">You can be a member here.</a>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={props.close}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotAMember;
