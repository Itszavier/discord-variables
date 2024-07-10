/** @format */
import {
  Interaction,
  Message,
  PartialMessage,
  GuildMember,
  PartialGuildMember,
  GuildBan,
  Guild,
  Channel,
  Client,
} from "discord.js";

const bot = new Client({ intents: [] });

interface messageEvents {
  messageCreate: (message: Message) => any;
  messageDelete: (message: Message) => any;
  messageUpdate: (oldMessage: Message, newMessage: Message) => any;
}

interface guildEvents {
  guildMemberRemove: (member: GuildMember) => any;
  guildBanAdd: (ban: GuildBan) => any;
  guildBanRemove: (ban: GuildBan) => any;
  guildCreate: (guild: Guild) => any;
  guildDelete: (guild: Guild) => any;
  guildUpdate: (oldGuild: Guild, newGuild: Guild) => any;
}

interface channelEvents {
  interactionCreate: (interaction: Interaction) => any;
  channelCreate: (channel: Channel) => any;
  channelDelete: (channel: Channel) => any;
  channelUpdate: (oldChannel: Channel, newChannel: Channel) => any;
}

export interface EventTypes extends channelEvents, guildEvents, messageEvents {}

export type DefinitionFunction<T extends keyof EventTypes> = EventTypes[T];



export type EventShortHand = EventTypes;
