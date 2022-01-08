import Discord, { GuildMember, PartialGuildMember } from "discord.js";
export interface converterOptions {
    bank?: number;
    balance?: number;
}
export declare type TextParameter = string | undefined;
export interface variable {
    name?: string;
    description?: string;
    category?: string;
}
export declare class converter {
    text: string;
    options: converterOptions | null;
    private variables;
    constructor(text: string, Options?: converterOptions);
    getVariables(): Array<variable>;
    parseOnJoin(member: Discord.GuildMember, text?: TextParameter): string;
    parseOnMessage(message: Discord.Message<boolean>, text: TextParameter): string;
    parseOnMemberRemove(member: GuildMember | PartialGuildMember, text: TextParameter): string;
}
//# sourceMappingURL=index.d.ts.map