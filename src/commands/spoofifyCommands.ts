import { ChatMessage } from "@twurple/chat";
import { emoji, reply } from "..";
import {getQueue} from "../lib/spoofify";

const spoofifyCommand = async (hasAuthority: boolean, channel: string, user: string, text: string, msg: ChatMessage, args: string[]) => {
   

    await reply(channel, `${emoji} @${process.env.BOT_USER_NAME}'s Spotify features are powered by Spoofify! Created by @duckyyylive, Spoofify is a Now Playing Overlay and Queue Management Twitch bot. Learn more about Spoofify here: https://spoofify.live`, msg.id)
}

export default spoofifyCommand;