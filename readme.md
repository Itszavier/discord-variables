<!-- @format -->

<center><img align='center' style='margin: auto; width: 90%;' src='/assets/github-header-image (1).png' alt='image'/></center>

---

## discordjs-variables

Streamline Discord bot development with `discordjs-variables`, a powerful npm module built on Discord.js. Easily create dynamic Discord variables and enhance bot interactions effortlessly. Perfect for developers looking to simplify Discord bot programming while adding exciting new features.

### Version 3.0.0

The `discordjs-variables` package has been significantly enhanced to support a broader range of Discord.js events with improved syntax, making it even easier for developers to integrate into their production-grade applications. Key improvements include:

- **Expanded Event Support:** Almost all Discord.js events are now supported, providing comprehensive coverage for various use cases.
- **Simplified Syntax:** The syntax has been refined to include type support, enabling faster development and reducing potential errors.
- **Unified Parse Function:** A single, powerful parse function simplifies event handling and ensures a consistent approach across your application.

These enhancements streamline the development process, allowing you to focus on building robust and scalable Discord bots with minimal friction.

### Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Change Logs](#change-logs)

---

### Installation

To install `discordjs-variables` and its dependencies, run the following command:

```bash
npm install discordjs-variables
```

### Usage

#### Example Setup

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
# Explanation
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

**Explanation:**

- **`createRule`:** Defines how placeholders in Discord messages (`identifier`) are replaced based on Discord events (`event`). A handler function (`handler`) processes events to determine replacement values.

- **`RuleStore`:** Stores and manages `Rule` objects, facilitating efficient organization and manipulation of transformation rules.

- **`Transformer`:** Parses messages using defined `RuleStore` instances, replacing placeholders with actual values as per configured rules.

This format provides a clear and concise overview of each function's purpose, parameters, and return values, making it easier to understand their roles within Discord bot development using `discordjs-variables`.

### Change Logs

**Latest Version:** discordjs version 14.15.3

For detailed changes and updates, refer to the [change logs](#change-logs).

---

This structured documentation provides clear instructions on installation, usage examples, and where to find further details about recent changes in the package. Adjust and expand on this template based on specific features and additional information relevant to `discordjs-variables` and its integration with Discord.js.
