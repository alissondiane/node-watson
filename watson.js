const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
    version: '2020-04-01',
    authenticator: new IamAuthenticator({
      apikey: 'g0fVWh5O2BgBY5tVU35UwH-CKLOQD3G1-fOvOoahye82',
    }),
    serviceUrl: 'https://api.us-south.assistant.watson.cloud.ibm.com',
    disableSslVerification: true
});


function conectarWatson(){
    console.log(assistant);
}