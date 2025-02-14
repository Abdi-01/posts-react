// reference : https://authjs.dev/getting-started/authentication/credentials?framework=next-js
// reference : https://dev.to/nagatodev/how-to-integrate-next-auth-with-your-nextjs-application-4mn9
// library imports
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

// types imports
import type { NextAuthConfig, Session, User } from "next-auth";
import type { UserType, UserResponseType } from "./types/user";
import { AdapterUser } from "next-auth/adapters";
import { CredentialsType } from "./types/login";
import { JWT } from "next-auth/jwt";
import { onSignIn } from "./app/sign-in/utils";

declare module "next-auth" {
  interface User extends UserType {}
}

declare module "next-auth/adapters" {
  interface AdapterUser extends UserType {}
}

declare module "next-auth/jwt" {
  interface JWT extends UserType {}
}

// Auth Config
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;
        let user = null;
        const { email, password } = credentials as CredentialsType;

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);

        // logic to verify if the user exists
        user = await onSignIn(email, password);
        console.log("FROM NEXT AUTH", user);

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in", // Custom sign-in page
    // error: "/auth/error", // Custom error page
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 3,
  },
  callbacks: {
    signIn: async () => {
      return true;
    },
    session: async ({ token, session }) => {
      console.log("TOKEN NEXTAUTH", token);
      session.user = { ...session.user, ...token } as typeof session.user; // berusaha menambahkan data lain dari penerjemahan token ke session.user
      console.log("SESSION NEXTAUTH", session);
      return session;
    },
    jwt: async ({ token, user }) => {
      console.log("USER JWT NEXTAUTH", user);
      token = { ...token, ...user };
      console.log("TOKEN JWT NEXTAUTH", token);
      return token;
    },
  },
});
