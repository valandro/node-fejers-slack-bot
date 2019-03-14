const handleAnthem = require('../anthem/handleAnthem');
const handleTopic = require('../topic/handleTopic');

module.exports = (data, bot, params, client) => {
    const anthemRe = /hino/g;
    const peRe = /pe(?!.)/g;
    const psRe = /ps(?!.)/g;
    const msg = data.text;
    const db = client.db('fejers');
    if(anthemRe.test(msg)) {
        handleAnthem(bot, params, data.channel);
    } else if(psRe.test(msg)) {
        db.collection('bot').find({'topic.id': '2'}).toArray(function(err, info) {
            if(err) console.log(err);
            handleTopic(bot, params, data.channel, info);
        });  
    } else if(peRe.test(msg)) {
        db.collection('bot').find({'topic.id': '3'}).toArray(function(err, info) {
            if(err) console.log(err);
            handleTopic(bot, params, data.channel, info);
        });  
    }
}