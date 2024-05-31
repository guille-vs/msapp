async function getFolders(accessToken){
    const endpoint = 'https://graph.microsoft.com/v1.0/me/mailFolders';
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(endpoint, options);
        const data = await response.json();
        return data.value ? data.value : 'No folders found';
    } catch (error) {
        console.error('Error fetching forlders:', error);
        throw error;
    }
}

module.exports = {
    getFolders
}