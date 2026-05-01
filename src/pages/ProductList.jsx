import { useLoaderData } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

export default function ProductList() {
  const data = useLoaderData();
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      <h2>Product List</h2>

      {data.products.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}