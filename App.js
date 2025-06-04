import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BusMap from './components/BusMap';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BusMap />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
