import open from 'open';
import app from './app';

const port = 3000;

app.listen(port,(err)=>{
    console.log('running on port 3000');
    if(err){
        console.log(err);
    }else{
        //open(`http://localhost:${port}/api`);
    }
});