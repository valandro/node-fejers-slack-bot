module.exports = (bot, params, channel, info) => {
    let message;
    if(info.length == 0) {
        message = 'Não existem links cadastrados sobre esse assunto.';
    } else {
        message = 'Segue abaixo alguns links sobre: `' + info[0].topic.descrp + '`\n';
        info.forEach(function(data) {
            message += '*' + data.descrp + '*\n' + data.link + '\n';
        });
    }

    bot.postMessage(channel, message, params);
}