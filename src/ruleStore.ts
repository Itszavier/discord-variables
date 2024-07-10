/** @format */

import Discord, {
  ColorResolvable,
  GuildMember,
  Message,
  PartialGuildMember,
} from "discord.js";
import { EventTypes } from "./types";

// Define the IRule interface
export interface IRule<T extends keyof EventTypes> {
  identifier: string;
  event: T;
  definition: EventTypes[T];
}

export class RuleStore<T extends keyof EventTypes> {
  rules: IRule<T>[];

  constructor(rules: IRule<T>[]) {
    this.rules = rules;
  }
}
