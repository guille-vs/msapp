const { request } = require("express");

const signin = async (req = request, res) => {
    const authCodeUrlParameters = {
        scopes: ['user.read', 'mail.read'],
        redirectUri: process.env.REDIRECT_URI,
    };

    try {
        const authCodeUrl = await req.app.locals.msalClient.getAuthCodeUrl(authCodeUrlParameters);

        res.redirect(authCodeUrl);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(500).send(error);
    }
}

const redirect = async (req = request, res) => {
    const tokenRequest = {
        code: req.query.code,
        scopes: ['user.read', 'mail.read'],
        redirectUri: process.env.REDIRECT_URI,
    };

    try {
        const response = await req.app.locals.msalClient.acquireTokenByCode(tokenRequest);
        res.send(response.accessToken);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(500).send(error);
    }
}

module.exports = {
    signin,
    redirect
}