import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Question, Quiz } from '../../data/quizzes';
import ResultsScreen from './Results';

export default function QuizScreen({ route, navigation }: { route: any, navigation: any }) {
  const { quiz }: { quiz: Quiz } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => backHandler.remove();
  }, []);

  const handleOptionPress = (index: number) => {
    if (!isSubmitted) {
      setSelectedOption(index);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (selectedOption === currentQuestion.correctOption) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return <ResultsScreen
      score={score}
      totalQuestions={quiz.questions.length}
      navigation={navigation}
    />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>
        Question {currentQuestionIndex + 1}/{quiz.questions.length}
      </Text>
      <Text style={styles.questionText}>{currentQuestion.questionText}</Text>

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => {
          const isCorrect = index === currentQuestion.correctOption;
          const isSelected = index === selectedOption;

          let optionStyle = {};
          let iconName = '';

          // Selected state with blue border
          if (isSelected && !isSubmitted) {
            optionStyle = styles.selectedOption;
          }

          // Submitted state
          if (isSubmitted) {
            if (isCorrect) {
              optionStyle = styles.correctOption;
              iconName = 'check-circle';
            } else if (isSelected && !isCorrect) {
              optionStyle = styles.incorrectOption;
              iconName = 'cancel';
            }
          }

          return (
            <TouchableOpacity
              key={index}
              style={[styles.option, optionStyle]}
              onPress={() => handleOptionPress(index)}
              disabled={isSubmitted}
            >
              <Text style={styles.optionText}>{option}</Text>
              {iconName !== '' && (
                <Icon
                  name={iconName}
                  size={24}
                  color={isCorrect ? '#4CAF50' : '#F44336'}
                  style={styles.icon}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {isSubmitted && currentQuestionIndex === quiz.questions.length - 1 && (
        <Text style={styles.warningText}>
          This was your last question.Submit the quiz to get the score.
        </Text>
      )}

      <TouchableOpacity
        style={[styles.button, (selectedOption === null && !isSubmitted) && styles.disabledButton]}
        onPress={isSubmitted ? handleNext : handleSubmit}
        disabled={selectedOption === null && !isSubmitted}
      >
        <Text style={styles.buttonText}>
          {isSubmitted ? currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Submit Quiz' : 'Check Answer'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  questionNumber: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10
  },
  questionText: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333'
  },
  warningText: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 30,
    color: 'red'
  },
  optionsContainer: {
    marginBottom: 30
  },
  optionText: {
    fontSize: 16,
    color: '#444',
    flex: 1
  },
  correctOption: {
    backgroundColor: '#e8f5e9',
    borderColor: '#4CAF50'
  },
  incorrectOption: {
    backgroundColor: '#ffebee',
    borderColor: '#F44336'
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  disabledButton: {
    backgroundColor: '#bdbdbd'
  },
  option: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  selectedOption: {
    borderColor: '#2196F3',
    borderWidth: 2,
    backgroundColor: '#e3f2fd'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
  icon: {
    marginLeft: 10
  }
});