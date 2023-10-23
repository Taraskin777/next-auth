import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://user:gYCzP7LgaCsAKfO6@atlascluster.l4j1brw.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );
  return client;
}
