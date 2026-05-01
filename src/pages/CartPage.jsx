import { useCartStore } from "../stores/cartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const total = cart.reduce((sum, item) => {
    return sum + item.price * (item.qty ?? 1);
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart Page</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <p>{item.title}</p>

              <p>
                {item.price} x {item.qty ?? 1}
              </p>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <hr />

          <h3>Total: {total}</h3>
        </>
      )}
    </div>
  );
}