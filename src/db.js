const users = [
  {
    id: '1',
    name: 'Jane',
    email: 'jane@example.com',
    age: 21
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com',
    age: 17
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com',
    age: 23
  }
];

const posts = [
  {
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL',
    published: true,
    author: '1'
  },
  {
    id: '11',
    title: 'GraphQL 102',
    body: 'This is how to use GraphQL post',
    published: true,
    author: '1',
    comments: []
  },
  {
    id: '12',
    title: 'GraphQL 103',
    body: 'This is how to use GraphQL body',
    published: true,
    author: '2',
    comments: []
  },
];

const comments = [
  {
    id: '102',
    text: 'This works well for me.',
    author: '3',
    post: '10'
  },
  {
    id: '103',
    text: 'Thanks god! This works!',
    author: '1',
    post: '10'
  },
  {
    id: '104',
    text: 'Yes, you are.',
    author: '2',
    post: '11'
  },
  {
    id: '105',
    text: 'Maybe yes, maybe no.',
    author: '1',
    post: '12'
  }
];

const db = {
  users,
  posts,
  comments
};

export default db;