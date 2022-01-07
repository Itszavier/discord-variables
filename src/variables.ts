import { User } from "discord.js";

export const variables: Array<{ name?: string, description?: string, category?: string, }> = [
    { name: "{user}", description: "@mention the user that trigger the command", category: "member" },
    { name: "{username}", description: "The username of the user that trigger the command", category: "member" },
    { name: "{user_tag}", description: "example john#6787", category: "member" },
    { name: "{user_discrim}", description: "The user discriminater 4859", category: "member" },
    { name: "{user_id}", description: "The id of the user", category: "member" },
    { name: "{user_avatar}", description: "The user avater", category: "member" },
    { name: "{user_nick}", description: "The user nickname", category: "member" },
    { name: "{user_createdAt}", description: "Created at date of the", category: "member" },
    { name: "{user_joinAt}", description: "the server join date of the user", category: "member" },
    { name: "{server_icon}", description: "The server icon", category: "server" },
    { name: "server_id}", description: "the server id", category: "server" },
    { name: "{server_owner}", description: "mention the the server owner", category: "server" },
    { name: "{server_owner_id}", description: "the server owner id", category: "server" },
    { name: "{server_memberCount}", description: "return the number of member", category: "server" },
    { name: "{user_bal}", description: "The user wallet", category: "user" },
    { name: "{user_bank}", description: "the user bank account" },
    { name: "{channel_id}", description: "The channel id that the message was send" }

]