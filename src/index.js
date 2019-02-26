const SlackBot = require('slackbots');

const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'botquedale'
});

// Welcome message
bot.on('start', () => {
    const params = {
        icon_emoji: ':fejers:'
    };
    bot.postMessageToChannel('general', 'Olá, eu sou o *@botquedale*!\n' 
                            + 'O bçot oficial da FEJERS para o Slack :slack:\n', params);
});