import { Link } from "react-router";

const SignupPage = () => {
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
          <form className="space-y-sm">
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-on-surface ml-1">
                Full Name
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg bg-surface-container border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline transition-all"
                placeholder="John Doe"
                type="text"
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
          <div className="relative my-lg">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant"></div>
            </div>
            <div className="relative flex justify-center text-label-sm">
              <span className="bg-surface px-4 text-on-surface-variant font-label-sm uppercase tracking-wider">
                Or sign up with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors active:scale-95">
              <svg className="w-5 h-5">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
              <span className="font-label-md text-label-md">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors active:scale-95">
              <svg className="w-5 h-5" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
              <span className="font-label-md text-label-md">Facebook</span>
            </button>
          </div>
          <div className="mt-xl text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Already have an account?
              <Link
                to={"/login"}
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
