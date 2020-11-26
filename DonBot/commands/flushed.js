module.exports = {
    name: "flushed",
    description: 'This is a holder for command creations',
    execute(message, args) {
        return message.channel.send("balls on your face :flushed:");
    },
};