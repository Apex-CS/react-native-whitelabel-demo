/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import config from '@env';

function Header(): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Pro Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 12,
    backgroundColor: config.theme.secondary,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: config.theme.primary,
    fontFamily: config.fontFamily,
  },
});

export default Header;
