"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const moment_1 = __importDefault(require("moment"));
const variables_json_1 = __importDefault(require("../src/variables.json"));
class converter {
    constructor(text) {
        this.variables = variables_json_1.default["variables-list"];
        this.text = text;
    }
    getVariables() {
        return variables_json_1.default;
    }
    parseOnJoin(member) {
        var _a, _b, _c, _d;
        if (!member) {
            new Error("GuildMember Object is missing");
        }
        this.text
            .replace(new RegExp("{user}", "gm"), `<@!${member.id}>`)
            .replace(new RegExp("{username}", "gm"), member.user.username)
            .replace(new RegExp("{user_tag}", "gm"), `${member.user.username}#${member.user.discriminator}`)
            .replace(new RegExp("{user_discrim}", "gm"), member.user.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), member.id)
            .replace(new RegExp("{user_nick}", "gm"), member.nickname || member.id)
            .replace(new RegExp("{user_createdAt}", "gm"), (0, moment_1.default)(member.user.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), (0, moment_1.default)(member.guild.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), (_a = member.guild) === null || _a === void 0 ? void 0 : _a.icon)
            .replace(new RegExp("{server_id}", "gm"), (_b = member.guild) === null || _b === void 0 ? void 0 : _b.id)
            .replace(new RegExp("{server_owner}", "gm"), `<@!${(_c = member.guild) === null || _c === void 0 ? void 0 : _c.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), member.guild.id)
            .replace(new RegExp("{server_memberCount}", "gm"), `${(_d = member.guild) === null || _d === void 0 ? void 0 : _d.memberCount}`);
        return this.text;
    }
    parseOnMessage(message) {
        var _a, _b, _c, _d, _e, _f;
        if (!message)
            (new Error("the discord message object was not found"));
        this.text
            .replace(new RegExp("{user}", "gm"), `<@!${message.author.id}>`)
            .replace(new RegExp("{username}", "gm"), message.author.username)
            .replace(new RegExp("{user_tag}", "gm"), `${message.author.username}#${message.author.discriminator}`)
            .replace(new RegExp("{user_discrim}", "gm"), message.author.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), message.author.id)
            .replace(new RegExp("{user_avatar}", 'gm'), message.author.avatar || message.author.defaultAvatarURL)
            .replace(new RegExp("{user_nick}", "gm"), message.author.username)
            .replace(new RegExp("{user_createdAt}", "gm"), (0, moment_1.default)(message.author.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), (0, moment_1.default)((_a = message.guild) === null || _a === void 0 ? void 0 : _a.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), (_b = message.guild) === null || _b === void 0 ? void 0 : _b.icon)
            .replace(new RegExp("{server_id}", "gm"), (_c = message.guild) === null || _c === void 0 ? void 0 : _c.id)
            .replace(new RegExp("{server_owner}", "gm"), `<@!${(_d = message.guild) === null || _d === void 0 ? void 0 : _d.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), (_e = message.guild) === null || _e === void 0 ? void 0 : _e.id)
            .replace(new RegExp("{server_memberCount}", "gm"), `${(_f = message.guild) === null || _f === void 0 ? void 0 : _f.memberCount}`);
        return this.text;
    }
    parseOnMemberRemove(member) {
        var _a, _b, _c, _d;
        if (!member) {
            new Error("GuildMember Object is missing");
        }
        this.text
            .replace(new RegExp("{user}", "gm"), `<@!${member.id}>`)
            .replace(new RegExp("{username}", "gm"), member.user.username)
            .replace(new RegExp("{user_tag}", "gm"), `${member.user.username}#${member.user.discriminator}`)
            .replace(new RegExp("{user_discrim}", "gm"), member.user.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), member.id)
            .replace(new RegExp("{user_nick}", "gm"), member.nickname || member.id)
            .replace(new RegExp("{user_createdAt}", "gm"), (0, moment_1.default)(member.user.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), (0, moment_1.default)(member.guild.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), (_a = member.guild) === null || _a === void 0 ? void 0 : _a.icon)
            .replace(new RegExp("{server_id}", "gm"), (_b = member.guild) === null || _b === void 0 ? void 0 : _b.id)
            .replace(new RegExp("{server_owner}", "gm"), `<@!${(_c = member.guild) === null || _c === void 0 ? void 0 : _c.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), member.guild.id)
            .replace(new RegExp("{server_memberCount}", "gm"), `${(_d = member.guild) === null || _d === void 0 ? void 0 : _d.memberCount}`);
        return this;
    }
}
module.exports = { converter };
