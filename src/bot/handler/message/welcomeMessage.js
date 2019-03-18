module.exports = (data, bot, params) => {
    bot.getUserId('botquedale')
            .then((botId) => {
                bot.getChannelById(data.channel)
                    .then((channel) => {
                        if(data.user == botId) {
                                bot.postMessageToChannel(channel.name, 
                                    'Olá, eu sou o *@botquedale*!\n' 
                                    + 'O bot oficial da FEJERS para o Slack :slack:\n'
                                    + 'Eai, vocês devem estar se perguntando o quê eu faço\n'
                                    + 'Por enquanto, já me ensinaram algumas coisinhas, entre elas ... *O HINO* :heart: :yellow_heart: :green_heart:\n'
                                    + '*@botquedale hino*', params);
                            }
                    });
            });
}