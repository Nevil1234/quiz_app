//Result page with no. of correct & incorrect answers

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ResultsScreen({ score, totalQuestions, navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.resultBox}>
        <Icon name="emoji-events" size={60} color="#FFD700" />
        <Text style={styles.title}>Quiz Completed!</Text>
        
        <View style={styles.scoreContainer}>
          <View style={styles.scoreItem}>
            <Text style={styles.scoreValue}>{score}</Text>
            <Text style={styles.scoreLabel}>Correct</Text>
          </View>
          <View style={styles.scoreItem}>
            <Text style={styles.scoreValue}>{totalQuestions - score}</Text>
            <Text style={styles.scoreLabel}>Incorrect</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.buttonText}>Back to Quizzes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  resultBox: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333'
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20
  },
  scoreItem: {
    alignItems: 'center'
  },
  scoreValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2196F3'
  },
  scoreLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 5
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
});