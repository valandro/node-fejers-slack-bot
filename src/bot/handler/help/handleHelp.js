module.exports = (bot, params, channel) => {
    bot.postMessage(channel,
        ':fejers: *BOT QUE DALE!* :fejers:\n\n' 
        + 'Segue abaixo a lista de todos os comandos que o *@botquedale* entende:\n' 
        + '`hino` Peça para o bot cantar o hino da única federa que dale!\n'
        + '`bj` Sugere alguns links relacionados ao Portal da Brasil Júnior.\n'        
        + '`pe` Sugere alguns links relacionados com o PE da rede.\n'
        + '`contratos` Sugere alguns links relacionados com Contratos.\n'
        + '`resultados` Sugere alguns links relacionados com Resultados da Minha EJ e da Rede.\n'
        + '`servicos` Sugere alguns links relacionados com Serviços das EJs da Rede.\n'
        + '`time` Sugere alguns links relacionados ao Engajamento de Time.\n'
        + '`vendas` Sugere alguns links relacionados com Vendas.\n'
        + '`projetos` Sugere alguns links relacionados com Gerenciamento de Projetos.\n'
        + '`ps` Sugere alguns links relacionados com Processo Seletivo.\n'
        + '`gestao` Sugere alguns links relacionados com Sistema de Gestão.\n'
        + '`lideranca` Sugere alguns links relacionados à Formação de liderença.\n'
        + '`estrategia` Sugere alguns links relacionados à Estratégia FEJERS.\n'
        + '`governanca` Sugere alguns links relacionados à Governança FEJERS.\n\n'
        + '\n\n\nTem alguma sugestão ou encontrou algum bug? Fale com *@valandro.*\n', 
        params);
}