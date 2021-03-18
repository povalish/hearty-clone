import React from 'react';

import { Base } from './Base';
import { Campaign } from './Campaign';
import { ILogo } from './types';



export const Logo: React.FC<ILogo> = (config) => {
  // return Hearty.Компании
  if (config.type === 'campaign') {
    return <Campaign {...config} />;
  }

  // return Hearty.
  return <Base {...config} />;
};
