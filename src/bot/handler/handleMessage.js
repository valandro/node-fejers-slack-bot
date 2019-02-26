module.exports = (data, bot, params) => {
    const re = /<@([0-9]|[a-zA-Z])*> hino/g;
    const msg = data.text;
    if(re.test(msg)) {
        bot.getChannelById(data.channel)
            .then((channelInfo) => {
                bot.postMessageToChannel(channelInfo.name,
                    ':flag-at: *ALENTO DA FEJERS*  :flag-at:\n' 
                    + 'Sul Sul Sul Sul Sul Sul Sul Sul\n' 
                    + 'Eu sou do Sul!\n'
                    + 'É só olhar pra ver que eu sou do sul!\n'
                    + 'Minha federa tem EJ afu!\n'
                    + 'Ôôô\n'
                    + 'É só olhar e veeeer\n'
                    + 'Êêêê\n'
                    + 'Eu sou FEJERS e bato meta né tchê!!\n'
                    + 'Federação que DALE, vamo cantar!!\n'
                    + 'Cuia na mão e resultado,\n'
                    + 'E o mate vamos tomaaar!!!\n'
                    + 'Eu sou FEJERS e todo ano eu sou alto impacto!\n'
                    + 'Na pilhadeira de pila em pila faturamos mais!\n'
                    + 'A gurizada afudê desse movimento!\n'
                    + 'Se eu pudesse não deixava a FEJERS jamais!!\n'
                    + 'Eu sou FEJERS e bato meta né tchê!!\n'
                    + 'Federação que DALE, vamo cantar!!\n'
                    + 'Cuia na mão e resultado,\n'
                    + 'E o mate vamos tomaaar!!!\n'
                    + '*BAH, TCHÊ! A FEJERS É AFUDÊ!*'
                    , params);
            });
    }
}