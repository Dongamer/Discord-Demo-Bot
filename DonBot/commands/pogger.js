module.exports = {
    name: "pogger",
    description: 'This is a holder for command creations',
    execute(message, args) {
        return message.channel.send("***poggers***");
    },
};