import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Quiz from '../components/Quiz';
import { fetchQuestions } from '../services/api';

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  const fetchQuizQuestions = async () => {
    try {
      const response = await fetchQuestions();
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswer = (answerIndex) => {
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando perguntas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {showScore ? (
        <View>
          <Text style={styles.scoreText}>Você acertou {score} de {questions.length} perguntas.</Text>
          <TouchableOpacity style={styles.restartButton} onPress={handleRestartQuiz}>
            <Text style={styles.restartButtonText}>Recomeçar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Quiz
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
        
      )}
      </View>)}
