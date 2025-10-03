export const determineSeason = () => {
  const date = new Date();
  const month = date.getMonth();

  let winter = true; // default to winter

  // January - April
  if (month <= 3) {
    winter = true;

    // October - December
  } else if (month >= 9 && month <= 11) {
    winter = true;

    // May - September
  } else if (month >= 5 && month <= 8) {
    //summer
    winter = false;
  }

  return winter;
};
