/** @format */

import {
  Client,
  ColorResolvable,
  GuildBan,
  GuildMember,
  Interaction,
  Message,
  PartialMessage,
} from "discord.js";

const bot = new Client({ intents: ["GuildInvites", "Guilds"] });

export interface EventTypes {
  interactionCreate: (interaction: Interaction) => any;
  messageDelete: (message: Message | PartialMessage) => any;
  message: (message: Message) => any;
  memberAdded: (Member: GuildMember) => any;
  memberLeave: (Member: GuildMember) => any;
  banRemove: (ban: GuildBan) => any;
  banAdded: (ban: GuildBan) => any;
  test: (event: any) => any;
}

export interface Rule<T extends keyof EventTypes> {
  identifier: string;
  event: T;
  definition: EventTypes[T];
}

export type EventShortHand = EventTypes;
