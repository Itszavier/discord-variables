<!-- @format -->

<center><img align='center' style='margin: auto; width: 90%;' src='/assets/github-header-image (1).png' alt='image'/></center>

Streamline Discord bot development with discordjs-variables, a powerful npm module built on Discord.js. Easily create dynamic Discord variables and enhance bot interactions effortlessly. Perfect for developers looking to simplify Discord bot programming while adding exciting new features.

**version 4.0.0**:
The `discordjs-variables` package has been significantly enhanced to support a broader range of Discord.js events with improved syntax, making it even easier for developers to integrate it into their production-grade applications. Key improvements include:

- **Expanded Event Support**: Almost all Discord.js events are now supported, providing comprehensive coverage for various use cases.
- **Simplified Syntax**: The syntax has been refined to include type support, enabling faster development and reducing potential errors.
- **Unified Parse Function**: A single, powerful parse function simplifies event handling and ensures a consistent approach across your application.

These enhancements are designed to streamline the development process, allowing you to focus on building robust and scalable Discord bots with minimal friction.

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

## Installation

To install the necessary dependencies, run the following command:

```
npm i discordjs-variables
```

with the new version 3 its pretty simple to use with more features and events added check out [change logs](#change logs) to see a comparson

## Usage

```js
const { Transformer, createRule, RuleStore }= require("discordjs-variables"); |
import { Client } from "discord.js";

const rules = new RuleStore([
  createRule("{username}", "messageCreate", (message) => {
    return message.author.id;
  }),

  createRule("{name}", "messageCreate", (message) => {
    return message.author.displayName;
  }),
]);

const bot = new Client({ intents: ["MessageContent", "Guilds", "GuildMessages"] });

// initlize the transformer class with the rules of dynamic variables
const transformer = new Transformer({ collection: [rules] });

bot.on("messageCreate", (message) => {
  if (!message.author.bot) {
    return;
  }

  const content = message.content;
  const parsedContent = transformer.parse(content, "messageCreate", message);

  message.channel.send({ content: parsedContent });

  /**
   * @john23: name {username},
   * bot: name @john23
   * */
});

bot.login("your token");

```

## changeLogs

- latest version of `discordjs` version 14.15.3
