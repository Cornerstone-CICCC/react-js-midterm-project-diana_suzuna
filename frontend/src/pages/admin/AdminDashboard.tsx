import { useUser } from "../../contexts/user/UseUser";
import { useNavigate } from "react-router";

const AdminDashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      logout();
      navigate("/auth");
    }
  };

  return (
    <main className="pt-24 pb-20 md:pb-15 px-20 max-w-[1440px] mx-auto">
      {/* <!-- Header Section: Admin Profile Card --> */}
      <section className="mb-xl">
        <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] flex flex-col md:flex-row items-center md:items-start gap-8 border border-outline-variant/20">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">
                Hello {!user ? "Admin" : user.fullname}
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
      <section className="flex justify-center mt-xl">
        <button
          className="flex items-center gap-2 bg-on-surface-variant/5 text-error px-xl py-md rounded-full font-bold hover:bg-error-container/20 active:scale-95 transition-all"
          onClick={handleLogout}
        >
          <span className="material-symbols-outlined">logout</span>
          Logout from Account
        </button>
      </section>
    </main>
  );
};

export default AdminDashboard;
