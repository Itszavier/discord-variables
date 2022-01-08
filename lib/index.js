"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.converter = void 0;
const moment_1 = __importDefault(require("moment"));
const variables_1 = require("./variables");
const predefinedObject = {
    balance: 0,
    bank: 0,
};
class converter {
    constructor(text, Options) {
        this.variables = variables_1.variables;
        this.text = text;
        this.options = Options || null;
    }
    getVariables() {
        return this.variables;
    }
    parseOnJoin(member, text) {
        var _a, _b, _c, _d;
        if (!member) {
            new Error("GuildMember Object is missing");
        }
        if (this.options == null) {
            this.options = predefinedObject;
        }
        if (text != undefined || text != null) {
            this.text = text;
        }
        const balance = this.options.balance || 0;
        const bank = this.options.bank || 0;
        const msg = this.text
            .replace(new RegExp("{user}", "gm"), `<@!${member.id}>`)
            .replace(new RegExp("{username}", "gm"), member.user.username)
            .replace(new RegExp("{user_avatar}", 'gm'), member.user.displayAvatarURL())
            .replace(new RegExp("{user_tag}", "gm"), `${member.user.username}#${member.user.discriminator}`)
            .replace(new RegExp("{user_discrim}", "gm"), member.user.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), member.id)
            .replace(new RegExp("{user_nick}", "gm"), member.nickname || member.id)
            .replace(new RegExp("{user_createdAt}", "gm"), (0, moment_1.default)(member.user.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), (0, moment_1.default)(member.guild.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), (_a = member.guild) === null || _a === void 0 ? void 0 : _a.icon)
            .replace(new RegExp("{server_name}", "gm"), member.guild.name)
            .replace(new RegExp("{server_id}", "gm"), (_b = member.guild) === null || _b === void 0 ? void 0 : _b.id)
            .replace(new RegExp("{server_owner}", "gm"), `<@!${(_c = member.guild) === null || _c === void 0 ? void 0 : _c.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), member.guild.id)
            .replace(new RegExp("{server_memberCount}", "gm"), `${(_d = member.guild) === null || _d === void 0 ? void 0 : _d.memberCount}`)
            .replace(new RegExp("{user_bal}", "gm"), balance.toString())
            .replace(new RegExp("{user_bank}", "gm"), bank.toString());
        return msg;
    }
    parseOnMessage(message, text) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!message)
            (new Error("the discord message object was not found"));
        if (this.options == null) {
            this.options = predefinedObject;
        }
        if (text != undefined || text != null) {
            this.text = text;
        }
        const balance = this.options.balance || 0;
        const bank = this.options.bank || 0;
        const msg = this.text
            .replace(new RegExp("{user}", "gm"), `<@!${message.author.id}> `)
            .replace(new RegExp("{username}", "gm"), message.author.username)
            .replace(new RegExp("{user_tag}", "gm"), `${message.author.username} #${message.author.discriminator} `)
            .replace(new RegExp("{user_discrim}", "gm"), message.author.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), message.author.id)
            .replace(new RegExp("{user_avatar}", 'gm'), message.author.avatarURL() || message.author.defaultAvatarURL)
            .replace(new RegExp("{user_nick}", "gm"), message.author.username)
            .replace(new RegExp("{user_createdAt}", "gm"), (0, moment_1.default)(message.author.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), (0, moment_1.default)((_a = message.guild) === null || _a === void 0 ? void 0 : _a.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), (_b = message.guild) === null || _b === void 0 ? void 0 : _b.icon)
            .replace(new RegExp("{server_id}", "gm"), (_c = message.guild) === null || _c === void 0 ? void 0 : _c.id)
            .replace(new RegExp("{server_name}", "gm"), ((_d = message.guild) === null || _d === void 0 ? void 0 : _d.name) || "unname")
            .replace(new RegExp("{server_owner}", "gm"), `<@!${(_e = message.guild) === null || _e === void 0 ? void 0 : _e.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), (_f = message.guild) === null || _f === void 0 ? void 0 : _f.id)
            .replace(new RegExp("{server_memberCount}", "gm"), `${(_g = message.guild) === null || _g === void 0 ? void 0 : _g.memberCount} `)
            .replace(new RegExp("{channel_id}", "gm"), message.channelId)
            .replace(new RegExp("{user_bal}", "gm"), balance.toString())
            .replace(new RegExp("{user_bank}", "gm"), bank.toString());
        return msg;
    }
    parseOnMemberRemove(member, text) {
        var _a, _b, _c, _d, _e;
        if (!member) {
            new Error("GuildMember Object is missing");
        }
        if (this.options == null) {
            this.options = predefinedObject;
        }
        if (text != undefined || text != null) {
            this.text = text;
        }
        const balance = this.options.balance || 0;
        const bank = this.options.bank || 0;
        const msg = this.text
            .replace(new RegExp("{user}", "gm"), `<@!${member.id}> `)
            .replace(new RegExp("{username}", "gm"), member.user.username)
            .replace(new RegExp("{user_tag}", "gm"), `${member.user.username} #${member.user.discriminator} `)
            .replace(new RegExp("{user_discrim}", "gm"), member.user.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), member.id)
            .replace(new RegExp("{user_nick}", "gm"), member.nickname || member.id)
            .replace(new RegExp("{user_createdAt}", "gm"), (0, moment_1.default)(member.user.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), (0, moment_1.default)(member.guild.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), (_a = member.guild) === null || _a === void 0 ? void 0 : _a.icon)
            .replace(new RegExp("{server_id}", "gm"), (_b = member.guild) === null || _b === void 0 ? void 0 : _b.id)
            .replace(new RegExp("{server_name}", "gm"), ((_c = member.guild) === null || _c === void 0 ? void 0 : _c.name) || "unname")
            .replace(new RegExp("{server_owner}", "gm"), `<@!${(_d = member.guild) === null || _d === void 0 ? void 0 : _d.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), member.guild.id)
            .replace(new RegExp("{server_memberCount}", "gm"), `${(_e = member.guild) === null || _e === void 0 ? void 0 : _e.memberCount} `)
            .replace(new RegExp("{user_bal}", "gm"), balance.toString())
            .replace(new RegExp("{user_bank}", "gm"), bank.toString());
        return msg;
    }
}
exports.converter = converter;
