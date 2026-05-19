import { Link } from "react-router";
import { useUser } from "../contexts/user/UseUser";
import { useCart } from "../contexts/cart/UseCart";

// Reaact-icons
import { RiHomeSmileLine } from "react-icons/ri";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const BottomNavBar = () => {
  const { user } = useUser();
  const { cart } = useCart();

  const totalItemsCount = cart.reduce(
    (sum, item) => sum + (item.quantity ?? 0),
    0,
  );
  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface-container-lowest dark:bg-neutral-900 dark:text-white shadow-lg rounded-t-xl">
      <Link
        to={"/"}
        className={`flex flex-col items-center justify-center text-on-surface-variant hover:bg-secondary-container transition-colors px-4 py-1 rounded-full active:scale-110 transition-transform duration-200`}
      >
        {/* bg-secondary-container text-on-secondary-container */}
        <span
          className="material-symbols-outlined dark:text-white"
          data-icon="home"
        >
          <RiHomeSmileLine />
        </span>
        <span className="font-label-md text-label-md dark:text-white">
          Home
        </span>
      </Link>
      <Link
        to={"products"}
        className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-secondary-container transition-colors px-4 py-1 rounded-full active:scale-110 transition-transform duration-200"
      >
        <span
          className="material-symbols-outlined dark:text-white"
          data-icon="shop"
        >
          <RiShoppingBag4Line />
        </span>
        <span className="font-label-md text-label-md dark:text-white">
          Shop
        </span>
      </Link>
      <Link
        to={"cart"}
        className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-secondary-container transition-colors px-4 py-1 rounded-full active:scale-110 transition-transform duration-200"
      >
        <div className="relative p-2">
          {totalItemsCount > 0 && (
            <span className="absolute -top-1 -tight-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[11px] font-bold text-white shadow-sm ring-2 ring-surface animate-bounce-short">
              {totalItemsCount}
            </span>
          )}
          <span
            className="material-symbols-outlined dark:text-white"
            data-icon="shopping_cart"
          >
            <MdOutlineShoppingCart />
          </span>
        </div>
        <span className="font-label-md text-label-md dark:text-white">
          Cart
        </span>
      </Link>
      <Link
        to={
          user
            ? user.role === "admin"
              ? "/admin_dashboard"
              : "/customer_dashboard"
            : "/auth"
        }
        className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-secondary-container transition-colors px-4 py-1 rounded-full active:scale-110 transition-transform duration-200"
      >
        <span
          className="material-symbols-outlined dark:text-white"
          data-icon="profile"
        >
          <CgProfile />
        </span>
        <span className="font-label-md text-label-md dark:text-white">
          Profile
        </span>
      </Link>
    </nav>
  );
};

export default BottomNavBar;
