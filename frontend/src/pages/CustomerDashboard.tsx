import { useUser } from '../contexts/user/UseUser';
import { useCart } from '../contexts/cart/UseCart';
import { useNavigate, Link } from 'react-router';
import { useRecently } from '../contexts/recently/UseRecently';
import { useState } from 'react';

const CustomerDashboard = () => {
  const { user, logout } = useUser();
  const { setCart } = useCart();
  const navigate = useNavigate();
  const { recentProducts } = useRecently();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    logout();
    setCart([]);
    navigate('/auth');
  };

  return (
    <main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto min-h-screen">
      {/* <!-- Welcome Section --> */}
      <section className="mb-lg">
        <h1 className="font-display-lg text-display-lg text-primary mb-2 dark:text-primary-fixed">
          {user ? `Welcome back! ${user.fullname}` : 'Welcome to Pet Party!'}
        </h1>
        <p className="text-on-surface-variant font-body-lg dark:text-white">
          It's a great day to pamper your furry friends.
        </p>
      </section>
      {/* <!-- Quick Links Bento Grid --> */}
      <section className="grid sm:grid-cols-1 md:grid-cols-4 gap-gutter mb-xl">
        {/* <!-- My Orders --> */}
        <a
          className="group relative overflow-hidden bg-surface-container-lowest p-md rounded-xl squishy-shadow hover:translate-y-[-4px] transition-all border border-outline-variant/30 flex flex-col items-center text-center"
          href="#"
        >
          <div className="w-12 h-12 bg-primary-container/20 text-primary rounded-full flex items-center justify-center mb-sm">
            <span className="material-symbols-outlined">package_2</span>
          </div>
          <span className="font-headline-md text-headline-md text-primary">
            My Orders
          </span>
          <p className="text-label-sm text-on-surface-variant mt-xs">
            Track &amp; manage orders
          </p>
        </a>
        {/* <!-- Saved Pets --> */}
        <a
          className="group relative overflow-hidden bg-surface-container-lowest p-md rounded-xl squishy-shadow hover:translate-y-[-4px] transition-all border border-outline-variant/30 flex flex-col items-center text-center"
          href="#"
        >
          <div className="w-12 h-12 bg-secondary-container/20 text-secondary rounded-full flex items-center justify-center mb-sm">
            <span className="material-symbols-outlined">favorite</span>
          </div>
          <span className="font-headline-md text-headline-md text-secondary">
            Saved Pets
          </span>
          <p className="text-label-sm text-on-surface-variant mt-xs">
            Your future companions
          </p>
        </a>
        {/* <!-- Shipping Addresses --> */}
        <a
          className="group relative overflow-hidden bg-surface-container-lowest p-md rounded-xl squishy-shadow hover:translate-y-[-4px] transition-all border border-outline-variant/30 flex flex-col items-center text-center"
          href="#"
        >
          <div className="w-12 h-12 bg-tertiary-container/20 text-tertiary rounded-full flex items-center justify-center mb-sm">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <span className="font-headline-md text-headline-md text-tertiary">
            Shipping
          </span>
          <p className="text-label-sm text-on-surface-variant mt-xs">
            Manage your locations
          </p>
        </a>
        {/* <!-- Payment Methods --> */}
        <a
          className="group relative overflow-hidden bg-surface-container-lowest p-md rounded-xl squishy-shadow hover:translate-y-[-4px] transition-all border border-outline-variant/30 flex flex-col items-center text-center"
          href="#"
        >
          <div className="w-12 h-12 bg-on-surface-variant/10 text-on-surface-variant rounded-full flex items-center justify-center mb-sm">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <span className="font-headline-md text-headline-md text-on-surface-variant">
            Payments
          </span>
          <p className="text-label-sm text-on-surface-variant mt-xs">
            Manage cards &amp; wallet
          </p>
        </a>
      </section>
      {/* <!-- Recently Viewed --> */}
      <section className="mb-xl">
        <div className="flex items-center justify-between mb-md">
          <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-white">
            Recently Viewed
          </h2>
        </div>

        {recentProducts.length === 0 ? (
          <p className="text-on-surface-variant font-body-md dark:text-white">
            No recently viewed products yet.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-gutter">
            {recentProducts.map((product) => (
              <Link
                to={`/products/${product._id}`}
                key={product._id}
                className="group bg-surface-container-lowest rounded-xl p-sm squishy-shadow border border-outline-variant/20 hover:scale-[1.02] transition-transform"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-sm">
                  <img
                    className="w-full h-full object-cover"
                    src={product.image}
                    alt={product.item_name}
                  />
                </div>
                <h3 className="front-headline-md text-body-lg text-on-surface truncate">
                  {product.item_name}
                </h3>
                <p className="text-secondary font-bold">${product.price}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
      {/* <!-- Logout Action --> */}
      {user ? (
        <section className="flex justify-center mt-xl">
          <button
            className="flex items-center gap-2 bg-on-surface-variant/5 text-error px-xl py-md rounded-full font-bold hover:bg-error-container/20 active:scale-95 transition-all dark:bg-neutral-900"
            onClick={handleLogout}
          >
            <span className="material-symbols-outlined">logout</span>
            Logout from Account
          </button>
        </section>
      ) : (
        <Link
          to="/auth"
          className="flex items-center gap-2 bg-primary text-on-primary px-xl py-md rounded-full font-bold hover:opacity-90 active:scale-95 transition-all shadow-md no-underline"
        >
          <span className="material-symbols-outlined">login</span>
          Login / Signup to Account
        </Link>
      )}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-surface rounded-2xl p-lg shadow-xl max-w-sm w-full mx-4 flex flex-col gap-md">
            <h2 className="front-headline-lg text-headline-lg text-on-surface">
              Are you sure you want to logout?
            </h2>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-lg py-sm rounded-full font-label-md text-label-ms bg-surface-container text-on-surface hover:bg-surface-container-high transition-all"
              >
                Cancel
              </button>

              <button
                onClick={confirmLogout}
                className="px-lg py-sm rounded-full font-label-md text-label-md bg-error text-on-error hover:opacity-90 active:scale-95 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CustomerDashboard;
