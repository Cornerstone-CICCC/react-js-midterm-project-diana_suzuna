import { useState } from 'react';
import { useUser } from '../../contexts/user/UseUser';
import { useNavigate, Link } from 'react-router';

const AdminDashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <main className="pt-24 pb-20 px-20 max-w-[1440px] mx-auto min-h-screen">
      {/* <!-- Header Section: Admin Profile Card --> */}
      <section className="mb-xl">
        <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] flex flex-col md:flex-row items-center md:items-start gap-8 border border-outline-variant/20">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">
                Welcome, Admin
              </h2>
              <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-label-sm uppercase tracking-widest text-[10px]">
                <span
                  className="material-symbols-outlined text-[14px]"
                  data-icon="verified_user"
                >
                  verified_user
                </span>
                System Administrator
              </span>
            </div>
          </div>
        </div>
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

export default AdminDashboard;
