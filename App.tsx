import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';

import { Restaurant } from './src/containers';
import { theme } from './src/utils';

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular: require('./assets/fonts/Oswald_400Regular.ttf'),
    Lato_400Regular: require('./assets/fonts/Lato_400Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Restaurant />
    </ThemeProvider>
  );
}
