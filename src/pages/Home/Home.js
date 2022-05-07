import { CoinTable } from 'components';
import { Graph } from 'components';
import { MainDiv } from './Home.styles';

const Home = (props) => {
  return (
    <MainDiv>
      <h2>Your overview</h2>
      <h2>Your overview</h2>
      <CoinTable currencyName={props.currencyName} />
    </MainDiv>
  );
};

export default Home;
