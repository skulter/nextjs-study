import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = MongoClient.connect(
        "mongodb+srv://skulter:kOYWQjztSwNvGqoC@cluster0.ya84vqh.mongodb.net/test2?retryWrites=true&w=majority&appName=Cluster0"
    );
    return client;
}
