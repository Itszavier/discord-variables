import Discord, { GuildMember, PartialGuildMember } from "discord.js";
interface converterOptions {
    bank?: number;
    balance?: number;
}
declare class converter {
    text: string;
    balance: number;
    bank: number;
    private variables;
    constructor(text: string, options: converterOptions);
    getVariables(): string[];
    parseOnJoin(member: Discord.GuildMember): string;
    parseOnMessage(message: Discord.Message<boolean>): string;
    parseOnMemberRemove(member: GuildMember | PartialGuildMember): this;
}
declare const _default: {
    converter: typeof converter;
};
export = _default;
//# sourceMappingURL=index.d.ts.map