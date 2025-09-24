export const subjects = [
  { value: 'python', label: 'Python' },
  { value: 'dsa', label: 'Data Structures' },
  { value: 'math', label: 'Math' }
];

export const difficulties = ['Easy', 'Medium', 'Hard'];

export const questionBank = {
  python: [
    { q: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: 1 },
    { q: 'Which is a Python data type?', options: ['int', 'foo', 'bar', 'baz'], answer: 0 },
  ],
  dsa: [
    { q: 'What is a stack?', options: ['Queue', 'LIFO', 'FIFO', 'Array'], answer: 1 },
    { q: 'Best case for binary search?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n^2)'], answer: 2 },
  ],
  math: [
    { q: 'What is the capital of France?', options: ['Berlin', 'London', 'Paris', 'Rome'], answer: 2 },
    { q: 'What is 5 x 6?', options: ['11', '30', '56', '25'], answer: 1 },
  ]
};