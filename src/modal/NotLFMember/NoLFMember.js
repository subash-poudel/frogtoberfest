import React from 'react';

import './NotLFMember.css';

const NoLFMember = props => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          display: props.show ? 'block' : 'none'
        }}
      >
        <div className="modal-header">
          <h3>Aw snap!</h3>
          <span className="close-modal-btn" onClick={props.close}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <p>
            You are not a member of Leapfrog Technology.
            <a href="https://www.lftechnology.com/careers/" target="_blank">
              Leapfrog
            </a>
          </p>
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

export default NoLFMember;
