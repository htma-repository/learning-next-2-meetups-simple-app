import React from "react";
import { useRouter } from "next/router";

import MeetupDetail from "../../components/meetups/MeetupDetail";

import { meetupData } from "../../utils/dummy-meetup";

const MeetupDetailPage = ({ meetupDetail }) => {
  // const { query } = useRouter();

  // const newMeetupData = meetupData.filter((meetup) => {
  //   return meetup.id === query.meetupId;
  // });

  console.log(meetupDetail);

  return <MeetupDetail {...meetupDetail} />;
};

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        // this only for learning, in real project, this params dynamically generate from fetch API
        params: {
          meetupId: "m-1",
        },
      },
      {
        // this only for learning, in real project, this params dynamically generate from fetch API
        params: {
          meetupId: "m-2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;
  console.log(
    "🚀 ~ file: index.jsx ~ line 35 ~ getStaticProps ~ meetupId",
    meetupId
  );
  // this only for learning, in real project, this return value dynamically generate from fetch API
  return {
    props: {
      meetupDetail: {
        id: meetupId,
        image: "https://picsum.photos/1280/720",
        title: `meetup data title-${meetupId}`,
        address: `address-${meetupId}`,
      },
    },
  };
};

export default MeetupDetailPage;
