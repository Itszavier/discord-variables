"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Converter = void 0;
const discord_js_1 = require("discord.js");
const rule_1 = require("./rule");
class Converter {
    constructor(rules) {
        if (rules instanceof rule_1.Rules) {
            this.rule = rules;
        }
        else {
            throw new Error("Rules must be an intanceof Rules class");
        }
    }
    parseEvent(eventType, event, text) {
        const array = text.trim().split(" ");
        const rules = this.rule.rules.filter((rule) => rule.eventType === eventType || rule.eventType.includes(eventType));
        const newArray = [];
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
    parseOnMessage(event, text) {
        if (!(event instanceof discord_js_1.Message))
            throw new Error("event must be an instance of Discord Message");
        return this.parseEvent("message", event, text);
    }
    parseInteractionCreate(event, text) {
        return this.parseEvent("interactionCreate", event, text);
    }
    parseOnMemberJoin(event, text) {
        if (!(event instanceof discord_js_1.GuildMember))
            throw new Error("event must be an instance of Discord GuildMember");
        return this.parseEvent("memberJoin", event, text);
    }
    parseOnMemberLeave(event, text) {
        if (!(event instanceof discord_js_1.GuildMember))
            throw new Error("event must be an instance of Discord GuildMember");
        return this.parseEvent("memberLeave", event, text);
    }
    parseOnBotJoin(event, text) {
        if (!(event instanceof discord_js_1.Guild))
            throw new Error("event must be an instance of Discord Guild");
        return this.parseEvent("botJoin", event, text);
    }
}
exports.Converter = Converter;
