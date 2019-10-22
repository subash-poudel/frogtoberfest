import React from 'react';

import { HOSTNAME } from '../config';
import frogtoberfestLogo from '../assets/images/frogtoberfest-logo-1x.png';

const SiteTitle = () => (
  <div className="text-center mx-auto w-2/3 sm:w-1/2 py-4">
    <a className="text-white no-underline" href={HOSTNAME}>
      <img alt="Frogtoberfest Artwork" src={frogtoberfestLogo} />
    </a>
  </div>
);

export default SiteTitle;
