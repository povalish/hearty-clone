import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';

import { cardStyles, globalStyles, linkStyles } from 'modules/globals/Styles';
import { localStyles } from './styles';

import SampleImage from 'assets/images/sample.png';
import CurrencyIcon from 'assets/icons/currency.svg';
import RepostsIcon from 'assets/icons/reposts.svg';

import { Progress } from 'ui-kit/Progress';
import { ShareButton } from 'ui-kit/Buttons/ShareButton';
import { PrimaryButton } from 'ui-kit/Buttons/PrimaryButton';



interface ICardView {
  image: ImageSourcePropType;

  progressCollected: number;
  progressRequired: number;

  link: string;
  linkLable: string;

  onShare?: () => void;

  title: string;

  reposts: number;
  donations: number;

  buttonLabel?: string;
  buttonAction?: () => void;
}

export const Card: React.FC = () => (
  <TouchableOpacity style={[cardStyles.shadow]} activeOpacity={0.8}>
    <View style={[cardStyles.wrapper, localStyles.wrapper]}>
      <Image source={SampleImage} style={{ width: '100%' }} />
      <Progress start={33} end={100} />

      <View style={localStyles.caption}>
        {/* Campaign Card Header: fund name and share button */}
        <View style={[globalStyles.flexRow]}>
          <Text style={[linkStyles.link]}>Фонд дикой природы</Text>
          <ShareButton />
        </View>

        <Text style={localStyles.title}>Сохраним лес в Сибири</Text>

        {/* Card Statistic Item */}
        <View style={localStyles.statsItem}>
          <CurrencyIcon />
          <Text>
            <Text style={localStyles.statsCounter}>205600</Text> пожертвований
          </Text>
        </View>

        {/* Card Statistic Item */}
        <View style={localStyles.statsItem}>
          <RepostsIcon />
          <Text>
            <Text style={localStyles.statsCounter}>5312</Text> репостов
          </Text>
        </View>
      </View>

      <PrimaryButton>Поддержать</PrimaryButton>
    </View>
  </TouchableOpacity>
);
