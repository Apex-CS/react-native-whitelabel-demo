/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import BootSplash from 'react-native-bootsplash';
import config from '@env';
import Header from '@buildVariant/Header';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    setTimeout(async () => {
      await BootSplash.hide({fade: true});
    }, 300);
  }, []);

  return (
    <SafeAreaView style={styles.bgContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Version from env '{process.env.BUILD_CONFIG}'
        </Text>
        <Text style={styles.sectionTitle}>
          Envirorment name '{config.appName}'
        </Text>
        <Text style={styles.txtSwapping}>font/color swapping example</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    fontFamily: config.fontFamily,
  },
  bgContainer: {
    flex: 1,
    backgroundColor: config.theme.primary,
  },
  txtSwapping: {
    fontFamily: config.fontFamily,
    color: config.theme.secondary,
    fontSize: 24,
  },
});

export default App;
