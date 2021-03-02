
const express = require('express'); 
const cors = require('cors');
//const twilio = require('twilio'); 
let PORT = process.env.PORT || 4000;

const accountSid = 'ACf2aa3b29410724332eed7815327f596c';
const authToken = 'c919c545554342bfbde9d96162470569'; 
var twilio = require("twilio");
const client = new twilio(accountSid, authToken);

const app = express(); 

app.use(cors()); 

app.get('/', (req, res) => {
    res.send('Welcome to express server')
})

app.get('/send-text', (req, res) => {
    //Welcome Message
    
    const { recipient, textmessage } = req.query;


    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: '+12898056176' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))
