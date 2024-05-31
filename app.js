require('dotenv').config();
const express = require('express');
const msal = require('@azure/msal-node');
const { getMessagesCtrl, getMessageInfoCtrl } = require('./controllers/messages');
const { getFoldersCtrl } = require('./controllers/folders');
const { validateAccessToken } = require('./middleware/validateAccessToken');
const { redirect, signin } = require('./controllers/auth');
const app = express();

const config = {
    auth: {
        clientId: process.env.OAUTH_APP_ID,
        authority: process.env.OAUTH_AUTHORITY,
        clientSecret: process.env.OAUTH_APP_SECRET
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        },
    },
};

app.locals.msalClient = new msal.ConfidentialClientApplication(config);

// Routes - Auth
app.get('/auth', signin);
app.get('/redirect', redirect);

// Routes msal api
app.get('/messages', validateAccessToken, getMessagesCtrl);
app.get('/messages/:id', validateAccessToken, getMessageInfoCtrl);
app.get('/folders', validateAccessToken, getFoldersCtrl);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    console.log('Please navigate to http://localhost:3000/auth to authenticate');
});
