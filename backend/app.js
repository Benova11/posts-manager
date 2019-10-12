const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res ,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH , DELETE, OPTIONS");
  next();
});

app.post("/api/posts" , (req, res, next) => {
  const posts = req.body;
  console.log(posts);
  res.status(201).json({
    message: 'post added successfuly'
  });
});

app.get('/api/posts' ,(req, res, next) => {
  const posts = [
    {
      id: "fadf123421",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "fbgf151421",
      title: "Second server-side post",
      content: "This is coming from the server!"
    }
  ];

  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;