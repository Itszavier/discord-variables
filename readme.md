<!-- @format -->
<center><img align='center' style='margin: auto; width: 90%;' src='/assets/github-header-image (1).png' alt='image'/></center>



## discordjs-variables

Streamline Discord bot development with `discordjs-variables`, a powerful npm module built on Discord.js. Easily create dynamic Discord variables and enhance bot interactions effortlessly. Perfect for developers looking to simplify Discord bot programming while adding exciting new features.

### Version 3.0.0

The `discordjs-variables` package has been significantly enhanced to support a broader range of Discord.js events with improved syntax, making it even easier for developers to integrate into their production-grade applications. Key improvements include:

- **Expanded Event Support:** Almost all Discord.js events are now supported, providing comprehensive coverage for various use cases.
- **Simplified Syntax:** The syntax has been refined to include type support, enabling faster development and reducing potential errors.
- **Unified Parse Function:** A single, powerful parse function simplifies event handling and ensures a consistent approach across your application.

These enhancements streamline the development process, allowing you to focus on building robust and scalable Discord bots with minimal friction.

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Explanation](#explanation)
4. [Examples](#examples)
   - [RuleStore](#rulestore)
   - [Transformer](#transformer)
5. [Change Logs](#change-logs)
6. [Further Information](#further-information)

---

## Installation

To install `discordjs-variables` and its dependencies, run the following command:

```bash
npm install discordjs-variables
```

---

## Usage

### Example Setup

```javascript
const { Transformer, createRule, RuleStore } = require("discordjs-variables");
const { Client } = require("discord.js");

// Define rules
const rules = new RuleStore([
  createRule("{username}", "messageCreate", (message) => {
    return message.author.id;
  }),

  createRule("{name}", "messageCreate", (message) => {
    return message.author.displayName;
  }),
]);

// Initialize Discord client
const bot = new Client({ intents: ["MessageContent", "Guilds", "GuildMessages"] });

// Initialize Transformer with rules
const transformer = new Transformer({ collection: [rules] });

// Handle messageCreate event
bot.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const content = message.content;
  const parsedContent = transformer.parse(content, "messageCreate", message);

  message.channel.send(parsedContent);
});

// Log in to Discord
bot.login("your token");
```

---

## Explanation

### `createRule(identifier: string, event: keyof EventTypes, handler: Function): Rule`

- **Purpose:** Creates a transformation rule for replacing placeholders in Discord bot messages.
- **Parameters:**
  - `identifier`: Placeholder identifier (e.g., `{username}`).
  - `event`: Discord.js event type (e.g., `"messageCreate"`).
  - `handler`: Function handling the event to return the replacement value.
- **Returns:** A `Rule` object defining the transformation rule.

---

### `RuleStore(rules: Rule[]): RuleStore`

- **Purpose:** Manages multiple transformation rules for Discord bot messages.
- **Parameters:**
  - `rules`: Array of `Rule` objects.
- **Returns:** A `RuleStore` instance for organizing and applying rules.

---

### `Transformer(options: TransformerOptions): Transformer`

- **Purpose:** Parses Discord bot messages and applies transformation rules.
- **Parameters:**
  - `options`: Configuration options for initializing the Transformer.
    - `collection`: Array of `RuleStore` instances containing rules.
- **Returns:** A `Transformer` instance configured with specified rules.

---

## Examples

### RuleStore

The `RuleStore` class was created to offer the ability to organize all of your rules for your dynamic Discord variables. It offers types to some extent. However, when you add more rules of different types, you may lose all TypeScript types and encounter errors. To solve this problem, the `createRule` helper function was created.

Example without `createRule`:

```ts
const rules = new RuleStore([
  {
    identifier: "{username}",
    event: "interactionCreate",
    definition: (interaction) => {
      return interaction.member?.user.username;
    },
  },
]);
```

Example with `createRule` to maintain TypeScript types:

```ts
const rules = new RuleStore([
  createRule("{username}", "interactionCreate", (interaction) => {
    return interaction.member?.user.username;
  }),
]);
```

---

### Transformer

The `Transformer` does exactly what it sounds like: it contains methods for parsing strings. This class is responsible for parsing variables efficiently and effectively.

```ts
const transformer = new Transformer({
  collection: new RuleStore([]),
});
```

or...

```ts
const transformer = new Transformer({
  collection: [new RuleStore([]), new RuleStore([])],
});
```

To parse a string:

```ts
transformer.parse("[string to parse]", "[The Event type]", eventObject);
```

For more complex parsing:

```ts
transformer.parse(text, "eventType", eventObject1, eventObject2, etc...);
```

Unlike in version 2, where the package was not fully stable or completed, the parser in the current version now uses regex to handle string parsing behind the scenes. This ensures it will always match an identifier, no matter how complex it is within the string.

---

## Change Logs

### Latest Version: discordjs-variables v3.0.0

In version 3, the `Converter` class was removed and replaced by the `Transformer` class to make the package more scalable. The previous `Converter` class had all the event parsers defined as methods, which was hard to manage. The new `Transformer` class features a powerful single parsing method, streamlining the parsing process and enhancing maintainability.

For more detailed information on the changes, visit the [changelog on GitHub](https://github.com/Itszavier/discord-variables/blob/main/CHANGELOG.md).


## Further Information

For more details and advanced usage, please refer to the [GitHub repository](https://github.com/Itszavier/discord-variables).

