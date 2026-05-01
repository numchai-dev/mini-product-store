import { useLoaderData } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

export default function ProductDetail() {
  const product = useLoaderData();
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>

      <p>Price: {product.price}</p>

      <p>{product.description}</p>

      <button
        onClick={() => {
          addToCart(product);
          alert("Added to cart!");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}