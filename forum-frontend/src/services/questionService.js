export default [
  {
    _id: "64aabbccddeeff0011223344",
    name: "Alice",
    title: "How to implement a binary search algorithm?",
    problem:
      "I am struggling with the implementation of the binary search algorithm in JavaScript. My code doesn't return the correct index for some cases.",
    experiment:
      "I have tried multiple approaches, including recursive and iterative solutions, but I still face issues with edge cases.",
    tag: "JavaScript",
    upVotes: {
      user1: true,
      user2: true,
      user3: true,
    },
    downVotes: {
      user4: true,
    },
    upVotesCount: 3,
    postedOn: "2023-10-01T10:30:00Z",
    answers: ["64ddeeff1122334455667788", "64eeff112233445566778899"],
  },
  {
    _id: "64bbccddeeff001122334455",
    name: "Bob",
    title: "What are the best practices for securing a REST API?",
    problem:
      "I need to secure my REST API and would like to know about authentication, authorization, and other security best practices.",
    experiment:
      "I have implemented JWT for user authentication but need additional security layers.",
    tag: "Security",
    upVotes: {
      user2: true,
      user3: true,
    },
    downVotes: {
      user1: true,
    },
    upVotesCount: 2,
    postedOn: "2023-09-15T15:00:00Z",
    answers: ["64ccddeeff00112233446677"],
  },
  {
    _id: "64ccddeeff00112233446677",
    name: "Charlie",
    title: "How to optimize MongoDB queries for large datasets?",
    problem:
      "My MongoDB queries are slow when handling large datasets. I need to know the best way to optimize them for better performance.",
    experiment:
      "I have indexed some fields, but I still see performance issues. I am considering aggregation pipelines.",
    tag: "MongoDB",
    upVotes: {
      user1: true,
      user5: true,
    },
    downVotes: {},
    upVotesCount: 2,
    postedOn: "2023-10-05T08:00:00Z",
    answers: [],
  },
  {
    _id: "64ddeeff1122334455667788",
    name: "Dave",
    title: "What is the difference between 'let' and 'const' in JavaScript?",
    problem:
      "I often get confused when to use 'let' or 'const' in my JavaScript code. What are the specific differences?",
    experiment:
      "I used both in various scenarios but need a clearer understanding of their behavior and best practices.",
    tag: "JavaScript",
    upVotes: {
      user3: true,
      user6: true,
    },
    downVotes: {
      user2: true,
    },
    upVotesCount: 2,
    postedOn: "2023-09-28T11:15:00Z",
    answers: ["64eebbccddee112233445566"],
  },
  {
    _id: "64eebbccddee112233445566",
    name: "Eve",
    title: "How to handle asynchronous operations in Node.js?",
    problem:
      "I am having trouble understanding how to manage asynchronous code in Node.js effectively, especially when dealing with callbacks.",
    experiment:
      "I tried using promises and async/await but still encounter callback hell in some situations.",
    tag: "Node.js",
    upVotes: {
      user4: true,
      user5: true,
      user6: true,
    },
    downVotes: {},
    upVotesCount: 3,
    postedOn: "2023-09-20T14:45:00Z",
    answers: ["64ff00112233445566778899"],
  },
  {
    _id: "64ff00112233445566778899",
    name: "Frank",
    title: "What is the difference between SQL and NoSQL databases?",
    problem:
      "I'm unsure about when to use SQL vs. NoSQL databases in my projects. Could someone explain the differences and use cases?",
    experiment:
      "I used MySQL and MongoDB in different projects but don't fully understand their strengths and weaknesses.",
    tag: "Databases",
    upVotes: {
      user1: true,
      user7: true,
    },
    downVotes: {
      user5: true,
    },
    upVotesCount: 2,
    postedOn: "2023-10-02T09:30:00Z",
    answers: ["650011223344556677889900"],
  },
  {
    _id: "650011223344556677889900",
    name: "Grace",
    title: "How to manage state in React applications?",
    problem:
      "I find it challenging to manage complex state in React, especially when the application grows. What are the best strategies?",
    experiment:
      "I used the useState and useReducer hooks but sometimes get confused about which one to choose.",
    tag: "React",
    upVotes: {
      user3: true,
      user4: true,
      user8: true,
    },
    downVotes: {},
    upVotesCount: 3,
    postedOn: "2023-10-04T12:00:00Z",
    answers: [],
  },
  {
    _id: "65002233445566778899aabb",
    name: "Hank",
    title: "How does CSS Flexbox work?",
    problem:
      "I have difficulty aligning elements properly using Flexbox. Can someone explain how it works with examples?",
    experiment:
      "I used different flex properties but often get unexpected results with alignment.",
    tag: "CSS",
    upVotes: {
      user2: true,
      user9: true,
    },
    downVotes: {},
    upVotesCount: 2,
    postedOn: "2023-10-03T08:20:00Z",
    answers: ["65002233445566778899aabb"],
  },
  {
    _id: "650033445566778899aabbcc",
    name: "Ivy",
    title: "How to prevent SQL injection attacks?",
    problem:
      "I am worried about SQL injection vulnerabilities in my application. What steps can I take to prevent them?",
    experiment:
      "I tried parameterized queries but want to know if there are additional measures I should take.",
    tag: "Security",
    upVotes: {
      user1: true,
      user5: true,
      user6: true,
    },
    downVotes: {
      user3: true,
    },
    upVotesCount: 3,
    postedOn: "2023-09-29T17:30:00Z",
    answers: ["650033445566778899aabbcc"],
  },
  {
    _id: "6500445566778899aabbccdd",
    name: "Jack",
    title: "What are higher-order functions in JavaScript?",
    problem:
      "I often hear about higher-order functions, but I'm not sure what they are or how to use them effectively in JavaScript.",
    experiment:
      "I tried using map, filter, and reduce but want to understand the concept better.",
    tag: "JavaScript",
    upVotes: {
      user2: true,
      user4: true,
    },
    downVotes: {
      user7: true,
    },
    upVotesCount: 2,
    postedOn: "2023-10-06T13:50:00Z",
    answers: ["6500445566778899aabbccdd"],
  },
];
