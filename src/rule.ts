import Discord, { GuildMember, PartialGuildMember } from "discord.js";

export interface IRule {
  identifier: string;
  type: string;
  definition: (e: any) => string | number;
}

export class Rules {
  rules: IRule[];

  constructor(rules: IRule[]) {
    this.rules = rules;
  }
}



