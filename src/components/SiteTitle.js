import React from 'react';

import { HOSTNAME } from '../config';
import frogtoberfestLogo from '../assets/images/frogtoberfest-logo-1x.png';

const SiteTitle = () => (
  <div className="md:py-4 SiteTitle">
    <div className="mx-auto w-2/3 sm:w-1/2 py-4">
      <div className="SiteTitle__logo">
        <img src="https://github.com/leapfrogtechnology/opensource/raw/master/assets/leapfrog-opensource-logo.png" alt="Leapfrog Open Sourde" />
      </div>
      <span className="SiteTitle__sub-text">PRESENTS</span>
      <a className="SiteTitle__image-link" href={HOSTNAME}>
        <img alt="Frogtoberfest Artwork" src={frogtoberfestLogo} />
      </a>
    </div>
  </div>
);

export default SiteTitle;
