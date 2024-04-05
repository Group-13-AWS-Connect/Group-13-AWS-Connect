import React from "react";

const todaysDate = () => {
  const now = new window.Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);

  const day = now.getDate();
  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  } else if (day === 2 || day === 22) {
    suffix = "nd";
  } else if (day === 3 || day === 23) {
    suffix = "rd";
  }

  return `Today is ${formattedDate}${suffix}`;
};

export default todaysDate;
