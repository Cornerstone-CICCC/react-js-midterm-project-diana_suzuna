import { useTheme } from "../contexts/theme/UseTheme";
import { Link } from "react-router";
import { useCart } from "../contexts/cart/UseCart";

// Reaact-icons
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Header = () => {
  const { isDark, setIsDark } = useTheme();
  const { cart } = useCart();

  const totalItemsCount = cart.reduce(
    (sum, item) => sum + (item.quantity ?? 0),
    0,
  );

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center gap-2 p-2 dark:bg-neutral-900 dark:text-white">
      <Link to={"/"} className="logo flex items-center gap-2">
        <span
          className="material-symbols-outlined text-primary dark:text-primary-fixed"
          data-icon="pets"
        >
          <MdOutlinePets />
        </span>
        <h1 className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary-fixed">
          PetParty
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          to={"/cart"}
          className="hover:opacity-80 transition-opacity active:scale-95 transition-transform"
        >
          <div className="relative p-2">
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[11px] font-bold text-white shadow-sm ring-2 ring-surface animate-bounce-short">
                {totalItemsCount}
              </span>
            )}
            <span
              className="material-symbols-outlined text-on-surface-variant dark:text-white"
              data-icon="shopping_cart"
            >
              <MdOutlineShoppingCart />
            </span>
          </div>
        </Link>
        <button onClick={toggleTheme}>
          {isDark ? (
            <span className="material-symbols-outlined text-on-surface-variant dark:text-white">
              <FiSun />
            </span>
          ) : (
            <span className="material-symbols-outlined text-on-surface-variant dark:text-white">
              <FaRegMoon />
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
