const express= require('express');
const app= express();

app.get('/', (req,res)=>{
    res.send('this is the output');
});

app.listen(5000, ()=>{
    console.log("App listing to http://localhost:5000");
})