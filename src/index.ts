import Discord, { GuildMember, PartialGuildMember } from "discord.js"
import moment from "moment"
import variables from '../src/variables.json'



class converter {
    public text: string;
    private variables: string[] = variables["variables-list"]

    constructor(text: string) {
        this.text = text;
    }

    getVariables() {
        return variables
    }

    parseOnJoin(member: Discord.GuildMember): string {
        if (!member) { new Error("GuildMember Object is missing") }

        this.text
            .replace(new RegExp("{user}", "gm"), `<@!${member.id}>`)
            .replace(new RegExp("{username}", "gm"), member.user.username)
            .replace(new RegExp("{user_tag}", "gm"), `${member.user.username}#${member.user.discriminator}`)
            .replace(new RegExp("{user_discrim}", "gm"), member.user.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), member.id)
            .replace(new RegExp("{user_nick}", "gm"), member.nickname || member.id)
            .replace(new RegExp("{user_createdAt}", "gm"), moment(member.user.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), moment(member.guild.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), member.guild?.icon as string)
            .replace(new RegExp("{server_id}", "gm"), member.guild?.id as string)
            .replace(new RegExp("{server_owner}", "gm"), `<@!${member.guild?.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), member.guild.id)
            .replace(new RegExp("{server_memberCount}", "gm"), `${member.guild?.memberCount}`)

        return this.text
    }

    parseOnMessage(message: Discord.Message<boolean>) {
        if (!message) (new Error("the discord message object was not found"))

        this.text
            .replace(new RegExp("{user}", "gm"), `<@!${message.author.id}>`)
            .replace(new RegExp("{username}", "gm"), message.author.username)
            .replace(new RegExp("{user_tag}", "gm"), `${message.author.username}#${message.author.discriminator}`)
            .replace(new RegExp("{user_discrim}", "gm"), message.author.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), message.author.id)
            .replace(new RegExp("{user_avatar}", 'gm'), message.author.avatar || message.author.defaultAvatarURL)
            .replace(new RegExp("{user_nick}", "gm"), message.author.username)
            .replace(new RegExp("{user_createdAt}", "gm"), moment(message.author.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), moment(message.guild?.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), message.guild?.icon as string)
            .replace(new RegExp("{server_id}", "gm"), message.guild?.id as string)
            .replace(new RegExp("{server_owner}", "gm"), `<@!${message.guild?.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), message.guild?.id as string)
            .replace(new RegExp("{server_memberCount}", "gm"), `${message.guild?.memberCount}`)
        return this.text
    }


    parseOnMemberRemove(member: GuildMember | PartialGuildMember) {
        if (!member) { new Error("GuildMember Object is missing") }
        this.text
            .replace(new RegExp("{user}", "gm"), `<@!${member.id}>`)
            .replace(new RegExp("{username}", "gm"), member.user.username)
            .replace(new RegExp("{user_tag}", "gm"), `${member.user.username}#${member.user.discriminator}`)
            .replace(new RegExp("{user_discrim}", "gm"), member.user.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), member.id)
            .replace(new RegExp("{user_nick}", "gm"), member.nickname || member.id)
            .replace(new RegExp("{user_createdAt}", "gm"), moment(member.user.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{user_joinAt}", "gm"), moment(member.guild.joinedAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), member.guild?.icon as string)
            .replace(new RegExp("{server_id}", "gm"), member.guild?.id as string)
            .replace(new RegExp("{server_owner}", "gm"), `<@!${member.guild?.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), member.guild.id)
            .replace(new RegExp("{server_memberCount}", "gm"), `${member.guild?.memberCount}`)
        return this
    }


}



export = { converter }