
const validateAccessToken = ( req, res, next) => {

    const accessToken = req.headers['access_token'];
    if (!accessToken) {
        res.json({
            msg: 'access token not found'
        })
        return;
    }
    req.accessToken = accessToken;

    next()
}

module.exports = {
    validateAccessToken
}