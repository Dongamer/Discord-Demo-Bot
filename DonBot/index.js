const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const cmdsFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const {
    prefix,
    token,
    bot_age,
    fun_words,
    bot_info,
} = require('./config.json');

client.once('ready', () => {
    console.log(prefix);
    console.log(bot_age);
    fun_words.forEach(word => {
        console.log(word);
    });
    console.log(bot_info.version);
});

client.login(token);

for(const file of cmdsFiles) {
    const cmd = require(`./commands/${file}`);
    client.commands.set(cmd.name, cmd);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;
    const cmd = client.commands.get(command);

    try{
        cmd.execute(message, args);
    } catch(error) {
        console.log(error);
        message.reply('Interal issue with executing command... **cums** :flushed: ');
    }
    /*
    message.channel.send(`Nothing happen, the command you gave me isn't anything I know... dumbass 
    \nCommand Given: **${command}** 
    \nArguments Given: **${args}**`);
    */
});
