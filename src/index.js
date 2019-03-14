const SlackBot = require('slackbots');
const handleMessage = require('./bot/handler/message/handleMessage');
const welcomeMessage = require('./bot/handler/message/welcomeMessage');
const MongoClient = require('mongodb').MongoClient;

const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'botquedale'
});

const params = {
    icon_emoji: ':fejers:'
};

MongoClient.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true }, function(err, client) {
    if(err) console.log('Cannot connect to MongoDB.');
    else console.log('Connected successfuly to MongoDB.');
    client.close();
});

// Log errors
bot.on('error', err => { console.log('error', err); });

// Handle messages
bot.on('message', data => {
    if(data.type == 'member_joined_channel') {
        welcomeMessage(data,bot,params);
    } else {
        MongoClient.connect(process.env.MONGO_URI, 
            { useNewUrlParser: true }, function(err, client) {
                if(err) console.log(err);
                else handleMessage(data,bot,params, client);
        })
    }
});