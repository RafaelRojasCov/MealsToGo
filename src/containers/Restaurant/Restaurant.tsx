import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { colors } from './src/utils';

export const Restaurant = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const onChangeText = value => {
    setSearchQuery(value);
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeText}
          value={searchQuery}
        />
      </View>
      <View style={styles.body}>
        <Text>Body</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  searchBar: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  body: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.red,
  },
});
