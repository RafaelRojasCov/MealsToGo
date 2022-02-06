import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { Information } from './Information';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SearchContainer = styled(View)`
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.md}`};
`;

export const Restaurant = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const onChangeText = value => {
    setSearchQuery(value);
  };
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeText}
          value={searchQuery}
        />
      </SearchContainer>
      <Information />
    </SafeArea>
  );
};
