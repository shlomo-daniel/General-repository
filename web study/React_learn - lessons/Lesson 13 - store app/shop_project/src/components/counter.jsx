export function Counter({ id, quantity, instock, onChange }) {
  const isMax = quantity >= instock;
  const noStock = instock === 0;
  const min = quantity === 0;

  const increment = () => {
    if (isMax) {
      return;
    }
    onChange(id, quantity + 1);
  };
  const decrement = () => {
    if (min) {
      return;
    }
    onChange(id, quantity - 1);
  };

  return (
    <div className="mx-auto my-3">
      <button style={{ border: "none" }} onClick={increment}>
        ➕
      </button>
      <span className="mx-3">{noStock ? "no stock" : quantity}</span>
      <button style={{ border: "none" }} onClick={decrement}>
        ➖
      </button>
    </div>
  );
}
export default Counter;
