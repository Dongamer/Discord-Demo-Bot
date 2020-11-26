module.exports = {
    name: "ban",
    description: 'This is a holder for command creations',
    execute(message, args) {
        const taggedUser = message.mentions.users.first();
        message.channel.send(`Is \\"${taggedUser}\\" acting sus?`);
        return;
    },
};