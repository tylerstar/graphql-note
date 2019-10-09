const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()));
  },
  me() {
    return {
      id: 'abc123',
      name: 'Jane',
      email: 'example@example.com',
      age: 28
    }
  },
  posts(parent, args, { db },  info) {
    if (!args.query) {
      return db.posts;
    }

    return db.posts.filter(post => {
      const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
      const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
      return isTitleMatch || isBodyMatch;
    });
  },
  comments(parent, args, { db }, info) {
    if (!args.query) {
      return db.comments;
    }

    return db.comments.filter(comment => comment.text.toLowerCase().includes(args.query.toLowerCase()));
  }
};

export default Query;