import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

import { colors, spacing } from '../../utils';

const Body = styled(View)`
  flex: 1;
  padding: ${spacing.md}px;
`;

const RestaurantCard = styled(Card)`
  flex: 1;
  background-color: ${colors.white};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: ${colors.white};
`;

const RestaurantCardContent = styled(Card.Content)``;

const Title = styled(Card.Title)`
  padding: 16px;
`;

export const Information = ({ restaurant = {} }) => {
  const {
    name = 'Restaurant name',
    icon = '',
    photos = [
      'https://www.mcdonalds.cl/images/layout/mcdonalds-logo-footer-bg-white.png',
    ],
    address = '123 some random street',
    isOpenNow = false,
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <Body>
      <RestaurantCard>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title title={name} />
        <RestaurantCardContent>
          <Text>{address}</Text>
          <Text>{isOpenNow}</Text>
          <Text>{rating + icon}</Text>
          <Text>{isClosedTemporarily}</Text>
        </RestaurantCardContent>
      </RestaurantCard>
    </Body>
  );
};
