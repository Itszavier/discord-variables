import { GuildMember, PartialGuildMember, Message, Guild } from "discord.js";
import { IRule, Rules, EventType, DefinitonReturnType } from "./rule";

export class Converter {
  private rule: Rules;

  constructor(rules: Rules) {
    if (rules instanceof Rules) {
      this.rule = rules;
    } else {
      throw new Error("Rules must be an intanceof Rules class");
    }
  }

  private parseEvent(
    eventType: keyof typeof EventType,
    event: any,
    text: string,
  ) {
    const array = text.trim().split(" ");
    const rules = this.rule.rules.filter(
      (rule) =>
        rule.eventType === eventType || rule.eventType.includes(eventType),
    );

    const newArray: DefinitonReturnType[] = [];

    for (const rule of rules) {
      let matchFound = false;

      array.forEach((value, index) => {
        if (value === rule.identifier) {
          newArray[index] = rule.definition(event);
          matchFound = true;
        }
      });

      if (matchFound) {
        break;
      }
    }

    array.forEach((value, index) => {
      newArray[index] = newArray[index] || value;
    });

    return newArray.join(" ");
  }

  parseOnMessage(event: Message, text: string) {
    if (!(event instanceof Message))
      throw new Error("event must be an instance of Discord Message");
    return this.parseEvent("message", event, text);
  }

  parseOnMemberJoin(event: GuildMember, text: string) {
    if (!(event instanceof GuildMember))
      throw new Error("event must be an instance of Discord GuildMember");
    return this.parseEvent("memberJoin", event, text);
  }

  parseOnMemberLeave(event: GuildMember | PartialGuildMember, text: string) {
    if (!(event instanceof GuildMember))
      throw new Error("event must be an instance of Discord GuildMember");
    return this.parseEvent("memberLeave", event, text);
  }

  parseOnBotJoin(event: Guild, text: string) {
    if (!(event instanceof Guild))
      throw new Error("event must be an instance of Discord Guild");
    return this.parseEvent("botJoin", event, text);
  }
}
