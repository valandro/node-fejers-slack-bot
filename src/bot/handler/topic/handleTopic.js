const handleTopicMessage = require('./handleTopicMessage');
const MongoClient = require('mongodb').MongoClient;

module.exports = (bot, params, channel, topicId) => {
    MongoClient.connect(process.env.MONGO_URI, 
        { useNewUrlParser: true }, function(err, client) {
            if(err) console.log(err);
            const db = client.db('fejers');
            db.collection('bot').find({ 'topic.id': topicId }).toArray(function(err, info) {
                if(err) console.log(err);
                handleTopicMessage(bot, params, channel, info);
            });
            client.close();
    });
}
