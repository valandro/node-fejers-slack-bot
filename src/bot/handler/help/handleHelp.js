module.exports = (bot, params, channel) => {
    bot.postMessage(channel,
        ':fejers: *BOT QUE DALE!* :fejers:\n\n' 
        + 'Segue abaixo a lista de todos os comandos que o *@botquedale* entende:\n' 
        + '`hino` Peça para o bot cantar o hino da única federa que dale!\n'
        + '`ps` Sugere alguns links relacionados com Processo Seletivo.\n'
        + '`pe` Sugere alguns links relacionados com Planejamento Estratégico.\n'
        + 'Se você tiver alguma sugestão ou encontrou algum bug, fale com *@valandro.*\n', 
        params);
}