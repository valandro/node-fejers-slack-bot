const handleAnthem = require('../anthem/handleAnthem');
const handleTopic = require('../topic/handleTopic');
const handleHelp = require('../help/handleHelp');
const TopicEnum = require('../../enum/TopicEnum');

module.exports = (data, bot, params, client) => {
    const anthemRe = /(H|h)ino(?!.)/g;
    const bjRe = /(B|b)(J|j)(?!.)/g;
    const peRe = /(P|p)e(?!.)/g;
    const contRe = /(C|c)ontratos(?!.)/g;
    const resRe = /(R|r)esultados(?!.)/g;
    const servRe = /(S|s)ervi(ç|c)os(?!.)/g;
    const teamRe = /(T|t)ime(?!.)/g;
    const venRe = /(V|v)endas(?!.)/g;
    const projRe = /(P|p)rojetos(?!.)/g;
    const psRe = /(P|p)s(?!.)/g;
    const manRe = /(G|g)est(a|ã)o(?!.)/g;
    const leaRe = /(L|l)ideran(ç|c)a(?!.)/g;
    const straRe = /(E|e)strat(é|e)gia(?!.)/g;
    const govRe = /(G|g)overnan(ç|c)a(?!.)/g;
    const helpRe = /((H|h)elp|(A|a)juda)(?!.)/g; 
    const msg = data.text;
    const db = client.db('fejers');
    if(anthemRe.test(msg)) {
        handleAnthem(bot, params, data.channel);
    } else if(bjRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['bj']);
    } else if(peRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['pe']);        
    } else if(contRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['contratos']);                
    } else if(resRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['resultados']);                         
    } else if(servRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['servicos']);                         
    } else if(teamRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['time']);                         
    } else if(venRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['vendas']);                         
    } else if(projRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['projetos']);                         
    } else if(psRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['ps']);                         
    } else if(manRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['gestao']);                         
    } else if(leaRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['lideranca']);                         
    } else if(straRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['estrategia']);                         
    } else if(govRe.test(msg)) {
        handleTopic(bot, params, data.channel, db, TopicEnum['governanca']);                         
    } else if(helpRe.test(msg)) {
        handleHelp(bot, params, data.channel);
    }
}