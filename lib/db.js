import mongoose from "mongoose";


let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = {
        conn: null, promise: null
    }
}

export async function connectDB() {
    if (cached.conn) return cached.conn;

    const uri =
        process.env.MONGODB_URI ||
        process.env.MONGODB_URI_LOCAL ||
        process.env.NEXT_PUBLIC_DB_API_URL ||
        process.env.NEXT_PUBLIC_DB_API_URL_LOCAL;

    if (!uri) {
        throw new Error("Please define a MongoDB URI in environment variables.");
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(uri).then((mongoose) => {
            // console.log("Connected to D dB", mongoose.Collection())
            return mongoose
        })
    }
    cached.conn = await cached.promise;
    return cached.conn
}
