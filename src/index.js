const SlackBot = require('slackbots');
const handleMessage = require('./bot/handler/handleMessage');

const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'botquedale'
});

const params = {
    icon_emoji: ':fejers:'
};

// Welcome message to channel
bot.on('message', data => {
    if(data.type == 'member_joined_channel') {
        bot.getUserId('botquedale')
                .then((botId) => {
                    bot.getChannelById(data.channel)
                        .then((channel) => {
                            if(data.user == botId) {
                                    bot.postMessageToChannel(channel.name, 
                                        'Olá, eu sou o *@botquedale*!\n' 
                                        + 'O bot oficial da FEJERS para o Slack :slack:\n'
                                        + 'Eai, vocês devem estar se perguntando o quê eu faço\n'
                                        + 'Por enquanto, só me ensinaram uma coisa ... *O HINO* :heart: :yellow_heart: :green_heart:\n'
                                        + '*@botquedale hino*', params);
                                }
                        });
        });
    }
});

bot.on('error', err => { console.log('error', err); });

// Handling messages
bot.on('message', data => {
    if(data.type !== 'message') {
        return;
    }
    handleMessage(data,bot,params);
});