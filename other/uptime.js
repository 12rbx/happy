const Utils = require("../../modules/utils");

module.exports = {
    name: "uptime",
    run: async (bot, messageOrInteraction, args, { reply }) => {
        reply(Utils.setupMessage({
            configPath: Utils.variables.embeds.Embeds.Uptime,
            variables: [
                ...Utils.userVariables(bot, "1013948322693791856"),
                { searchFor: /{uptime}/g, replaceWith: Utils.DDHHMMSSfromMS(bot.uptime, false) }
            ]
        }));
    },
    description: "View the uptime of the bot",
    usage: "uptime",
    aliases: [],
    arguments: []
};
// BlackKarma | DirectLeaks