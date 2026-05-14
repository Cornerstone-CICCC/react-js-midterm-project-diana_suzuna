// import { Link } from "react-router";

const ProductDetail = () => {
  return (
    <main className="pt-20 pb-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="grid md:grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* <!-- Image Gallery Column --> */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="aspect-square w-full bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
            <img
              className="w-full h-full object-cover"
              data-alt="A premium bag of artisanal dog food positioned in a bright, sun-drenched modern kitchen with soft morning light. The packaging features elegant teal and orange branding elements. Beside the bag, a high-quality ceramic bowl is filled with textured, natural-looking kibble. The background is a minimalist, warm cream-toned space that emphasizes a clean and healthy lifestyle for pets."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrZ-SxlZ6b6Xd_gSgJOfIqojKxgWK4V9iARUHeygHUcG9BgVCx_zLQeGWPqIf2yeT2Vl_JUCfezRLPHyiTX9xyzoNu2GYYrvm4JCcxLPh9XqFBd8qa0s0TU4B7pcbFpbZZiFx7vjAtiy1JIp6bDQ8G6fOmLZKOCSCK_qC05miVD4gqckZSozc1VSreOQU3WVCjaEL6QewHpo3mTgk3ZtFivvqYpl5kwS8NJKcNzKwapMD8rf6Cs77SBVq3J4floDPn4nYz_d78SpsA"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 border-primary">
              <img
                className="w-full h-full object-cover"
                data-alt="Close up shot of premium dog food packaging focusing on the teal and orange branding labels. The lighting is soft and natural, emphasizing the matte texture of the bag and the high-end feel of the PetHaven brand. Small organic badges like 'Grain-Free' are clearly visible on the lower corner of the design."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo3lGvKpCiEJcro2rgGfgXF6G8LZUiNgvl5zoHRmvcR74wmBDgP-9SvZ73gvbTJhC0vBN5kdzeW-VISuSNyehz5Vvh_8aXhdqyKRnIYzu2KQSFmrNfJhCzB89sEG8hcrCM4IzdVQJJZHMDnNZiNGEqfuy1vdl0nNQ9c5HDu1rsr-foWRORU0_a2VEXlbA9fBuaFC0XnZMtQBnLqovPHEh1QlH9QiMPYGvyhBItvLdEii3gKRze65AZJR0prNGXvfQDAL_xtNeMTDwc"
              />
            </div>
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden hover:opacity-80 cursor-pointer transition-all">
              <img
                className="w-full h-full object-cover"
                data-alt="A happy, healthy Golden Retriever with a shiny coat sitting patiently in a minimalist home environment. The scene is bright and airy with soft shadows, using a warm cream and teal color palette. The dog looks energetic and well-cared for, representing the results of a high-quality, balanced diet."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWcRZv0ZytpFYbvNbhZ6fo6HOl4gUZk_K039BewW1rhKiJr1MzRxofVaCWqRtPqQSgXFMGOvdHKyM3cRGjPW8xlfIaI8XYjK7I2wl6jBp1mtR9ggSk7nc_OY-FU0Db8mxlUdWvPT59COZjjwaGfx0kVjdyQ6u84V3AfboxSi2ODwBtHN_BUA1sB3oegzaEgoup1az3X1cVLQA9aPDOX2WrL8FP_qgp_FjXmPMXn9ocv5x4-DjPvdkLYQ8zPkxwL3Ex2dOMA4CHTxEC"
              />
            </div>
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden hover:opacity-80 cursor-pointer transition-all">
              <img
                className="w-full h-full object-cover"
                data-alt="Detailed close-up of high-quality, natural dog kibble with visible pieces of dried vegetables and premium protein sources. The pieces have an organic, varied shape and a rich, earthy brown color. The lighting is crisp and detailed, showcasing the wholesome ingredients and texture of the nutritional pet food."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6y7F9cbr6yD6_Uc_0tRJ0lZl8UeWLhCtxvfakWX2f6mO6hvUmIPX5HOsqFJoxeNjqxXJNbc5v6u1-UkLSRPxBuFaivChbPLIRPNaqtzJfPo0TxnsNPCztXcjSJBokJL53pNviDQMHyCECmIt_TIqu7bh5EH3B3k_QGAble1Qo0rFE4sQrKWIRY2R42VKpm6Q-pO6BHY2Q33UzlnHhelQsC-dfJjNfuOuR3ZAagmOj1W4pzZnB9RUb4nDPQKZAVONQXyj-vN-H5MDY"
              />
            </div>
          </div>
        </div>
        {/* <!-- Product Info Column --> */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm">
                Bestseller
              </span>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm">
                Organic
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-on-surface">
              Wild Atlantic Salmon &amp; Sweet Potato
            </h2>
            <div className="flex items-center gap-1 text-secondary">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star_half</span>
              <span className="ml-2 text-on-surface-variant font-label-md text-label-md">
                (124 reviews)
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-on-surface-variant font-label-md text-label-md">
              Current Price
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-headline-lg text-primary">
                $64.99
              </span>
              <span className="text-on-surface-variant line-through font-body-md text-body-md">
                $79.99
              </span>
            </div>
          </div>
          {/* <!-- Weight Options --> */}
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-label-md font-bold">
              Select Bag Size
            </span>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-xl border-2 border-primary bg-primary-container text-on-primary-container font-label-md text-label-md transition-all active:scale-95">
                5 lbs
              </button>
              <button className="px-6 py-3 rounded-xl border-2 border-outline-variant hover:border-primary transition-all font-label-md text-label-md active:scale-95">
                15 lbs
              </button>
              <button className="px-6 py-3 rounded-xl border-2 border-outline-variant hover:border-primary transition-all font-label-md text-label-md active:scale-95">
                30 lbs
              </button>
            </div>
          </div>
          {/* <!-- Product Description --> */}
          <div className="flex flex-col gap-3 p-6 bg-surface-container-low rounded-xl border border-surface-variant shadow-sm">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">info</span>
              <span className="font-label-md text-label-md font-bold">
                Wholesome Nutrition
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our premium recipe combines wild-caught salmon with fiber-rich
              sweet potatoes and organic peas. Formulated by veterinary
              nutritionists to support healthy skin, a shiny coat, and optimal
              digestion for adult dogs of all breeds.
            </p>
          </div>
          {/* <!-- Action Button --> */}
          <div className="flex flex-col gap-3 pt-4">
            <button
              // to={"cart"}
              className="w-full bg-secondary-container text-on-secondary-container font-headline-md text-headline-md py-4 rounded-xl squishy-button flex items-center justify-center gap-3 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">
                add_shopping_cart
              </span>
              Add to Cart
            </button>
            <div className="flex justify-center gap-6 py-2">
              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-primary text-lg">
                  local_shipping
                </span>
                Free Delivery
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-primary text-lg">
                  verified
                </span>
                Subscription Savings
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Asymmetric Nutritional Info Grid --> */}
      <div className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="md:col-span-2 p-8 bg-surface-container-low rounded-2xl shadow-sm border border-surface-variant">
          <h3 className="font-headline-md text-headline-md mb-6 text-primary">
            Nutritional Composition
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Protein
              </span>
              <span className="font-headline-md text-headline-md text-secondary">
                26%
              </span>
              <div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[26%]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Fat Content
              </span>
              <span className="font-headline-md text-headline-md text-secondary">
                15%
              </span>
              <div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[15%]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Crude Fiber
              </span>
              <span className="font-headline-md text-headline-md text-secondary">
                4.5%
              </span>
              <div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[4.5%]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Moisture
              </span>
              <span className="font-headline-md text-headline-md text-secondary">
                10%
              </span>
              <div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[10%]"></div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-outline-variant">
            <h4 className="font-label-md text-label-md font-bold mb-4">
              Key Ingredients
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-surface-container-highest px-4 py-2 rounded-lg font-body-md text-body-md">
                Wild Salmon
              </span>
              <span className="bg-surface-container-highest px-4 py-2 rounded-lg font-body-md text-body-md">
                Sweet Potato
              </span>
              <span className="bg-surface-container-highest px-4 py-2 rounded-lg font-body-md text-body-md">
                Blueberries
              </span>
              <span className="bg-surface-container-highest px-4 py-2 rounded-lg font-body-md text-body-md">
                Spinach
              </span>
              <span className="bg-surface-container-highest px-4 py-2 rounded-lg font-body-md text-body-md">
                Fish Oil
              </span>
            </div>
          </div>
        </div>
        <div className="p-8 bg-primary-container text-on-primary-container rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-4xl mb-4">eco</span>
            <h3 className="font-headline-md text-headline-md mb-2">
              Eco-Conscious Choice
            </h3>
            <p className="font-body-md text-body-md opacity-90">
              Our packaging is 100% recyclable and sourced from FSC certified
              forests. We believe in a healthy planet for healthy pets.
            </p>
          </div>
          <div className="relative z-10 pt-6">
            <button className="bg-surface-container-lowest text-primary px-6 py-3 rounded-xl font-label-md text-label-md w-full shadow-sm hover:opacity-90 transition-opacity">
              Our Sustainability Pledge
            </button>
          </div>
          {/* <!-- Abstract decorative element --> */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-on-primary-container opacity-10 rounded-full"></div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
