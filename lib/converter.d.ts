import { GuildMember, PartialGuildMember, Message, Guild } from "discord.js";
import { Rules } from "./rule";
export declare class Converter {
    private rule;
    constructor(rules: Rules);
    private parseEvent;
    parseOnMessage(event: Message, text: string): string;
    parseInteractionCreate(event: any, text: string): string;
    parseOnMemberJoin(event: GuildMember, text: string): string;
    parseOnMemberLeave(event: GuildMember | PartialGuildMember, text: string): string;
    parseOnBotJoin(event: Guild, text: string): string;
}
//# sourceMappingURL=converter.d.ts.map