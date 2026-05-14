import { Link } from "react-router";

// Reaact-icons
import { RiHomeSmileLine } from "react-icons/ri";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface-container-lowest dark:bg-surface-container-high shadow-lg rounded-t-xl">
      <Link
        to={"/"}
        className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-secondary-container transition-colors px-4 py-1 rounded-full active:scale-110 transition-transform duration-200"
      >
        {/* bg-secondary-container text-on-secondary-container */}
        <span className="material-symbols-outlined" data-icon="home">
          <RiHomeSmileLine />
        </span>
        <span className="font-label-md text-label-md">Home</span>
      </Link>
      <Link
        to={"products"}
        className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-secondary-container transition-colors px-4 py-1 rounded-full active:scale-110 transition-transform duration-200"
      >
        <span className="material-symbols-outlined" data-icon="shop">
          <RiShoppingBag4Line />
        </span>
        <span className="font-label-md text-label-md">Shop</span>
      </Link>
      <Link
        to={"cart"}
        className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-secondary-container transition-colors px-4 py-1 rounded-full active:scale-110 transition-transform duration-200"
      >
        <span className="material-symbols-outlined" data-icon="shopping_cart">
          <MdOutlineShoppingCart />
        </span>
        <span className="font-label-md text-label-md">Cart</span>
      </Link>
      <Link
        to={"customer_dashboard"}
        className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-secondary-container transition-colors px-4 py-1 rounded-full active:scale-110 transition-transform duration-200"
      >
        <span className="material-symbols-outlined" data-icon="profile">
          <CgProfile />
        </span>
        <span className="font-label-md text-label-md">Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNavBar;
