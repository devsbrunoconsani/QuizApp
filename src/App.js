import React from 'react';
import { View, StyleSheet } from 'react-native';
import QuizScreen from './screens/QuizScreen';

function App () {
  return (
    <View style={styles.container}>
      <QuizScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
