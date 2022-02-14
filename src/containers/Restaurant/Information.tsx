import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import starSvg from '../../../assets/star';
import openSvg from '../../../assets/open';

import { Spacer, Text } from '../../components';

const Body = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
`;

const RestaurantCard = styled(Card)`
  background-color: ${({ theme: { colors } }) => colors.bg.secondary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme: { colors } }) => colors.bg.secondary};
`;

const RestaurantCardContent = styled(Card.Content)``;

const Rating = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Stars = styled(View)`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.none}`};
  flex-direction: row;
`;

const StyledImage = styled.Image`
  width: ${({ theme }) => theme.size.md};
  height: ${({ theme }) => theme.size.md};
`;

const ClosedTemporarily = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Information = ({ restaurant = {} }) => {
  const {
    name = 'McDonalds',
    icon = 'https://www.clipartmax.com/png/middle/132-1320980_large-bed-sleep-icon-png-transparent.png',
    photos = [
      'https://www.mcdonalds.cl/images/layout/mcdonalds-logo-footer-bg-white.png',
    ],
    address = '123 some random street',
    isOpenNow = false,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;
  return (
    <Body>
      <RestaurantCard>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <RestaurantCardContent>
          <Text variant="label">{name}</Text>
          <Rating>
            <Stars>
              {[...Array(rating)].map((_, index) => (
                <SvgXml xml={starSvg} width={20} height={20} key={index} />
              ))}
            </Stars>
            {isOpenNow && <SvgXml xml={openSvg} width={30} height={30} />}
            {isClosedTemporarily && (
              <ClosedTemporarily>
                <Text variant="error">CLOSED TEMPORARILY</Text>
                <Spacer position="left" size="sm" />
                <StyledImage source={{ uri: icon }} />
              </ClosedTemporarily>
            )}
          </Rating>
          <Text>{address}</Text>
        </RestaurantCardContent>
      </RestaurantCard>
    </Body>
  );
};
