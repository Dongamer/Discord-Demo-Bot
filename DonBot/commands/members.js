module.exports = {
    name: "online",
    description: 'Provoke the bot',
    execute(message, args) {
        return message.channel.send(`Total minorities: ***${message.guild.memberCount}***`);
    },
};