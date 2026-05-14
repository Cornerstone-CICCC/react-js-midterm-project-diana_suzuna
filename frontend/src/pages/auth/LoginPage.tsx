import { Link } from "react-router";

const LoginPage = () => {
  return (
    <main className="w-full max-w-max-width mx-auto px-margin-mobile pt-24 pb-12 flex items-center justify-center z-10">
      <div className="bg-surface-container-lowest dark:bg-surface-container rounded-[2rem] shadow-lg flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
        {/* <!-- Side Visual Column (Desktop Only) --> */}
        <div className="hidden md:flex md:w-1/2 relative bg-primary-container p-12 flex-col justify-end overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
            data-alt="A warm, heart-warming professional photograph of a golden retriever smiling directly into the camera in a sun-drenched living room. The lighting is soft and golden, highlighting the texture of the dog's fur and creating a sense of empathetic companionship. The background is a minimalist, airy domestic setting with soft neutral tones that align with the brand's tactile minimalism aesthetic."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWCCe290ctD05Gw_m2L-pwXvfFaUOryG68jvgCdN0n-AVegFCeqA8SveCCVI-Q7ycaClEQo-WFfn8fVBrlkxlRcy9YNkpMT1j9QGBby5mUVj_VyDiMb0pqsZfM-9mThRcB6VNPmiRHoBKY1KLFfpEMjG_cJNP3Por0eR-KYAn79EAm-4t6pU9lDpUiys1RYoZUF-X3UwRjKBVcESzUVXc0uf0OROfxQyK7gTXinQSjb8tMKLcevIoESa_foPG01pmtjfF1MAzEDqjI"
          />
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg text-white mb-4">
              Every paw deserves a home.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-md">
              Join our community of pet lovers and discover premium care for
              your best friend.
            </p>
          </div>
          <div className="absolute top-8 right-8 z-10 bg-secondary-container/90 backdrop-blur-md rounded-xl p-4 shadow-xl">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-on-secondary-container"
                data-icon="star"
                data-weight="fill"
              >
                star
              </span>
              <span className="font-label-md text-label-md text-on-secondary-container">
                4.9/5 Service Rating
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Form Column --> */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col">
          {/* <!-- Toggle Container --> */}
          <div className="bg-surface-container-low rounded-full p-1.5 flex mb-8 w-fit mx-auto md:mx-0">
            <button className="px-8 py-2.5 rounded-full font-label-md text-label-md bg-secondary text-white shadow-sm transition-all duration-300">
              Login
            </button>
            <Link
              to={"/signup"}
              className="px-8 py-2.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-highest transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
          <div className="mb-8">
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              Welcome Back
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Access your account and track your pet's needs.
            </p>
          </div>
          {/* <!-- Form Fields --> */}
          <form className="space-y-6">
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
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface ml-1">
                  Password
                </label>
                <a
                  className="font-label-sm text-label-sm text-primary hover:underline"
                  href="#"
                >
                  Forgot Password?
                </a>
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
                />
                <span
                  className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline cursor-pointer hover:text-on-surface"
                  data-icon="visibility"
                >
                  visibility
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input
                className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20"
                id="remember"
                type="checkbox"
              />
              <label
                className="font-body-md text-body-md text-on-surface-variant select-none"
                // for="remember"
              >
                Remember me for 30 days
              </label>
            </div>
            <button
              className="w-full bg-secondary text-white py-4 rounded-xl font-label-md text-label-md hover:bg-secondary/90 transition-all active:scale-[0.98] shadow-md shadow-secondary/10 flex items-center justify-center gap-2"
              type="button"
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
          {/* <!-- Social Options --> */}
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-outline-variant"></div>
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-outline-variant"></div>
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
          </div>
          <p className="mt-auto pt-12 text-center font-body-md text-body-md text-on-surface-variant">
            Don't have an account?
            <Link
              to={"/signup"}
              className="text-primary font-bold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
