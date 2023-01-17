import { useLoaderData, useNavigation } from 'react-router-dom';
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

export const toggleSeason = () => {
  // if (season === 'summer') {
  //   season = 'winter';
  //   console.log('summer');
  // } else if (season === 'winter') {
  //   season = 'summer';
  //   console.log('winter');
  // }
  // console.log('click');
};
const Home = () => {
  const season = useLoaderData();
  const navigation = useNavigation();
  console.log(season);

  if (navigation.state === 'loading') {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      Home<p>{season}</p>
      <button onClick={toggleSeason}>Change Season</button>
    </div>
  );
};

export default Home;
