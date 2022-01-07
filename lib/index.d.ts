import Discord, { GuildMember, PartialGuildMember } from "discord.js";
interface converterOptions {
    bank?: number;
    balance?: number;
}
interface variable {
    name?: string;
    description?: string;
    category?: string;
}
declare class converter {
    text: string;
    options: converterOptions;
    private variables;
    constructor(text: string, Options: converterOptions);
    getVariables(): Array<variable>;
    parseOnJoin(member: Discord.GuildMember): string;
    parseOnMessage(message: Discord.Message<boolean>): string;
    parseOnMemberRemove(member: GuildMember | PartialGuildMember): string;
}
declare const _default: {
    converter: typeof converter;
};
export = _default;
//# sourceMappingURL=index.d.ts.map