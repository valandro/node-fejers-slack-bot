const handleAnthem = require('./handleAnthem');

module.exports = (data, bot, params) => {
    const anthem = /hino/g;
    const msg = data.text;

    bot.getUserId('botquedale')
       .then((botId) => {
            const anthemRe = new RegExp('<@' + botId + '> hino', 'g');
            if(anthemRe.test(msg)) {
                handleAnthem(bot, params, data.channel);
            }
       });
}