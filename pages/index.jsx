import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";
import { useMongoClient } from "../hooks/useMongoClient";

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>Meetup App</title>
        <meta
          name="description"
          content="Simple Meetup app for learning purpose"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  const { meetUpCollection, client } = await useMongoClient();

  const meetup = await meetUpCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetup.map((meetup) => {
        return {
          id: meetup._id.toString(),
          image: meetup.image,
          title: meetup.title,
          address: meetup.address,
        };
      }),
    },
    revalidate: 3,
  };
};

// export const getServerSideProps = async (context) => {
//   const { req, res } = context;

//   return {
//     props: {
//       meetups: meetupData,
//     },
//   };
// };

export default HomePage;
