"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @format */
const discord_js_1 = require("discord.js");
const index_1 = require("./index");
const rules = new index_1.RuleStore([
    (0, index_1.createRule)("{username}", "messageCreate", (message) => {
        return message.author.id;
    }),
    (0, index_1.createRule)("{name}", "messageCreate", (message) => {
        return message.author.displayName;
    }),
]);
const bot = new discord_js_1.Client({ intents: ["MessageContent", "Guilds", "GuildMessages"] });
// initlize the transformer class with the rules of dynamic variables
const transformer = new index_1.Transformer({ collection: [rules] });
bot.on("messageCreate", (message) => {
    if (!message.author.bot) {
        return;
    }
    const text = message.content;
    const parsedContent = transformer.parse(text, "messageCreate", message);
    message.channel.send({ content: parsedContent });
    /**
     * @john23: name {username},
     * bot: name @john23
     * */
});
bot.login("your token");
