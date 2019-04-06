const SlackBot = require('slackbots');
const handleMessage = require('./bot/handler/message/handleMessage');
const welcomeMessage = require('./bot/handler/message/welcomeMessage');

const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'botquedale'
});

const params = {
    icon_emoji: ':fejers:'
};

// Log errors
bot.on('error', err => { console.log('error', err); });

// Handle messages
bot.on('message', data => {
    if(data.type == 'member_joined_channel') {
        welcomeMessage(data,bot,params);
    } else {
        handleMessage(data,bot,params);
    }
});