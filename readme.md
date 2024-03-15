# introduction

 **discordjs-variables** is a package that makes it super easy to create custom variables for your discord bot. 

If you don't know what I am talking about view the images below for examples.

 This package is built on top of `discord.js` so only use this if your bot is using the `discord.js` framework .


```bash
npm install discordjs-variables
```
install discord.js

```bash
npm install discord.js
```

## How To use

Create a `converter` are `rule` file to store the converter object and the rules for your custom variables

```ts
import {Converter, Rules} from "discordjs-variables"

// create new variables here
const rules = new Rules([
  { 
    identifier: "{username}",  
    eventType: "message",
    definition: (e) => e.user.username;
  }
])

// initialize your converter then pass your variables down
const converter = new Converter(rules);

// export it
export default converter
```


Then, integrate it into your project how you use it is up to you

```ts
import { Client, GatewayIntentBits } from 'discord.js';
import converter from "./converter.js" // imports the converter

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.on('messageCreate', async message => {
 message.reply(converter.parseOnMessage(message, "{username}, you just send a message "))  // JackWilder, you just send a message
});

client.login(TOKEN);
```


# Rules class
The Rules class gives you the ability to create custom discord variables, The . `Rules` class takes an **Array** of **objects** as **param**, Each containing   the following keys 
 
| Key | Description | Type | 
|--|--| -- |
|  `identifier` |  This is the `variable` name, The parser will search a string then replace the identifier with the return value of `definition` function | `string` |
| `eventType`  | The Discord Client event the variable is meant for. Note you can only use the parser associated with the event type to parse it |  `EventShortHand`|
| `definition`| Allows you to add meaning to the identifier, what ever the return value of this function is it will replace the identifier that is found in a string|`(e: any) => string | number`|

## Converter Methods

The `converter` class  contains methods with different ways to parse a string based on a `discord.js` client event. *(Am working on a single parse method)*

| **Method**| **Description** | **Type**| 
|--|--|--| 
| `parseOnMessage()` | Parse strings in the `messageCreate` event  | `(event: Message, text: string) => string` | 
| `parseOnMemberJoin()` | Parse strings in the `messageCreate` event  | `(event: GuildMember, text: string) => string` | 



