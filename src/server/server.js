
const express = require('express'); 
const cors = require('cors');
//const twilio = require('twilio'); 


const accountSid = 'ENTER_YOUR_ACCOUNT_SID';
const authToken = 'ENTER_YOUR_AUTHTOKEN'; 
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
