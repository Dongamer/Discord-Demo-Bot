module.exports = {
    name: "love",
    description: 'Let the bot hang you some love',
    execute(message, args) {
        return message.channel.send('*Hugs*');
    },
};