import snoowrap from "snoowrap";

export const r = new snoowrap({
  userAgent: 'Clipmagic by u/TortVid',
  clientId: process.env.REDDIT_CLIENT_ID,
  clientSecret: process.env.REDDIT_CLIENT_SECRET,
  refreshToken: process.env.REDDIT_REFRESH_TOKEN
});