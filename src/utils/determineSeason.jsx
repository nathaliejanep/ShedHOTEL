export const determineSeason = () => {
  let winter;
  const date = new Date();
  const month = date.getMonth();
  console.log(winter);
  // January - April
  if (month <= 4) {
    winter = true;

    // October - December
  } else if (month >= 10 && month <= 12) {
    winter = true;

    // May - September
  } else if (month >= 5 && month <= 9) {
    //summer
    winter = false;
  }

  return (winter = true);
};
