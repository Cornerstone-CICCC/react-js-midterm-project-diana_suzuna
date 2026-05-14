import { GiCat } from "react-icons/gi";
import { SiDatadog } from "react-icons/si";
import { FaEarlybirds } from "react-icons/fa";
import { GiTropicalFish } from "react-icons/gi";
import { Link } from "react-router";

const Home = () => {
  return (
    <main className="pt-16 max-w-max-width mx-auto">
      {/* <!-- Hero Banner --> */}
      <section className="px-margin-mobile md:px-margin-desktop py-base mt-base">
        <div className="relative overflow-hidden rounded-xl bg-primary-container h-[240px] md:h-[400px] flex items-center shadow-lg">
          <div className="absolute inset-0 z-0">
            <img
              alt="Happy dog"
              className="w-full h-full object-cover opacity-80"
              data-alt="A joyful Golden Retriever dog with a bright tongue-out expression, sitting in a sun-drenched park with lush green grass. The lighting is warm and golden, capturing a soft, natural bokeh in the background. The overall aesthetic is energetic and heartwarming, using the PetHaven brand's earthy tones and soft, welcoming atmosphere."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARHAMa3RoLercQ6Kuxh8-U0w1nfeRaFJLwGTzmVdFpJn4vPJA1SgaBT2GpNS0TjLf68RuyvmgtIN7H9FjKw0lpOw8mfXRWXoph3pZd2e3jvHAVJY2E25CIwbdSWjkrIuzgkgQxOKA-Y-07VkVhLLesy4HPK7NxGLsRx3PrH3gQYlutnVAC4Ogw6VQrsvxeX_SfJpOqUNhsldsFvDs4psEekIuKvTfWeE2sg2kvGcPq9xGxBc26nyOFrI08B016DtT_TQqLkrXDIyA9"
            />
          </div>
          <div className="relative z-10 p-md md:p-xl w-full md:w-2/3">
            <h2 className="font-display-lg text-display-lg text-on-primary-container mb-base leading-tight">
              Everything your best friend deserves.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container opacity-90 mb-md max-w-md">
              Quality care, premium food, and endless love delivered to your
              door.
            </p>
            <Link
              to={"products"}
              className="bg-secondary-container text-on-secondary-container px-lg py-sm rounded-full font-bold shadow-md hover:opacity-90 active:scale-95 transition-all"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- Quick Categories --> */}
      <section className="px-margin-mobile md:px-margin-desktop py-lg">
        <div className="flex justify-between items-center mb-md">
          <h3 className="font-headline-md text-headline-md text-on-surface">
            Browse by Pet
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-gutter">
          <div className="flex flex-col items-center gap-sm group cursor-pointer">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary-container transition-colors shadow-sm">
              <span
                className="material-symbols-outlined text-primary group-hover:text-on-secondary-container transition-colors scale-125"
                data-icon="dog"
              >
                <SiDatadog />
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">
              Dogs
            </span>
          </div>
          <div className="flex flex-col items-center gap-sm group cursor-pointer">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary-container transition-colors shadow-sm">
              <span
                className="material-symbols-outlined text-primary group-hover:text-on-secondary-container transition-colors scale-125"
                data-icon="cat"
              >
                <GiCat />
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">
              Cats
            </span>
          </div>
          <div className="flex flex-col items-center gap-sm group cursor-pointer">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary-container transition-colors shadow-sm">
              <span
                className="material-symbols-outlined text-primary group-hover:text-on-secondary-container transition-colors scale-125"
                data-icon="birds"
              >
                <FaEarlybirds />
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">
              Birds
            </span>
          </div>
          <div className="flex flex-col items-center gap-sm group cursor-pointer">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary-container transition-colors shadow-sm">
              <span
                className="material-symbols-outlined text-primary group-hover:text-on-secondary-container transition-colors scale-125"
                data-icon="fish"
              >
                <GiTropicalFish />
              </span>
            </div>
            <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-primary transition-colors">
              Fish
            </span>
          </div>
        </div>
      </section>
      {/* <!-- Trending Now Product Scroll --> */}
      <section className="py-lg">
        <div className="px-margin-mobile md:px-margin-desktop flex justify-between items-end mb-md">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Trending Now
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Top picks from the community
            </p>
          </div>
          <a
            className="text-primary font-label-md text-label-md hover:underline"
            href="#"
          >
            View All
          </a>
        </div>
        <div className="flex gap-gutter overflow-x-auto hide-scrollbar px-margin-mobile md:px-margin-desktop">
          {/* <!-- Product Card 1 --> */}
          <div className="min-w-[240px] md:min-w-[300px] bg-surface-container-lowest rounded-xl p-sm shadow-sm hover:shadow-lg transition-all active:scale-95 group">
            <div className="relative rounded-lg overflow-hidden h-48 mb-sm bg-surface-variant">
              <img
                alt="Product"
                className="w-full h-full object-cover"
                data-alt="Premium organic dog food packaging displayed on a clean wooden surface with soft shadows. The lighting is bright and airy, reflecting a high-end boutique feel. The scene incorporates a minimalist background with a slight warm tan tint, emphasizing the healthy and natural quality of the product."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn6TZu-GLK9tS6N9uzJ9nwIJF6zyJkBvFItuQZYm1EwnTp3LQ5QUXgqeXBBjKO-mywos6rGYK8k5WGQjNstUmhLN0bsp5gkfBUTPKfNi0G6b9M-Hq0hD5ckLA0CoJQHRlHDqL2mlRrjOkry9Qxhs7T9tA_rKV8V6m_H3pxpVPkn2bwpUi5-Xq9wok-QILbkN-1fWUvSJejkysTSxHG5RGljA0aYRhlRcjVip0OF2Q_ojLqB-vM-IHO9008WdQK2UkoRoAmpOiyuiE0"
              />
              <div className="absolute top-2 right-2 bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Top Rated
              </div>
            </div>
            <h4 className="font-headline-md text-[18px] text-on-surface truncate px-xs">
              Premium Organic Kibble
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant px-xs mb-sm">
              Natural, Grain-Free
            </p>
            <div className="flex justify-between items-center px-xs pb-xs">
              <span className="font-bold text-primary text-body-lg">
                $34.99
              </span>
              <button className="bg-secondary p-2 rounded-lg text-white hover:opacity-80 transition-opacity">
                <span
                  className="material-symbols-outlined text-[20px]"
                  data-icon="add_shopping_cart"
                >
                  add_shopping_cart
                </span>
              </button>
            </div>
          </div>
          {/* <!-- Product Card 2 --> */}
          <div className="min-w-[240px] md:min-w-[300px] bg-surface-container-lowest rounded-xl p-sm shadow-sm hover:shadow-lg transition-all active:scale-95 group">
            <div className="relative rounded-lg overflow-hidden h-48 mb-sm bg-surface-variant">
              <img
                alt="Product"
                className="w-full h-full object-cover"
                data-alt="An elegant, modern multi-level cat tree with minimalist grey cushions and natural wood pillars. It stands against a clean, light-colored wall in a bright living room. The style is sleek and professional, blending pet functionality with high-end interior design, lit by soft natural window light."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB-HF0sz5_wJ0zwtF2FTGoDjanVUOFQ88ySuH4_usJ1ZPPYS4OQTtCJluPOVI_somjtYa_uDIi-eJQ4Ifkx-JSjReGPLy4-FLRwoPZP1nybtT0hr0a7S6zIJs03_xmSTIoep2KYPv8la5nzaCgE7aWK7wh9Xhk_IHDrjcjH1EyNj3vP76zx9YTp_-O0pY_9QYA8PXFdsy8P0nwHosMKRkCS0mTYQTA4UIoFh90gYDI2o4P6Zs1PjC1MIUsUZrplQ1BDqYvcDkioDfC"
              />
            </div>
            <h4 className="font-headline-md text-[18px] text-on-surface truncate px-xs">
              Minimalist Cat Tree
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant px-xs mb-sm">
              Sustainable Pine
            </p>
            <div className="flex justify-between items-center px-xs pb-xs">
              <span className="font-bold text-primary text-body-lg">
                $120.00
              </span>
              <button className="bg-secondary p-2 rounded-lg text-white hover:opacity-80 transition-opacity">
                <span
                  className="material-symbols-outlined text-[20px]"
                  data-icon="add_shopping_cart"
                >
                  add_shopping_cart
                </span>
              </button>
            </div>
          </div>
          {/* <!-- Product Card 3 --> */}
          <div className="min-w-[240px] md:min-w-[300px] bg-surface-container-lowest rounded-xl p-sm shadow-sm hover:shadow-lg transition-all active:scale-95 group">
            <div className="relative rounded-lg overflow-hidden h-48 mb-sm bg-surface-variant">
              <img
                alt="Product"
                className="w-full h-full object-cover"
                data-alt="A stylish, colorful braided dog leash coiled on a soft tan background. The leash features vibrant orange and teal accents, mirroring the PetHaven brand palette. The lighting is diffused and soft, creating a tactile and premium look with gentle highlights on the metallic clasp."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Pr7nm6akNvEjbymUrTAi30pNRoDEst3BZa9au4STOtDMWXveZGTsFHEzibpwiVwlCkuF0VOzX69oSiMXEQYCzIIVYUiQPDk5lFo08dgQh3H6FcHghrHYBuoD92XL8xFjNuKFMeOi4RA3PcAYqL3WUqbIguTU9ili_IX6IEMPuhHF69iucUt_LkzisJA2XYbzNLgNd0fuLTWeTy5BUU34wzKfDfOzOyNbn-xllQqFQB1fhmApXjwgt53kV6VbixwNEeGgrcXm4rMm"
              />
            </div>
            <h4 className="font-headline-md text-[18px] text-on-surface truncate px-xs">
              Braided Rope Leash
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant px-xs mb-sm">
              Durable &amp; Vibrant
            </p>
            <div className="flex justify-between items-center px-xs pb-xs">
              <span className="font-bold text-primary text-body-lg">
                $24.50
              </span>
              <button className="bg-secondary p-2 rounded-lg text-white hover:opacity-80 transition-opacity">
                <span
                  className="material-symbols-outlined text-[20px]"
                  data-icon="add_shopping_cart"
                >
                  add_shopping_cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Pet Care Tips Bento-ish Grid --> */}
      <section className="px-margin-mobile md:px-margin-desktop py-xl">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">
          Pet Care Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* <!-- Large Feature Tip --> */}
          <div className="md:col-span-2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md group cursor-pointer">
            <img
              alt="Pet Tip"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Two happy puppies running through a lush green field during the golden hour. The sunlight creates a warm glow around their fur. The atmosphere is energetic and joyful, embodying the essence of pet wellness and outdoor activity, with a clean and vibrant aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhTiYkW18GVRVN117MsDgkhNfooZZXENePgWeC8hoCxm0ODVg-Kf_P2HJaubnToYkusiZcoxE1znprhSBII5aQs2Xsk7zo4V_3fIXNHUDWhIzYUOWravQFU08tCbHNsQQoAf-0rPLWg3whsNe6PvAHnE342mReSheyY8JcHIYF7wIpox6mEY07LaWNYLTMMsen55WPRnfaCyDNn1YtIE3X7fSA5WCZ7M9wI-ZftPyQhZFI4ShwhRUMtsJG0d9XvLfqNXDazNBHsPBG"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-md md:p-lg">
              <span className="text-secondary-fixed font-label-sm text-label-sm uppercase mb-xs">
                Activity
              </span>
              <h4 className="text-white font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight">
                Socializing your new puppy: A complete guide.
              </h4>
            </div>
          </div>
          {/* <!-- Small Tip 1 --> */}
          <div className="bg-tertiary-container text-on-tertiary-container p-md md:p-lg rounded-xl flex flex-col justify-between shadow-md hover:translate-y-[-4px] transition-transform">
            <div>
              <span
                className="material-symbols-outlined text-tertiary-fixed mb-sm scale-125"
                data-icon="restaurant"
              >
                restaurant
              </span>
              <h4 className="font-headline-md text-[20px] mb-sm">
                Nutritional balance for indoor cats.
              </h4>
            </div>
            <a
              className="font-label-md text-label-md flex items-center gap-1 hover:underline"
              href="#"
            >
              Read More{" "}
              <span
                className="material-symbols-outlined text-[16px]"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </a>
          </div>
          {/* <!-- Small Tip 2 --> */}
          <div className="bg-surface-container-high p-md md:p-lg rounded-xl shadow-md border border-outline-variant/30 flex flex-col justify-between hover:translate-y-[-4px] transition-transform">
            <div>
              <span
                className="material-symbols-outlined text-primary mb-sm scale-125"
                data-icon="vaccines"
              >
                vaccines
              </span>
              <h4 className="font-headline-md text-[20px] text-on-surface mb-sm">
                Keep up with seasonal checkups.
              </h4>
            </div>
            <a
              className="font-label-md text-label-md text-primary flex items-center gap-1 hover:underline"
              href="#"
            >
              Book Vet{" "}
              <span
                className="material-symbols-outlined text-[16px]"
                data-icon="calendar_today"
              >
                calendar_today
              </span>
            </a>
          </div>
          {/* <!-- Wide Small Tip --> */}
          <div className="md:col-span-2 bg-primary text-on-primary p-md md:p-lg rounded-xl flex items-center gap-md shadow-md hover:translate-y-[-4px] transition-transform">
            <div className="bg-primary-container/30 p-sm rounded-lg hidden md:block">
              <span
                className="material-symbols-outlined text-primary-fixed scale-[2]"
                data-icon="water_drop"
              >
                water_drop
              </span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md mb-xs">
                Hydration is Key
              </h4>
              <p className="opacity-90 font-body-md text-body-md">
                Learn how to spot signs of dehydration in small pets during
                summer months.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
