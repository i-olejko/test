import express from 'express';
import open from 'open';

const port = 3000;
let app = express();

app.get('*',(req, res)=>{
    res.send('hello from some ');
});

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        open(`http://localhost:${port}`);
    }
});
