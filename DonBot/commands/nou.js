module.exports = {
    name: "nou",
    description: 'This is a holder for command creations',
    execute(message, args) {
        return message.channel.send("no u");
    },
};