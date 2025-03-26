//Display the list with no of questions in each quiz
//When user clicks on a quiz, navigate to the Quiz screen with the selected quiz

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { quizzes } from '../../data/quizzes';
import { StackNavigationProp } from '@react-navigation/stack';

export default function QuizList({ navigation }: { navigation: StackNavigationProp<any> }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Quiz</Text>
      <FlatList
        data={quizzes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.quizCard}
            onPress={() => navigation.navigate('Quiz', { quiz: item })}
          >
            <Text style={styles.quizTitle}>{item.title}</Text>
            <Text style={styles.questionsCount}>{item.questions.length} questions</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  quizCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444'
  },
  questionsCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 5
  }
});