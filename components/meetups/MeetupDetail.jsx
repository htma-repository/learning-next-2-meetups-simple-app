import React from "react";

import classes from "./MeetupDetail.module.css";

const MeetupDetail = ({ image, title, address }) => {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <span>{address}</span>
    </section>
  );
};

export default MeetupDetail;
