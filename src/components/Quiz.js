import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Quiz = ({ question, options, handleAnswer }) => {
  return (
    <View>
      <Text style={styles.questionText}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.answerButton}
          onPress={() => handleAnswer(index)}
        >
          <Text style={styles.answerButtonText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
  },
  answerButtonText: {
    fontSize: 16,
  },
});

export default Quiz;
