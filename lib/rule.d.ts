import { ColorResolvable, GuildMember, PartialGuildMember } from "discord.js";
export declare enum EventType {
    message = 0,
    interactionCreate = 1,
    memberJoin = 2,
    memberLeave = 3,
    botJoin = 4
}
export type EventsShortHand = keyof typeof EventType;
export type DefinitonReturnType = string | number | ColorResolvable | GuildMember | PartialGuildMember;
export interface IRule {
    identifier: string;
    eventType: EventsShortHand | EventsShortHand[];
    definition: (e: any) => DefinitonReturnType;
}
export declare class Rules {
    rules: IRule[];
    constructor(rules: IRule[]);
}
//# sourceMappingURL=rule.d.ts.map