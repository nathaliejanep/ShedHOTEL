import { useContext } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Context } from '../../context/SeasonContext';

const Home = () => {
  const { season } = useContext(Context);

  const navigation = useNavigation();
  console.log(season);

  if (navigation.state === 'loading') {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      Home<p>{season}</p>
    </div>
  );
};

export default Home;
