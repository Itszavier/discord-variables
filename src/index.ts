import Discord, { GuildMember, PartialGuildMember } from "discord.js"
import moment from "moment"
import { variables } from "./variables";

interface IRuleDefine{
  placeholder: string,
  event: ""
  definition: ()=> {}
}

function defineVariable(rule: IRuleDefine[]){
   
}