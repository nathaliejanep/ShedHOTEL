let winter;
export const determineSeason = () => {
  const date = new Date();

  const month = date.getMonth();

  if (month <= 3) {
    winter = true;
  } else if (month >= 10 && month <= 11) {
    winter = true;
  } else if (month >= 4 && month <= 9) {
    //summer
    winter = false;
  }

  return winter;
};
