const handleTopicMessage = require('./handleTopicMessage');

module.exports = (bot, params, channel, db, topicId) => {
    db.collection('bot').find({ 'topic.id': topicId }).toArray(function(err, info) {
        if(err) console.log(err);
        handleTopicMessage(bot, params, channel, info);
    });
}
