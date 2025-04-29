import mongoose from "mongoose";

const uri = 'mongodb://localhost:27017/heliusdev'

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