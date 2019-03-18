const handleAnthem = require('../anthem/handleAnthem');
const handleTopic = require('../topic/handleTopic');
const handleHelp = require('../help/handleHelp');

module.exports = (data, bot, params, client) => {
    const anthemRe = /hino(?!.)/g;
    const peRe = /pe(?!.)/g;
    const psRe = /ps(?!.)/g;
    const helpRe = /(help|ajuda)(?!.)/g; 
    const msg = data.text;
    const db = client.db('fejers');
    if(anthemRe.test(msg)) {
        handleAnthem(bot, params, data.channel);
    } else if(psRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, '2');
    } else if(peRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, '3'); 
    } else if(helpRe.test(msg)) {
        handleHelp(bot, params, data.channel);
    }
}