const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const app = express();
app.use(bodyParser.json());
const commentsByPostId = {};

app.get('/posts/:id/comments', (req,res)=>{
    res.send(commentsByPostId[req.params.id] || []);
});
app.post('/posts/:id/comments', (req,res)=>{
    const cid = randomBytes(4).toString('hex');
    const { content } = req.body;
    const pid = req.params.id;
    const comments = commentsByPostId[pid] || [];
    comments.push({
        id:cid, content
    });
    commentsByPostId[pid] = comments;
    res.status(201).send(comments);
});

app.listen(4001,()=>{
    console.log('server is running on port 4001');
});