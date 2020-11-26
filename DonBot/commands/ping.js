/* eslint-disable no-unused-vars */
module.exports = {
    name: "ping",
    description: "This command is only used to test the bot\\'s functionality",
    execute(message, args) {
        return message.channel.send('Pong!');
    },
};