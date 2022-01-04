import Discord from "discord.js"
import moment from "moment"




class converter {
    public text: string;

    constructor(text: string) {
        this.text = text;
    }

    parseOnJoin(text: string, member: Discord.GuildMember): string {
        this.text
            .replace(new RegExp("{user}", "gm"), `<@!${member.id}>`)
            .replace(new RegExp("{username}", "gm"), member.user.username)
            .replace(new RegExp("{user_tag}", "gm"), `${member.user.username}#${member.user.discriminator}`)
            .replace(new RegExp("{user_discrim}", "gm"), member.user.discriminator)
            .replace(new RegExp("{user_id}", 'gm'), member.id)
            .replace(new RegExp("{user_nick}", "gm"), member.nickname || member.id)
            .replace(new RegExp("{user_createdAt}", "gm"), moment(member.user.createdAt).format("MMMM Do YYYY, h:mm"))
            .replace(new RegExp("{server_icon}", "gm"), member.guild?.icon as string)
            .replace(new RegExp("{server_id}", "gm"), member.guild?.id as string)
            .replace(new RegExp("{server_owner}", "gm"), `<@!${member.guild?.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), member.guild.id)

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
            .replace(new RegExp("{server_icon}", "gm"), message.guild?.icon as string)
            .replace(new RegExp("{server_id}", "gm"), message.guild?.id as string)
            .replace(new RegExp("{server_owner}", "gm"), `<@!${message.guild?.ownerId}> `)
            .replace(new RegExp("{server_owner_id}", "gm"), message.guild?.id as string)
        return this.text
    }

}



export = { converter }