module.exports = {
    name: "hello",
    description: 'Greet the bot',
    execute(message, args) {
        if(!args.length) {
            return message.channel.send('Why hello there ***Tips hat***');
        } else if(args[0] === "pog") {
            return message.channel.send('**cums** :flushed: St-Stop it');
        } else {
            return message.channel.send(`Why hel- Wait what the hell is ***${args}*** \n Trying to fight huh?`);
        }
    },
};