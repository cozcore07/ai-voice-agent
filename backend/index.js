require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilioWebhook = require('./twilioWebhook');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/twilio/voice', twilioWebhook);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
