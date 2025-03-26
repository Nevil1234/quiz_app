

export interface Question {
  questionText: string;
  options: string[];
  correctOption: number; // Index of the correct option
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'General Knowledge Quiz',
    questions: [
      {
        questionText: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctOption: 2,
      },
      {
        questionText: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctOption: 1,
      },
      {
        questionText: 'Who wrote the play "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
        correctOption: 1,
      },
      {
        questionText: 'What is the largest ocean in the world?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        correctOption: 3,
      },
      {
        questionText: 'Which country is home to the Great Wall?',
        options: ['Japan', 'China', 'India', 'Russia'],
        correctOption: 1,
      },
    ],
  },
  {
    id: '2',
    title: 'Science Quiz',
    questions: [
      {
        questionText: 'What is the chemical symbol for water?',
        options: ['H2O', 'CO2', 'NaCl', 'O2'],
        correctOption: 0,
      },
      {
        questionText: 'What is the process by which plants make their own food?',
        options: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'],
        correctOption: 1,
      },
      {
        questionText: 'What is the hardest natural substance on Earth?',
        options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
        correctOption: 2,
      },
      {
        questionText: 'What is the unit of measurement for electrical resistance?',
        options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
        correctOption: 2,
      },
      {
        questionText: 'Which gas do plants absorb during photosynthesis?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctOption: 1,
      },
    ],
  },
];