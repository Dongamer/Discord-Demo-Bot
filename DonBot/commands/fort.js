module.exports = {
    name: "fortnite",
    description: 'This is a holder for command creations',
    execute(message, args) {
        return message.channel.send(`I know who you are ***${message.author.username}*** \n I can find where you live :eyes:`);
    },
};