import Filters from '../components/Home/Filters';
import PizzaBlock from '../components/Home/PizzaBlock';

export default function Home() {
  return (
    <div className='container'>
      <Filters />

      <PizzaBlock />
    </div>
  );
}
