import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Body = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
`;

const RestaurantCard = styled(Card)`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.bg.secondary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme: { colors } }) => colors.bg.primary};
`;

const RestaurantCardContent = styled(Card.Content)``;

const Title = styled(Card.Title)`
  padding: ${({ theme }) => theme.spacing.md};
`;

const CardText = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamily.body};
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
          <CardText>{address}</CardText>
          <CardText>{isOpenNow}</CardText>
          <CardText>{rating + icon}</CardText>
          <CardText>{isClosedTemporarily}</CardText>
        </RestaurantCardContent>
      </RestaurantCard>
    </Body>
  );
};
