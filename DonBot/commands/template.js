module.exports = {
    name: "template",
    description: 'This is a holder for command creations',
    execute(message, args) {
        return message.channel.send('Testing...');
    },
};