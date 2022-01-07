import Discord, { GuildMember, PartialGuildMember } from "discord.js"
import moment from "moment"
import { variables } from "./variables";

interface converterOptions {
    bank?: number,
    balance?: number,
}

const predefinedObject: converterOptions = {
    balance: 0,
    bank: 0
}
interface variable {
    name?: string,
    description?: string,
    category?: string
}
class converter {
    public text: string;
    public options: converterOptions | null;
    private variables: Array<variable> = variables;

    constructor(text: string, Options?: converterOptions) {
        this.text = text;
        this.options = Options || null;

    }

    getVariables(): Array<variable> {
        return this.variables
    }


    parseOnJoin(member: Discord.GuildMember): string {
        if (!member) { new Error("GuildMember Object is missing") }
        if (this.options == null) {
            this.options = predefinedObject;
        }
        const balance = this.options.balance || 0
        const bank = this.options.bank || 0

        const msg = this.text
            .replace(new RegExp("{user}", "gm"), `<@!${member.id}>`)
            .replace(new RegExp("{username}", "gm"), member.user.username)
            .replace(new RegExp("{user_tag}", "gm"), `${member.user.username}#${member.user.discriminator}`)
            .replace(new RegExp("{user_discrim}", "gm"), member.user.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), member.id)
            .replace(new RegExp("{user_nick}", "gm"), member.nickname || member.id)
            .replace(new RegExp("{user_createdAt}", "gm"), moment(member.user.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), moment(member.guild.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), member.guild?.icon as string)
            .replace(new RegExp("{server_name}", "gm"), member.guild.name)
            .replace(new RegExp("{server_id}", "gm"), member.guild?.id as string)
            .replace(new RegExp("{server_owner}", "gm"), `<@!${member.guild?.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), member.guild.id)
            .replace(new RegExp("{server_memberCount}", "gm"), `${member.guild?.memberCount}`)
            .replace(new RegExp("{user_bal}", "gm"), balance.toString())
            .replace(new RegExp("{user_bank}", "gm"), bank.toString())


        return msg;
    }

    parseOnMessage(message: Discord.Message<boolean>) {
        if (!message) (new Error("the discord message object was not found"))
        if (this.options == null) {
            this.options = predefinedObject;
        }
        const balance = this.options.balance || 0
        const bank = this.options.bank || 0

        const msg = this.text
            .replace(new RegExp("{user}", "gm"), `<@!${message.author.id}> `)
            .replace(new RegExp("{username}", "gm"), message.author.username)
            .replace(new RegExp("{user_tag}", "gm"), `${message.author.username} #${message.author.discriminator} `)
            .replace(new RegExp("{user_discrim}", "gm"), message.author.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), message.author.id)
            .replace(new RegExp("{user_avatar}", 'gm'), message.author.avatar || message.author.defaultAvatarURL)
            .replace(new RegExp("{user_nick}", "gm"), message.author.username)
            .replace(new RegExp("{user_createdAt}", "gm"), moment(message.author.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), moment(message.guild?.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), message.guild?.icon as string)
            .replace(new RegExp("{server_id}", "gm"), message.guild?.id as string)
            .replace(new RegExp("{server_name}", "gm"), message.guild?.name || "unname")
            .replace(new RegExp("{server_owner}", "gm"), `<@!${message.guild?.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), message.guild?.id as string)
            .replace(new RegExp("{server_memberCount}", "gm"), `${message.guild?.memberCount} `)
            .replace(new RegExp("{channel_id}", "gm"), message.channelId)
            .replace(new RegExp("{user_bal}", "gm"), balance.toString())
            .replace(new RegExp("{user_bank}", "gm"), bank.toString())

        return msg
    }


    parseOnMemberRemove(member: GuildMember | PartialGuildMember) {
        if (!member) { new Error("GuildMember Object is missing") }
        if (this.options == null) {
            this.options = predefinedObject;
        }
        const balance = this.options.balance || 0
        const bank = this.options.bank || 0

        const msg = this.text
            .replace(new RegExp("{user}", "gm"), `<@!${member.id}> `)
            .replace(new RegExp("{username}", "gm"), member.user.username)
            .replace(new RegExp("{user_tag}", "gm"), `${member.user.username} #${member.user.discriminator} `)
            .replace(new RegExp("{user_discrim}", "gm"), member.user.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), member.id)
            .replace(new RegExp("{user_nick}", "gm"), member.nickname || member.id)
            .replace(new RegExp("{user_createdAt}", "gm"), moment(member.user.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), moment(member.guild.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), member.guild?.icon as string)
            .replace(new RegExp("{server_id}", "gm"), member.guild?.id as string)
            .replace(new RegExp("{server_name}", "gm"), member.guild?.name || "unname")
            .replace(new RegExp("{server_owner}", "gm"), `<@!${member.guild?.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), member.guild.id)
            .replace(new RegExp("{server_memberCount}", "gm"), `${member.guild?.memberCount} `)
            .replace(new RegExp("{user_bal}", "gm"), balance.toString())
            .replace(new RegExp("{user_bank}", "gm"), bank.toString())
        return msg
    }


}





export = { converter }