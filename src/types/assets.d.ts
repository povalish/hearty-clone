type AdditionalVars = {
  pathColor?: string;
}

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps & AdditionalVars>;
  export default content;
}

declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';

  const value: ImageSourcePropType;
  export default value;
}
