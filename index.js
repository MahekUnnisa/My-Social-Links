const express = require('express');
const app = express()
const PORT = 3000
const path = require('path')
//server
app.listen(PORT, (error) => {
    if(!error){
        console.log(`Server is listening on ${PORT}`)
    }
    else{
        console.log("Error Occured", error)
    }}
);
app.use('/',express.static('/'))
app.use(express.static('C:\DEV\Portfolio\AllLinks\style.css'))
//how to push static files in express?
app.get('/',(req,res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, 'index.html'));

})
