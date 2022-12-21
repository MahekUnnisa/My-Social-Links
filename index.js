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
app.use('/static', express.static('static'))

app.get('/',(req,res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, 'index.html'));

})
