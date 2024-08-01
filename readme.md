Discord Variables is an open-source npm package that makes it easy to create customizable messages for your Discord bot. With this tool, you can use placeholders like `{{username}}` to automatically insert things like the user's name or mention them in your bot's messages.

This lets users personalize how the bot talks, making it more fun and interactive. By giving users control over the bot's messages, you can make your bot more enjoyable and user-friendly.# installation


## Installation

To install `discordjs-variables` and its dependencies, run the following command:

```bash
npm install discordjs-variables
```

A simpler breakdown:

### Code Simplified

```js
const { Transformer, createRule, RuleStore } = require("discordjs-variables");
const { Client, GatewayIntentBits } = require("discord.js");

// Define rules for replacing placeholders
const rules = new RuleStore([
  // Replace {username} with the author's ID
  createRule("{username}", "messageCreate", (message) => message.author.id),

  // Replace {name} with the author's display name
  createRule("{name}", "messageCreate", (message) => message.author.displayName),
]);

// Create and set up the Discord client
const bot = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

// Set up the Transformer with the rules
const transformer = new Transformer({ collection: [rules] });

// Handle new messages
bot.on("messageCreate", (message) => {
  if (message.author.bot) return; // Ignore bot messages

  // Transform the message content
  const parsedContent = transformer.parse(message.content, "messageCreate", message);

  // Send the transformed message
  message.channel.send(parsedContent);
});

// Log in to Discord
bot.login("your token");
```

### Examples

1. **Original Message**:
   ```
   Hello, {username}!
   ```
   **Context**: User ID `1234567890`

   **Transformed Message**:
   ```
   Hello, 1234567890!
   ```

2. **Original Message**:
   ```
   Hey {name}, welcome!
   ```
   **Context**: Display name `CoolUser`

   **Transformed Message**:
   ```
   Hey CoolUser, welcome!
   ```

### Explanation

- **Rules**: Define how to replace `{username}` and `{name}` with actual values.
- **Transformer**: Applies these rules to the message content.
- **Bot Behavior**: Listens for messages, transforms them, and sends the result back to the channel.




> [!TIP]  
> You can separate the the `RuleStore` class in a different file and export it if needed.
## Documentation

Click [here](https://github.com/Itszavier/discord-variables/wiki/) for documentation
