import React from "react";
import Head from "next/head";
import { ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";
import { useMongoClient } from "../../hooks/useMongoClient";

const MeetupDetailPage = ({ meetupDetail }) => {
  return (
    <>
      <Head>
        <title>{meetupDetail.title}</title>
        <meta name="description" content={meetupDetail.description} />
      </Head>
      <MeetupDetail {...meetupDetail} />
    </>
  );
};

export const getStaticPaths = async () => {
  const { meetUpCollection, client } = await useMongoClient();

  const getMeetupId = await meetUpCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: getMeetupId.map((meetId) => {
      return {
        params: {
          meetupId: meetId._id.toString(),
        },
      };
    }),
  };
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;

  const { meetUpCollection, client } = await useMongoClient();

  const selectedMeetup = await meetUpCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  const { _id, image, title, address, description } = selectedMeetup;

  return {
    props: {
      meetupDetail: {
        id: _id.toString(),
        image,
        title,
        address,
        description,
      },
    },
  };
};

export default MeetupDetailPage;
