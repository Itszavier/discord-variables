/** @format */
import {
  Interaction,
  Message,
  PartialMessage,
  GuildMember,
  PartialGuildMember,
  GuildBan,
  Guild,
  VoiceState,
  Channel,
  Client,
  ThreadMember,
  Presence,
  Role,
  Emoji,
  User,
  MessageReaction,
  Typing,
} from "discord.js";

const bot = new Client({ intents: ["GuildInvites", "Guilds"] });

export interface EventTypes {
  interactionCreate: (interaction: Interaction) => any;
  messageCreate: (message: Message) => any;
  messageDelete: (message: Message | PartialMessage) => any;
  messageUpdate: (
    oldMessage: Message | PartialMessage,
    newMessage: Message | PartialMessage
  ) => any;
  guildMemberAdd: (member: GuildMember) => any;
  guildMemberRemove: (member: GuildMember | PartialGuildMember) => any;
  guildBanAdd: (ban: GuildBan) => any;
  guildBanRemove: (ban: GuildBan) => any;
  guildCreate: (guild: Guild) => any;
  guildDelete: (guild: Guild) => any;
  guildUpdate: (oldGuild: Guild, newGuild: Guild) => any;
  voiceStateUpdate: (oldState: VoiceState, newState: VoiceState) => any;
  channelCreate: (channel: Channel) => any;
  channelDelete: (channel: Channel) => any;
  channelUpdate: (oldChannel: Channel, newChannel: Channel) => any;
  presenceUpdate: (oldPresence: Presence, newPresence: Presence) => any;
  roleCreate: (role: Role) => any;
  roleDelete: (role: Role) => any;
  roleUpdate: (oldRole: Role, newRole: Role) => any;
  emojiCreate: (emoji: Emoji) => any;
  emojiDelete: (emoji: Emoji) => any;
  emojiUpdate: (oldEmoji: Emoji, newEmoji: Emoji) => any;
  userUpdate: (oldUser: User, newUser: User) => any;
  messageReactionAdd: (reaction: MessageReaction, user: User) => any;
  messageReactionRemove: (reaction: MessageReaction, user: User) => any;
  typingStart: (typing: Typing) => any;
  threadMemberUpdate: (oldMember: ThreadMember, newMember: ThreadMember) => any;
}

export type DefinitionFunction<T extends keyof EventTypes> = EventTypes[T];

export interface Rule<T extends keyof EventTypes> {
  identifier: string;
  event: T;
  definition: DefinitionFunction<T>;
}

export type EventShortHand = EventTypes;
