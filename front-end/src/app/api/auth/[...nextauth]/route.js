import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import jwt from "jsonwebtoken";
import connectToDatabase from "../../../../../../backend/db/db";

const OPTIONS = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        console.log("Entered authorize function with credentials:", credentials);

        if (!email || !password) {
          console.log("Missing username or password");
          return null;
        }

        try {
          const baseUrl = 'http://localhost:8080';
          const url = `${baseUrl}/showData`;

          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
          });

          const data = await response.json();
          console.log("Data from backend:", data);

          if (response.ok && data.data && data.data.token) {
            const decodedToken = jwt.decode(data.data.token);
            console.log("decodedToken in authConfig:", decodedToken);

            if (!decodedToken) {
              return null;
            }

            const user = {
              id: decodedToken.userId,
              email: email,
              name: data.name,
            };
            console.log("Returning user:", user);
            return user;
          } else {
            console.log("Authentication failed:", data.message || "No details provided");
            return null;
          }
        } catch (error) {
          console.error("Error in authorize function:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60,  // 7 days in seconds
    updateAge: 24 * 60 * 60,   // 24 hours in seconds
  },
  callbacks: {
    async jwt({ token, user, account }) {
      console.log('Starting jwt callback with token:', token);
      if (user) {
        console.log("Modifying token with user details");
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      console.log('Starting session callback with token:', token);
      if (token) {
        session.user = {
          ...session.user,
          id: token.id,
          email: token.email,
          role: token.role,
          name: token.name,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(OPTIONS);
module.exports = { GET: handler, POST: handler };
