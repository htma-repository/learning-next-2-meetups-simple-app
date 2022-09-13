import React from "react";
import MeetupList from "../components/meetups/MeetupList";

import { meetupData } from "../utils/dummy-meetup";

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps = () => {
  return {
    props: {
      meetups: meetupData,
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
