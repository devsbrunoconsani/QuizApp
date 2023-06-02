import axios from 'axios';

const BASE_URL = 'https://bible-quiz-api.herokuapp.com';

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/questions`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching questions:', error);
  }
};
