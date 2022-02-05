import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { colors } from './src/utils';

export default function App() {
  const [searchQuery, setSearchQuery] = useState(null);
  const onChangeText = value => {
    setSearchQuery(value);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeText}
        value={searchQuery}
      />
      <View style={styles.body}>
        <Text>Body</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.red,
  },
});
