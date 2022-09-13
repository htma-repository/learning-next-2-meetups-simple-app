import { MongoClient } from "mongodb";

export const useMongoClient = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://hutamatr:xlpf0H34f0cNiiYM@cluster0.y5p8p1o.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetUpCollection = db.collection("meetups");

  return {
    meetUpCollection,
    client,
  };
};
