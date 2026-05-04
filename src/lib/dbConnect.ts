import mongoose from "mongoose";

// typescript injected
type ConnectionObject = {    
    isConnected?: number; 
    // ? means that is optional
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    // Only treat readyState === 1 as already connected.
    // readyState values: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    if (connection.isConnected === 1) {
        console.log('Already connected to MongoDB');
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

        connection.isConnected = db.connections[0].readyState;
        console.log('DB connected successfully');
    }
    catch (error) { 
        console.error('Error connecting to MongoDB:', error);
        // Throw the error so higher-level callers (Next.js handlers) can decide how to handle it.
        throw error;
    }
}

export default dbConnect;