import { useMongoClient } from "../../hooks/useMongoClient";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { meetUpCollection, client } = await useMongoClient();

    await meetUpCollection.insertOne(data);

    client.close();

    res.status(201).json({
      message: "Meetup Inserted!",
    });
  }
};

export default handler;
