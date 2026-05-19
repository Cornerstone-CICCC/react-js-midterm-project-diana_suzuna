import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../../contexts/user/UseUser";

const LoginPage = () => {
  const { setUser } = useUser();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    // const res = await loginUser({ email, password });

    // const mockUser = {
    //   fullname: "John Doe",
    //   email: "test@test.com",
    //   password: "Password123!",
    //   role: "customer",
    // };

    // if (mockUser.role === "admin") {
    //   navigate("/admin_dashboard");
    // } else {
    //   navigate("/customer_dashboard");
    // }

    try {
      const res = await fetch("http://localhost:4001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || "Login failed");
        return;
      }

      const data = await res.json();
      setUser(data);

      if (data.role === "admin") {
        navigate("/admin_dashboard");
      } else {
        navigate("/customer_dashboard");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong with the network.");
    }
  };

  return (
    <main className="w-full max-w-max-width mx-auto px-margin-mobile pt-24 pb-12 flex items-center justify-center z-10">
      <div className="bg-surface-container-lowest dark:bg-surface-container rounded-[2rem] shadow-lg flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
        {/* <!-- Form Column --> */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col">
          {/* <!-- Toggle Container --> */}
          <div className="bg-surface-container-low rounded-full p-1.5 flex mb-8 w-fit mx-auto md:mx-0">
            <button className="px-8 py-2.5 rounded-full font-label-md text-label-md bg-secondary text-white shadow-sm transition-all duration-300">
              Login
            </button>
            <Link
              to={"/auth/signup"}
              className="px-8 py-2.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-highest transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
          <div className="mb-8">
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              Welcome
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Access your account and track your pet's needs.
            </p>
          </div>
          {/* <!-- Form Fields --> */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface ml-1">
                Email Address
              </label>
              <div className="relative">
                <span
                  className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline"
                  data-icon="mail"
                >
                  mail
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-transparent rounded-xl focus:border-primary focus:ring-0 font-body-md text-body-md transition-all"
                  placeholder="hello@petParty.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface ml-1">
                  Password
                </label>
              </div>
              <div className="relative">
                <span
                  className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline"
                  data-icon="lock"
                >
                  lock
                </span>
                <input
                  className="w-full pl-12 pr-12 py-4 bg-surface-container-low border-transparent rounded-xl focus:border-primary focus:ring-0 font-body-md text-body-md transition-all"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="w-full bg-secondary text-white py-4 rounded-xl font-label-md text-label-md hover:bg-secondary/90 transition-all active:scale-[0.98] shadow-md shadow-secondary/10 flex items-center justify-center gap-2"
              type="submit"
            >
              Login to PetParty
              <span
                className="material-symbols-outlined text-sm"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </button>
          </form>
          <p className="mt-auto pt-12 text-center font-body-md text-body-md text-on-surface-variant">
            Don't have an account?
            <Link
              to={"/auth/signup"}
              className="text-primary font-bold hover:underline"
            >
              Create an account
            </Link>
          </p>
          <p className="mt-auto pt-12 text-center font-body-md text-body-md text-on-surface-variant">
            Go to home
            <Link to={"/"} className="text-primary font-bold hover:underline">
              without login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
