export const subjects = [
  { value: 'python', label: 'Python' },
  { value: 'dsa', label: 'Data Structures' },
  { value: 'math', label: 'Math' }
];

export const difficulties = ['Easy', 'Medium', 'Hard'];

export const questionBank = {
  python: [
    { q: 'What is the output of print(2 + 2)?', options: ['3', '4', '5', '6'], answer: 1 },
    { q: 'Which is a Python data type?', options: ['int', 'foo', 'bar', 'baz'], answer: 0 },
    { q: 'What keyword is used to define a function in Python?', options: ['function', 'def', 'func', 'define'], answer: 1 },
    { q: 'Which method is used to add an element to a list?', options: ['add()', 'append()', 'insert()', 'push()'], answer: 1 },
    { q: 'What is the correct way to create a list in Python?', options: ['list = []', 'list = ()', 'list = {}', 'list = ""'], answer: 0 },
  ],
  dsa: [
    { q: 'What is a stack?', options: ['Queue structure', 'LIFO structure', 'FIFO structure', 'Random access'], answer: 1 },
    { q: 'Best case time complexity for binary search?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n^2)'], answer: 2 },
    { q: 'Which data structure uses FIFO principle?', options: ['Stack', 'Queue', 'Tree', 'Graph'], answer: 1 },
    { q: 'What is the worst case time complexity of quicksort?', options: ['O(n log n)', 'O(n)', 'O(n^2)', 'O(log n)'], answer: 2 },
    { q: 'In a binary tree, what is the maximum number of nodes at level 3?', options: ['3', '4', '8', '16'], answer: 2 },
  ],
  math: [
    { q: 'What is 15 + 27?', options: ['41', '42', '43', '44'], answer: 1 },
    { q: 'What is 5 × 6?', options: ['25', '30', '35', '40'], answer: 1 },
    { q: 'What is the square root of 64?', options: ['6', '7', '8', '9'], answer: 2 },
    { q: 'What is 100 ÷ 4?', options: ['20', '25', '30', '35'], answer: 1 },
    { q: 'What is 2^4 (2 to the power of 4)?', options: ['8', '12', '16', '20'], answer: 2 },
  ]
};