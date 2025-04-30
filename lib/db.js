import mongoose from "mongoose";


const uri = process.env.NEXT_PUBLIC_DB_API_URL 
console.log("Connecting to DB: ", uri)
if (!uri) throw new Error("Please define the DB_API_URL environment variable inside .env.local");


let cached = global.mongoose;

if (!cached) {
    cached=global.mongoose = {
        conn: null, promise: null
    }
}

export async function connectDB() {
    if (cached.conn) return
    cached.conn
    if (!cached.promise) {
        cached.promise = mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((mongoose)=>mongoose)
    }
    cached.conn =await cached.promise;
    return cached.conn
}