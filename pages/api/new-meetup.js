import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://hutamatr:xlpf0H34f0cNiiYM@cluster0.y5p8p1o.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetUpCollection = db.collection("meetups");

    const result = await meetUpCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({
      message: "Meetup Inserted!",
    });
  }
};

export default handler;
