const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { default: axios } = require('axios');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events',async(req,res)=>{
    const event = req.body;
    await axios.post("https://khanmoon-minimicro-54q656vvfp65v-4000.githubpreview.dev/events",event);
    await axios.post("https://khanmoon-minimicro-54q656vvfp65v-4001.githubpreview.dev/events",event);
    axios.post("https://khanmoon-minimicro-54q656vvfp65v-4002.githubpreview.dev/events",event);
    console.log(req.body)
    res.send({status:"ok"});

})

app.listen(4005,()=>{
    console.log('listening on 4005');
})