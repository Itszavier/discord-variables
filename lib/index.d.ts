import Discord from "discord.js";
declare class converter {
    text: string;
    constructor(text: string);
    parseOnJoin(text: string, member: Discord.GuildMember): string;
    parseOnMessage(message: Discord.Message<boolean>): string;
}
declare const _default: {
    converter: typeof converter;
};
export = _default;
//# sourceMappingURL=index.d.ts.map