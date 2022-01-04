import Discord, { GuildMember, PartialGuildMember } from "discord.js";
declare class converter {
    text: string;
    private variables;
    constructor(text: string);
    getVariables(): {
        "variables-list": string[];
    };
    parseOnJoin(member: Discord.GuildMember): string;
    parseOnMessage(message: Discord.Message<boolean>): string;
    parseOnMemberRemove(member: GuildMember | PartialGuildMember): this;
}
declare const _default: {
    converter: typeof converter;
};
export = _default;
//# sourceMappingURL=index.d.ts.map