const handleAnthem = require('../anthem/handleAnthem');
const handleTopic = require('../topic/handleTopic');
const handleHelp = require('../help/handleHelp');

module.exports = (data, bot, params, client) => {
    const anthemRe = /(H|h)ino(?!.)/g;
    const peRe = /(P|p)e(?!.)/g;
    const psRe = /(P|p)s(?!.)/g;
    const helpRe = /((H|h)elp|(A|a)juda)(?!.)/g;
    const teamRe = /(T|t)ime(?!.)/g; 
    const capRe = /(C|c)apacita(ç|c)(a|ã)o(?!.)/g;
    const msg = data.text;
    const db = client.db('fejers');
    if(anthemRe.test(msg)) {
        handleAnthem(bot, params, data.channel);
    } else if(capRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, '0');
    } else if(teamRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, '1');
    } else if(psRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, '2');
    } else if(peRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, '3'); 
    } else if(helpRe.test(msg)) {
        handleHelp(bot, params, data.channel);
    }
}