import { wishes } from '../mockData';
import WishCard from '../components/Wishcard';

const ViewWishes = () => (
  <section>
    <h2>All Wishes</h2>
    {wishes.map(wish => <WishCard key={wish.id} wish={wish} />)}
  </section>
);

export default ViewWishes;
