const handleAnthem = require('./handleAnthem');

module.exports = (data, bot, params) => {
    const anthemRe = /hino/g;
    const msg = data.text;
    if(anthemRe.test(msg)) {
        handleAnthem(bot, params, data.channel);
    }
}