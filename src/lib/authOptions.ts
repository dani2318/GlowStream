import { NextAuthOptions } from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";

export const authOptions: NextAuthOptions = {
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID!,
      clientSecret: process.env.TWITCH_CLIENT_SECRET!,
      authorization: { params: { scope: "openid user:read:email moderation:read moderator:manage:banned_users analytics:read:extensions" } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        console.log("account", account);
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // @ts-ignore
      session.accessToken = token.accessToken

      return session
    }
  },
};
