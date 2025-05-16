const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

module.exports = async function detectIntent(text, sessionId = uuid.v4()) {
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.projectAgentSessionPath(process.env.DIALOGFLOW_PROJECT_ID, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: text,
        languageCode: 'en-US'
      }
    }
  };

  const responses = await sessionClient.detectIntent(request);
  return responses[0].queryResult;
};
