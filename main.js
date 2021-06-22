const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Robert is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 

    if(command === 'fc'){
        client.commands.get('fc').execute(message, args);
    } 

    if(command === 'welcome'){
        client.commands.get('welcome').execute(message, args);
    } 

    if(command === 'rps'){
        client.commands.get('rps').run(client, message, args);
    } 
});

/*should be last line of file*/
client.login('ODU2NDcxMjExMjM5NTM4Njg4.YNBg-Q.jcVLqmyEv3M2_zJCL0zVQZtrhwU');
