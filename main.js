//Pede acesso ao pacote do discord
const Discord = require("discord.js") ;


// Configurações do Bot 
const { prefix, token } = require('./config.json');

//Cria um novo cliente do discord
const client = new Discord.Client() ;


 

// Se o cliente tiver pronto esse comando sera realizado
// Uma vez somente após o login
client.once("ready", () => {
	console.log('A Batalha vai começar !');
});

client.on('message', message => {

    if (message.content.startsWith(`${prefix}ping`)) {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    } else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send('Boop.');
    } else if (message.content === `${prefix}Meus Dados`) {
        message.channel.send(`Seu nome: ${message.author.username}\nYour ID: ${message.author.id}`);
    }

    
    
});











client.login(token);
