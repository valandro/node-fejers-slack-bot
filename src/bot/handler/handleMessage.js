const handleAnthem = require('./handleAnthem');

module.exports = (data, bot, params) => {
    const anthemRe = /<@([0-9]|[a-zA-Z])*> hino/g;
    const msg = data.text;
    if(anthemRe.test(msg)) {
        handleAnthem(data,bot,params);
    }
}