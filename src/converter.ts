/** @format */

import {
  GuildMember,
  PartialGuildMember,
  Message,
  Guild,
  Interaction,
  ButtonInteraction,
  Client,
  GuildBan,
  ContextMenuCommandAssertions,
  Collection,
} from "discord.js";
import { IRule, Rules, RulesCollection } from "./rule";
import { EventShortHand, EventTypes } from "./types";

export class Converter<T extends keyof EventTypes> {
  config: { collection: RulesCollection<T> };

  constructor(config: { collection: RulesCollection<T> }) {
    if (!config || !config.collection) {
      throw new Error(
        "Please specify the rules collection or leave it as an empty array."
      );
    }

    this.config = config;
  }

  /* parseMessage(event: Message, text: string) {
    if (!(event instanceof Message))
      throw new Error("event must be an instance of Discord Message");
    return this.parseEvent("message", event, text);
  }

  parseInteractionCreate(event: any, text: string) {
    return this.parseEvent("interactionCreate", event, text);
  }*/

  /*parseMemberJoin(event: GuildMember, text: string) {
    if (!(event instanceof GuildMember))
      throw new Error("event must be an instance of Discord GuildMember");
    return this.parseEvent("memberJoin", event, text);
  }

  parseMemberLeave(event: GuildMember | PartialGuildMember, text: string) {
    if (!(event instanceof GuildMember)) {
      throw new Error("event must be an instance of Discord GuildMember");
    }

    return this.parseEvent("memberLeave", event, text);
  }

  parseBotJoin(event: Guild, text: string) {
    if (!(event instanceof Guild)) {
      throw new Error("event must be an instance of Discord Guild");
    }
    return this.parseEvent("botJoin", event, text);
  }

  parseBan(event: Guild, text: string) {
    if (!(event instanceof GuildBan)) {
      throw new Error("event must be an instance of Discord Guild");
    }
    return this.parseEvent("memberBan", event, text);
  }



  parseBanRemove(event: Guild, text: string) {
    if (!(event instanceof GuildBan)) {
      throw new Error("event must be an instance of Discord Guild");
    }
    return this.parseEvent("memberBanRemove", event, text);
  }

  */

  parse<T extends keyof EventTypes>(
    text: string,
    eventType: T,
    ...args: Parameters<any>
  ) {
    if (!eventType || !text) {
      return;
    }
    const config = this.config;
    const rules = config.collection.rules;

    const currentRule = rules.find((rule) => {
      return (rule.event as string) === (eventType as string);
    });

    if (!currentRule) {
      return text;
    }

    const filteredRules = rules.filter(
      (rule) => (rule.event as string) === (eventType as string)
    );

    // Replace identifiers for each rule
    filteredRules.forEach((rule) => {
      const identifier = rule.identifier;

      // Bind args to definition function
      const boundDefinition = rule.definition.bind(null, ...args);
      const returnValue = boundDefinition();

      // Replace identifiers in text with returnValue
      const regex = new RegExp(identifier, "g");
      text = text.replaceAll(regex, returnValue);
    });

    return text;
  }

  /*private parseEvent(eventType: EventShortHand, event: any, text: string) {
    const array = text.trim().split(" ");
    const rules = this.rule.rules.filter(
      (rule) => rule.event === eventType || rule.event.includes(eventType)
    );

    const newArray: string[] = [];

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
  }*/
}

const bot = new Client({ intents: ["GuildInvites", "Guilds"] });

const converter = new Converter({
  collection: new RulesCollection([
    {
      identifier: "{username}",
      event: "banAdded",
      definition: (ban) => {},
    },
  ]),
});
