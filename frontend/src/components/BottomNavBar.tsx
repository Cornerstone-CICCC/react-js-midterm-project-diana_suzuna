import { RiHomeSmileLine } from "react-icons/ri";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface-container-lowest dark:bg-surface-container-high shadow-lg rounded-t-xl">
      <button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-110 transition-transform duration-200">
        <span
          className="material-symbols-outlined"
          data-icon="home"
          // style="font-variation-settings: 'FILL' 1;"
        >
          <RiHomeSmileLine />
        </span>
        <span className="font-label-md text-label-md">Home</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors px-4 py-1 rounded-full active:scale-110 transition-transform duration-200">
        <span className="material-symbols-outlined" data-icon="shop">
          <RiShoppingBag4Line />
        </span>
        <span className="font-label-md text-label-md">Shop</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors px-4 py-1 rounded-full active:scale-110 transition-transform duration-200">
        <span className="material-symbols-outlined" data-icon="shopping_cart">
          <MdOutlineShoppingCart />
        </span>
        <span className="font-label-md text-label-md">Cart</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors px-4 py-1 rounded-full active:scale-110 transition-transform duration-200">
        <span className="material-symbols-outlined" data-icon="profile">
          <CgProfile />
        </span>
        <span className="font-label-md text-label-md">Profile</span>
      </button>
    </nav>
  );
};

export default BottomNavBar;
