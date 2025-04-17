const WishCard = ({ wish }) => (
  <article>
    <h3>{wish.name}</h3>
    <p><strong>Need:</strong> {wish.need}</p>
    <p><strong>Priority:</strong> {wish.priority}</p>
    <p><strong>Deadline:</strong> {wish.deadline}</p>
    <button>Fulfill Wish</button>
  </article>
);

export default WishCard;
