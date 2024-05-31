async function readEmails(accessToken) {
    const endpoint = 'https://graph.microsoft.com/v1.0/me/messages';
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
        return data.value ? data.value : 'No emails found';
    } catch (error) {
        console.error('Error fetching emails:', error);
        throw error;
    }
}

const getEmailInfo = async (id,accessToken) => {
    const endpoint = `https://graph.microsoft.com/v1.0/me/messages/${id}`;
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
        
        return data.id ? data : 'No email found';
    } catch (error) {
        console.error('Error fetching emails:', error);
        throw error;
    }
}
const moveEmail = async (id,accessToken) => {
    const endpoint = `https://graph.microsoft.com/v1.0/me/messages/${id}`;
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: {
            "destinationId": id
        }
    };
    
    try {
        const response = await fetch(endpoint, options);
        const data = await response.json();
        
        return data.id ? data : 'No email found';
    } catch (error) {
        console.error('Error fetching emails:', error);
        throw error;
    }
}

module.exports = {
    readEmails,
    getEmailInfo,
    moveEmail
}