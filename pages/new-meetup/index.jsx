import React from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { meetupData } from "../../utils/dummy-meetup";

const NewMeetup = () => {
  const meetUpAddHandler = (meetup) => {
    meetupData.unshift(meetup);
  };

  return <NewMeetupForm onAddMeetup={meetUpAddHandler} />;
};

export default NewMeetup;
