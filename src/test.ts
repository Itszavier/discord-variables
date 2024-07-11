/** @format */
import { Client } from "discord.js";
import { Transformer, RuleStore, createRule } from "./index";

const rules = new RuleStore([

  createRule("{username}", "interactionCreate", (interaction) => {
    return interaction.member?.user.username;
  }),
]);

const bot = new Client({ intents: ["MessageContent", "Guilds", "GuildMessages"] });

// initlize the transformer class with the rules of dynamic variables
const transformer = new Transformer({
  collection: new RuleStore([]),
});

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
