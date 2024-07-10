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
import { IRule, RuleStore } from "./ruleStore";
import { EventShortHand, EventTypes } from "./types";

export class Transformer<T extends keyof EventTypes> {
  private rulesMap: Map<T, IRule<T>[]>;

  constructor(config: { collection: RuleStore<T> }) {
    if (!config || !config.collection) {
      throw new Error(
        "Please specify the rules collection or leave it as an empty array."
      );
    }

    this.rulesMap = new Map<T, IRule<T>[]>();

    this.define(config.collection);
  }

  define(ruleStore: RuleStore<T> | RuleStore<T>[] | IRule<T> | IRule<T>[]) {
    const ruleStores = Array.isArray(ruleStore) ? ruleStore : [ruleStore];

    ruleStores.forEach((storeOrRule) => {
      if (storeOrRule instanceof RuleStore) {
        storeOrRule.rules.forEach((rule) => {
          if (!this.rulesMap.has(rule.event)) {
            this.rulesMap.set(rule.event, []);
          }
          this.rulesMap.get(rule.event)?.push(rule);
        });
      } else {
        const rule = storeOrRule as IRule<T>;
        if (!this.rulesMap.has(rule.event)) {
          this.rulesMap.set(rule.event, []);
        }
        this.rulesMap.get(rule.event)?.push(rule);
      }
    });

    console.log(ruleStore, this.rulesMap);
  }

  parse<T extends keyof EventTypes>(
    text: string,
    eventType: T,
    ...args: Parameters<any>
  ) {
    if (!eventType || !text) {
      return text;
    }

    const rules = this.rulesMap.get(eventType as any);

    if (!rules || rules.length === 0) {
      return text;
    }

    rules.forEach((rule) => {
      const identifier = rule.identifier;
      const boundDefinition = rule.definition.bind(null, ...args);
      const returnValue = boundDefinition();
      const regex = new RegExp(identifier, "g");
      text = text.replace(regex, returnValue);
    });

    return text;
  }
}
