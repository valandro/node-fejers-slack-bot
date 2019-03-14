const handleAnthem = require('../anthem/handleAnthem');

module.exports = (data, bot, params, client) => {
    const anthemRe = /hino/g;
    const msg = data.text;
    if(anthemRe.test(msg)) {
        handleAnthem(bot, params, data.channel);
    }
}