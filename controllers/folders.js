const { getFolders } = require("../actions/folders");

const getFoldersCtrl = async (req, res) => {
    try {
        const { accessToken } = req
        const folders = await getFolders(accessToken);
        res.json(folders);
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(500).send(error);
    }
}

module.exports = {
    getFoldersCtrl
}