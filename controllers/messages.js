const { readEmails, getEmailInfo } = require("../actions/messages");

const getMessagesCtrl = async (req, res) => {

    try {
        const { accessToken } = req;
        const emails = await readEmails(accessToken);
        res.json(emails);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(500).send(error);
    }
}


const getMessageInfoCtrl = async (req, res) => {
    const {id} = req.params
    try {
        const { accessToken } = req;
        const email = await getEmailInfo(id, accessToken);
        res.json(email);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(500).send(error);
    }
}

module.exports = {
    getMessagesCtrl,
    getMessageInfoCtrl
}