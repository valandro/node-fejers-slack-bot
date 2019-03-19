const handlePrivateMessage = require('./handlePrivateMessage');
const handlePublicMessage = require('./handlePublicMessage');

module.exports = (data, bot, params, client) => {
    const privateMessage = /D([a-zA-Z]|[0-9])*/g;
    const channel = data.channel;
    if(privateMessage.test(channel)) {
        handlePrivateMessage(data, bot, params, client);
    } else {
        handlePublicMessage(data, bot, params, client);
    }
}