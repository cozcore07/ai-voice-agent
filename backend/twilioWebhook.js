const twilio = require('twilio');
const { getAvailableSlots, bookAppointment } = require('./praktikaService');

const VoiceResponse = twilio.twiml.VoiceResponse;

module.exports = async function (req, res) {
  const twiml = new VoiceResponse();

  // Initial greeting
  const gather = twiml.gather({
    input: 'speech',
    timeout: 5,
    speechTimeout: 'auto',
    action: '/twilio/process-speech',
    method: 'POST'
  });

  gather.say('Welcome to Smile Dental Clinic. Please tell us your preferred appointment day and time.');

  res.type('text/xml');
  res.send(twiml.toString());
};
