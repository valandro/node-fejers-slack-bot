const handleAnthem = require('../anthem/handleAnthem');
const handleTopic = require('../topic/handleTopic');
const handleHelp = require('../help/handleHelp');
const TopicEnum = require('../../enum/TopicEnum');

module.exports = (data, bot, params) => {
    const msg = data.text;
    bot.getUserId('botquedale')
       .then((botId) => {
            const anthemRe = new RegExp('<@' + botId + '> (H|h)ino', 'g');
            const bjRe = new RegExp('<@' + botId + '> (B|b)(J|j)', 'g');
            const peRe = new RegExp('<@' + botId + '> (P|p)e', 'g');
            const contRe = new RegExp('<@' + botId + '> (C|c)ontratos', 'g');
            const resRe = new RegExp('<@' + botId + '> (R|r)esultados', 'g');
            const servRe = new RegExp('<@' + botId + '> (S|s)ervi(ç|c)os', 'g');
            const teamRe = new RegExp('<@' + botId + '> (T|t)ime', 'g');
            const venRe = new RegExp('<@' + botId + '> (V|v)endas', 'g');
            const projRe = new RegExp('<@' + botId + '> (P|p)rojetos', 'g');
            const psRe = new RegExp('<@' + botId + '> (P|p)s', 'g');
            const manRe = new RegExp('<@' + botId + '> (G|g)est(a|ã)o', 'g');
            const leaRe = new RegExp('<@' + botId + '> (L|l)ideran(ç|c)a', 'g');
            const straRe = new RegExp('<@' + botId + '> (E|e)strat(é|e)gia', 'g');
            const govRe = new RegExp('<@' + botId + '> (G|g)overnan(ç|c)a', 'g');
            const helpRe = new RegExp('<@' + botId + '> ((H|h)elp|(A|a)juda)', 'g');
            if(anthemRe.test(msg)) {
                handleAnthem(bot, params, data.channel);
            } else if(bjRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['bj']);
            } else if(peRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['pe']);        
            } else if(contRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['contratos']);                
            } else if(resRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['resultados']);                         
            } else if(servRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['servicos']);                         
            } else if(teamRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['time']);                         
            } else if(venRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['vendas']);                         
            } else if(projRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['projetos']);                         
            } else if(psRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['ps']);                         
            } else if(manRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['gestao']);                         
            } else if(leaRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['lideranca']);                         
            } else if(straRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['estrategia']);                         
            } else if(govRe.test(msg)) {
                handleTopic(bot, params, data.channel, TopicEnum['governanca']);                         
            } else if(helpRe.test(msg)) {
                handleHelp(bot, params, data.channel);
            }
       });
}