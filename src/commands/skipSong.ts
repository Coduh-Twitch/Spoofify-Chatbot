import { ChatMessage } from "@twurple/chat";
import { reply, say } from "..";
import {
  addToQueue,
  formatArtists,
  getNowPlaying,
  getQueue,
  search,
  skipTrack,
} from "../lib/spoofify";
import { getChannelByName } from "../lib/db/channels";

const skipSongCommand = async (
  hasAuthority: boolean,
  channel: string,
  user: string,
  text: string,
  msg: ChatMessage,
) => {
  let channelSession = getChannelByName(channel);

  if (!hasAuthority) {
    await reply(channel, `Only Moderators can do that.`, msg.id);
    return;
  }

  const nowPlaying = await getNowPlaying();
  try {
    const skipped = await skipTrack();

    if (skipped) {
      reply(
        channel,
        `Skipped ${nowPlaying ? `"${nowPlaying.title} - ${nowPlaying.artist}"` : "the current song."}`,
        msg.id,
      );
    } else {
      reply(
        channel,
        `Failed to skip ${nowPlaying ? `"${nowPlaying.title} - ${nowPlaying.artist}"` : "the current song."}`,
        msg.id,
      );
    }
  } catch (e) {
    reply(
      channel,
      `Failed to skip ${nowPlaying ? `"${nowPlaying.title} - ${nowPlaying.artist}"` : "the current song."}`,
      msg.id,
    );
  }
};

export default skipSongCommand;
