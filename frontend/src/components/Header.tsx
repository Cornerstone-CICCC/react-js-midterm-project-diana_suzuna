// import HeaderCounter from "./HeaderCounter";
// import { useTheme } from "../contexts/theme/UseTheme";
// import { Link } from "react-router";

// Reaact-icons
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  // const { isDark } = useTheme();

  return (
    <header className="flex justify-between items-center gap-2 p-2">
      <div className="logo flex items-center gap-2">
        <span
          className="material-symbols-outlined text-primary dark:text-primary-fixed"
          data-icon="pets"
        >
          <MdOutlinePets />
        </span>
        <h1 className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary-fixed">
          PetParty
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform">
          <span
            className="material-symbols-outlined text-on-surface-variant"
            data-icon="shopping_cart"
          >
            <MdOutlineShoppingCart />
          </span>
        </button>
      </div>
      {/* <nav>
        <ul className="flex gap-5 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/products/cart">Cart</Link>
          </li>
        </ul>
      </nav> */}
      {/* <HeaderCounter /> */}
      {/* <div>
        <h3>Theme: {isDark ? "DARK" : "LIGHT"}</h3>
      </div> */}
    </header>
  );
};

export default Header;
