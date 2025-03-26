import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './index';
import QuizList from './screens/QuizList';
import QuizScreen from './screens/QuizScreen';
import ResultsScreen from './screens/Results';

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizList"
        component={QuizList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Results"
        component={ResultsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}