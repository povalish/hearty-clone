import React from 'react';
import { Text, View } from 'react-native';

import { emptyMessageStyles } from './styles';
import { DefaultButton } from 'ui-kit/Buttons/DefaultButton';
import { IViewStyles } from 'modules/common/models/ViewStyles';


interface IEmptyCampaignsMessage extends IViewStyles {}

export const EmptyCampaignsMessage: React.FC<IEmptyCampaignsMessage> = ({ style }) => (
  <View style={[style, emptyMessageStyles.container]}>
    <Text style={emptyMessageStyles.text}>
      Кампаний по вашему запросу пока нет.
      Попробуйте изменить критерии поиска
    </Text>

    <DefaultButton>Сбросить фильтры</DefaultButton>
  </View>
);
