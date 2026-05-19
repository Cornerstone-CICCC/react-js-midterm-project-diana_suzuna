import { useUser } from "../contexts/user/UseUser";
import { useCart } from "../contexts/cart/UseCart";
import { useNavigate, Link } from "react-router";

const CustomerDashboard = () => {
  const { user, logout } = useUser();
  const { setCart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      logout();
      setCart([]);
      navigate("/auth");
    }
  };

  return (
    <main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto min-h-screen">
      {/* <!-- Welcome Section --> */}
      <section className="mb-lg">
        <h1 className="font-display-lg text-display-lg text-primary mb-2 dark:text-primary-fixed">
          {user ? `Welcome back!` : "Welcome to Pet Party!"}
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
          <button className="text-primary font-bold text-label-md hover:underline">
            View All
          </button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-gutter">
          {/* <!-- Product 1 --> */}
          <div className="group bg-surface-container-lowest rounded-xl p-sm squishy-shadow border border-outline-variant/20 hover:scale-[1.02] transition-transform">
            <div className="aspect-square rounded-lg overflow-hidden mb-sm relative">
              <img
                className="w-full h-full object-cover"
                data-alt="A studio shot of a high-quality, plush teal dog bed on a clean, light-colored wooden floor. The lighting is soft and ambient, creating a cozy and luxurious mood. The style is minimalist and clean, highlighting the texture of the fabric against a warm cream background that aligns with the PetHaven tactile minimalist aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCENOPHL3_MWpD7bdfcbggiQ6_UkpzdWzzAbSFAsiVSxr8_MQgonJeTOhlDTq0omNaGCagk4ELH0MaYdkppQmu6owx2z1h7S6sR9pMzwj8tbD7Xto-mxa55aj_Y-DUIT4plGs4lWH94ARawOLnb65WD-fkbncfE4IWgwCXo4x9j6NxDp7iUBj-yOiTHIC_G6LHCrSxNyjf6Mqf3qtwr2jz2Z3xYdSY9f7EEV2hFSNv3aMJ7jbVgNDqxhfCCpGpubOlCF6a1gIxHz7Aq"
              />
              <span className="absolute top-2 right-2 bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-label-sm">
                Natural
              </span>
            </div>
            <h3 className="font-headline-md text-body-lg text-on-surface truncate">
              Premium Orthopedic Bed
            </h3>
            <p className="text-secondary font-bold">$89.00</p>
          </div>
          {/* <!-- Product 2 --> */}
          <div className="group bg-surface-container-lowest rounded-xl p-sm squishy-shadow border border-outline-variant/20 hover:scale-[1.02] transition-transform">
            <div className="aspect-square rounded-lg overflow-hidden mb-sm">
              <img
                className="w-full h-full object-cover"
                data-alt="A portrait of a playful Golden Retriever puppy sitting in a sunlit modern living room. The puppy has a happy expression, and the lighting is warm and natural, casting soft shadows. The overall aesthetic is bright, airy, and premium, using the organic curves and warm palette characteristic of the PetHaven brand identity."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7krYzegsZ9I8Apk7esa2jr6_XMqfCVyikR6r6W4bBBZAFg6rZE14-8_EN1Dh8YAYjVLZfLgQBNpEUo2ChlDjf2t95pn1-h1ohOLKYcpjYrrbZLKV789n6Fz1z7byGWONGcw5iTyj1OwQrPF_cuawZeSPiVSiCviNwevGMlEkcU403uze6wCFLF2GdfU2ZyvFCut-cj5TCtMrbJgcZiAFe6zxiiOMc8lBXQ-O9yxMTbFBUwVMJ9GXB55deqFdMPSu3d_BmbeEkxjec"
              />
            </div>
            <h3 className="font-headline-md text-body-lg text-on-surface truncate">
              Golden Retriever Pup
            </h3>
            <p className="text-secondary font-bold">$1,200.00</p>
          </div>
          {/* <!-- Product 3 --> */}
          <div className="group bg-surface-container-lowest rounded-xl p-sm squishy-shadow border border-outline-variant/20 hover:scale-[1.02] transition-transform">
            <div className="aspect-square rounded-lg overflow-hidden mb-sm relative">
              <img
                className="w-full h-full object-cover"
                data-alt="Close-up of premium organic cat treats in a stylish, minimalist ceramic bowl. The scene is lit with bright, soft studio lighting to emphasize the natural ingredients. The color scheme is dominated by earthy browns and soft creams, fitting perfectly with the brand's sophisticated e-commerce feel."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvOt-nuxKu-iwnCbGB-RhEAnJDUnQF59OUXIL7T3-rbfl-jLqLRdgldaAQoBBF8JSAwJRbuLXJNz4m3IThDaXqFpnmM0b0tA2eDA5iPRhuvQZAqxcMASOJZ4mueXsfQjLqWBZm36JbRo93Vncgw_0weYqHRjl68dbSA47ffwXv_EJS66rzX_jTD_l8evfemejD_W3FlVm04XP_NK_eJvDfUjZjP6p1vRGCbtEn9bRanW5muxtJRgsJ9VFX4BaN2w3idnFd5vi9i2Cs"
              />
              <span className="absolute top-2 right-2 bg-primary-container text-on-primary-container px-2 py-1 rounded-full text-label-sm">
                Organic
              </span>
            </div>
            <h3 className="font-headline-md text-body-lg text-on-surface truncate">
              Salmon Crunchy Bites
            </h3>
            <p className="text-secondary font-bold">$15.50</p>
          </div>
          {/* <!-- Product 4 --> */}
          <div className="group bg-surface-container-lowest rounded-xl p-sm squishy-shadow border border-outline-variant/20 hover:scale-[1.02] transition-transform">
            <div className="aspect-square rounded-lg overflow-hidden mb-sm">
              <img
                className="w-full h-full object-cover"
                data-alt="A stylish, modern automatic pet feeder made of high-quality white and gray plastic. It is placed in a clean, contemporary kitchen with neutral-toned tiling. The image is captured in high-key lighting, maintaining a clean, professional, and efficient e-commerce look while feeling warm and dependable."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBazPq49ZBJ0UZDyfHs38J6547IPOYtUOQ8BOvibUaNWKs_WDVftOe2BSvLHsUILwgAxA7xS4Ojb8foQad4Mcy-MpfZy_QBdglo2QAA2l5Fz2GqgSiY9vxeONffbL_EI_Z27dhc6pUlGNBj7Es9dio2aQVNorl25HZ7yCwqMl4NlzlOucmWaioVyFQe8u8eTW4TLlq9Aq_sbir0CTL3GsS0w8tCu-YKdxTOzbZ9y7_Sfh-gUIiCSLk20VblYZcMBYFKxU9runp9MTgK"
              />
            </div>
            <h3 className="font-headline-md text-body-lg text-on-surface truncate">
              Smart Feeder Pro
            </h3>
            <p className="text-secondary font-bold">$129.99</p>
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
    </main>
  );
};

export default CustomerDashboard;
