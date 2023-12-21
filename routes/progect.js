const { v4: uuidv4 } = require('uuid');
var express=require('express');
var router = express.Router();
const post=3000;

app.post('/api/project',(req,res)=>{
    res.json(project);
    console.log('api server is running on port ${8080}')

});

app.listen(post,()=>{
    console.log('api server is running on port ${8080}')
});

module.exports = router;