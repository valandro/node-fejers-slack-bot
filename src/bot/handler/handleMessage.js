const handlePrivateMessage = require('./handlePrivateMessage');
const handlePublicMessage = require('./handlePublicMessage');

module.exports = (data, bot, params) => {
    const privateMessage = /D([a-zA-Z]|[0-9])*/g;
    const channel = data.channel;
    if(privateMessage.test(channel)) {
        handlePrivateMessage(data,bot,params);
    } else {
        handlePublicMessage(data,bot,params);
    }
}