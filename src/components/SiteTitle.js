import React from 'react';

import { HOSTNAME } from '../config';
import frogtoberfestLogo from '../assets/images/frogtoberfest-logo-1x.png';

const SiteTitle = () => (
  <div className="text-center" style={styles}>
    <a className="text-white no-underline" href={HOSTNAME}>
      <img alt="Frogtoberfest Artwork" src={frogtoberfestLogo} />
    </a>
  </div>
);

const styles = {
  margin: '0px auto',
  width: '55%'
};

export default SiteTitle;
