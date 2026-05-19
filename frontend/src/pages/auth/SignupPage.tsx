import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignupPage = () => {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:4001/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          password: password,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || "Signup failed");
        return;
      }

      // navigate("/auth");

      const data = await res.json();

      if (data.role === "admin") {
        navigate("/admin_dashboard");
      } else {
        navigate("/auth");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong with the network.");
    }
  };

  return (
    <main
      className="pt-16 min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center"
      data-alt="A warm and inviting lifestyle photograph of a fluffy golden retriever sitting peacefully in a sun-drenched modern living room with soft cream walls and wooden floors. The lighting is high-key and natural, creating a gentle and empathetic atmosphere that aligns with the PetHaven brand. The image has a subtle depth-of-field effect, focusing on the dog's expressive face while the background remains softly blurred."
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      <div className="relative w-full max-w-md px-margin-mobile py-xl z-10">
        <div className="bg-surface rounded-xl p-md organic-card md:p-lg">
          <div className="text-center mb-lg">
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              Create an Account
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Join our community of pet lovers today.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-sm">
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-on-surface ml-1">
                Full Name
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg bg-surface-container border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline transition-all"
                placeholder="John Doe"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-on-surface ml-1">
                Email Address
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg bg-surface-container border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline transition-all"
                placeholder="hello@petParty.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
              <div className="space-y-1">
                <label className="font-label-md text-label-md text-on-surface ml-1">
                  Password
                </label>
                <input
                  className="w-full h-12 px-4 rounded-lg bg-surface-container border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline transition-all"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="font-label-md text-label-md text-on-surface ml-1">
                  Confirm Password
                </label>
                <input
                  className="w-full h-12 px-4 rounded-lg bg-surface-container border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline transition-all"
                  placeholder="••••••••"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="pt-2">
              <button
                className="w-full h-12 bg-secondary text-on-secondary font-label-md text-label-md rounded-full squishy-button hover:opacity-90 active:scale-95 transition-all shadow-md"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="mt-xl text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Already have an account?
              <Link
                to={"/auth"}
                className="text-primary font-bold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-md text-center">
          <p className="text-on-surface-variant font-label-sm text-label-sm opacity-80">
            By signing up, you agree to our
            <a className="underline" href="#">
              Terms of Service
            </a>{" "}
            and
            <a className="underline" href="#">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
