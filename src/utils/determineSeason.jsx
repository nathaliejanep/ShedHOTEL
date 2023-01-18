let season;
export const determineSeason = () => {
  const date = new Date();

  const month = date.getMonth();

  if (month <= 3) {
    season = 'winter';
  } else if (month >= 10 && month <= 11) {
    season = 'winter';
  } else if (month >= 4 && month <= 9) {
    season = 'summer';
  }

  return season;
};
