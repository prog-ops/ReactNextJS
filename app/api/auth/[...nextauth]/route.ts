import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

const handler: NextApiHandler = (req, res) => NextAuth(req, res, {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ]
});

export default handler;
