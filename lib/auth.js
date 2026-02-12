import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "./db";
import User from "./schema/users";

const adminEmails = (process.env.ADMIN_EMAILS || "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      if (!user?.email) return false;

      await connectDB();
      const email = user.email.toLowerCase();
      const shouldBeAdmin = adminEmails.includes(email);
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        await User.create({
          username: user.name || email.split("@")[0],
          email,
          password: "google-oauth",
          profilePic: user.image || "",
          role: shouldBeAdmin ? "admin" : "user",
        });
        return true;
      }

      const updates = {};
      if (user.name && existingUser.username !== user.name) {
        updates.username = user.name;
      }
      if (user.image && existingUser.profilePic !== user.image) {
        updates.profilePic = user.image;
      }
      if (shouldBeAdmin && existingUser.role !== "admin") {
        updates.role = "admin";
      }

      if (Object.keys(updates).length > 0) {
        await User.updateOne({ _id: existingUser._id }, { $set: updates });
      }

      return true;
    },
    async jwt({ token }) {
      if (!token?.email) return token;

      await connectDB();
      const dbUser = await User.findOne({ email: token.email.toLowerCase() })
        .select("_id username role memberShip")
        .lean();

      if (dbUser) {
        token.userId = String(dbUser._id);
        token.username = dbUser.username;
        token.role = dbUser.role;
        token.memberShip = dbUser.memberShip;
      }

      return token;
    },
    async session({ session, token }) {
      if (!session.user) session.user = {};
      session.user.id = token.userId;
      session.user.username = token.username || session.user.name || "";
      session.user.role = token.role || "user";
      session.user.memberShip = token.memberShip || "free";
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
