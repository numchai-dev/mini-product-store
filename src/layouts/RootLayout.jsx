import { Link, Outlet } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

export default function RootLayout() {
  const cart = useCartStore((state) => state.cart);

  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          Cart ({cart.length})
        </Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}