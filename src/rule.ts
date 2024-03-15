import Discord, {
  ColorResolvable,
  GuildMember,
  Message,
  PartialGuildMember,
} from "discord.js";

export enum EventType {
  message,
  interactionCreate,
  memberJoin,
  memberLeave,
  botJoin,
}

export type EventsShortHand = keyof typeof EventType;

export type DefinitonReturnType =
  | string
  | number
  | ColorResolvable
  | GuildMember
  | PartialGuildMember;

// Define the IRule interface
export interface IRule {
  identifier: string;
  eventType: EventsShortHand | EventsShortHand[];
  definition: (e: any) => DefinitonReturnType;
}

export class Rules {
  rules: IRule[];

  constructor(rules: IRule[]) {
    this.rules = rules;
  }
}
