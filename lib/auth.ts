import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma";
import Discord from "next-auth/providers/discord";
import Resend from "next-auth/providers/resend";

export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        Discord,
        Resend({
            from: process.env.AUTH_EMAIL_FROM,
        })
    ],
    pages: {
        signIn: "/login",
        error: "/login",
    }
})