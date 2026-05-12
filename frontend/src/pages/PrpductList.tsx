const PrpductList = () => {
  return (
    <main className="pt-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      {/* <!-- Search and Hero Section --> */}
      <section className="mb-lg">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Find the best for your buddy
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Premium organic food, toys, and care essentials delivered with
              love to your doorstep.
            </p>
          </div>
          {/* <!-- Search Bar --> */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span
                className="material-symbols-outlined text-outline"
                data-icon="search"
              >
                search
              </span>
            </div>
            <input
              className="w-full bg-[#EFEBE9] border-none rounded-xl py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary transition-all placeholder:text-outline"
              placeholder="Search for treats, toys, or food..."
              type="text"
            />
          </div>
        </div>
      </section>
      {/* <!-- Filters Section --> */}
      <section className="mb-gutter flex overflow-x-auto pb-4 gap-3 no-scrollbar">
        <button className="flex items-center gap-2 px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-transform">
          <span
            className="material-symbols-outlined text-sm"
            data-icon="filter_list"
          >
            filter_list
          </span>
          All Products
        </button>
        <button className="px-6 py-2 bg-surface-container-highest text-on-surface-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high active:scale-95 transition-all">
          Natural
        </button>
        <button className="px-6 py-2 bg-surface-container-highest text-on-surface-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high active:scale-95 transition-all">
          Grain-Free
        </button>
        <button className="px-6 py-2 bg-surface-container-highest text-on-surface-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high active:scale-95 transition-all">
          Puppy
        </button>
        <button className="px-6 py-2 bg-surface-container-highest text-on-surface-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high active:scale-95 transition-all">
          Eco-Friendly
        </button>
        <button className="px-6 py-2 bg-surface-container-highest text-on-surface-variant rounded-full font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high active:scale-95 transition-all">
          Toys
        </button>
      </section>
      {/* <!-- Product Grid --> */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
        {/* <!-- Product Card 1 --> */}
        <div className="bg-surface rounded-xl overflow-hidden card-shadow hover:scale-[1.02] transition-transform group">
          <div className="relative aspect-square overflow-hidden">
            <img
              alt="Organic Pet Food"
              className="w-full h-full object-cover rounded-lg m-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
              data-alt="A premium bag of organic dog food placed on a clean, light cream surface. Next to the bag is a ceramic bowl filled with high-quality kibble and fresh greens. The lighting is soft and natural, coming from a large window, creating a warm and dependable boutique aesthetic. The color palette is dominated by soft teals, browns, and warm neutrals, reflecting an empathetic and professional pet care brand."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLFXqHOMg73G_engWYruB45cNsJxidyMnsz_LV_HXreTQXd2rU3qtFYn9Zpn35TJQzJ5grLlHEN7tyqryEQpcKwhLzyd-SLKw2yR9qfU3NfPlk67K4d29jQxWAYef-LYfFkrkSjlUQRa_THsqqFgoxbz-XLOUKQnh_nu_jVtdBAlTO78LjCOBQMH8KqJogmj-ByYvCEgMaQKwu8stVLSeTupngMMJcrLd9v0NAzTmznQjbVpmmp7BDdG2cjxvUidd-fugEBG6RyzZE"
            />
            <span className="absolute top-4 left-4 bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-label-sm font-label-sm">
              Natural
            </span>
          </div>
          <div className="p-md flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Whole Grain Kibble
              </h3>
              <div className="flex items-center gap-1 text-secondary">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="star"
                  data-weight="fill"
                  // style="font-variation-settings: 'FILL' 1;"
                >
                  star
                </span>
                <span className="text-label-md font-label-md">4.9</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md line-clamp-2">
              Protein-rich organic chicken and brown rice formula for active
              adult dogs.
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-headline-md font-bold text-primary">
                $45.00
              </span>
              <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 squishy-button active:scale-95 transition-transform">
                <span className="material-symbols-outlined" data-icon="add">
                  add
                </span>
                Add
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Product Card 2 --> */}
        <div className="bg-surface rounded-xl overflow-hidden card-shadow hover:scale-[1.02] transition-transform group">
          <div className="relative aspect-square overflow-hidden">
            <img
              alt="Eco Rope Toy"
              className="w-full h-full object-cover rounded-lg m-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
              data-alt="A durable, multi-colored cotton rope toy for dogs, coiled neatly on a light wood floor. The scene is bright and airy with high-key lighting, emphasizing the tactile texture of the natural fibers. The surrounding environment is a modern, minimalist home with soft shadows. The visual style is energetic yet clean, utilizing a palette of orange accents and warm earth tones."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwj4kyJoCReRJQRelBgNfiUIWmDK8NQi0p0VQbaPzLrE1v86-sQO8fFqtUCdFtOZrVzIjFi7oiQl2Tko4saaAGp0g4Ucv6u2Ta-uXkLt5CBh1-jZOFtVpUHcaitNU84KRu-wBJbdTLyouQ2CBwLXXXU7j4KlNbwGvTL0GMzLx84pDTGeTju__kUdnVn47J9XInnYeHzDc1KbE5oz2Frsa5WE2CBMn-kZwkwpspR7ELtcXzVL9xp3YwszBD_tPZnYuMZqsOmYxv8_qs"
            />
            <span className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-label-sm">
              Bestseller
            </span>
          </div>
          <div className="p-md flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Tough Rope Toy
              </h3>
              <div className="flex items-center gap-1 text-secondary">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="star"
                  data-weight="fill"
                  // style="font-variation-settings: 'FILL' 1;"
                >
                  star
                </span>
                <span className="text-label-md font-label-md">4.7</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md line-clamp-2">
              Eco-friendly 100% natural cotton rope, perfect for aggressive
              chewers.
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-headline-md font-bold text-primary">
                $18.50
              </span>
              <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 squishy-button active:scale-95 transition-transform">
                <span className="material-symbols-outlined" data-icon="add">
                  add
                </span>
                Add
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Product Card 3 --> */}
        <div className="bg-surface rounded-xl overflow-hidden card-shadow hover:scale-[1.02] transition-transform group">
          <div className="relative aspect-square overflow-hidden">
            <img
              alt="Plush Pet Bed"
              className="w-full h-full object-cover rounded-lg m-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
              data-alt="A luxurious, soft-textured grey pet bed with a thick, rounded rim, positioned in a cozy corner of a sunlit room. The background features minimalist furniture and a potted plant, creating a sense of home and comfort. The lighting is soft and diffuse, highlighting the premium quality of the fabric. The overall mood is serene and nurturing, consistent with an empathetic high-end e-commerce brand."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaaIw8PZhZPo1xgCo1tsLPHIUb4aDdZaFYydTJDu3LAumVZS0j1Z2Jf3nf3aJA1GZWMylMMeULNFrM9_A_EdW3l4Ocnk201dtX7vGBWkUA-kewSM4Nod22SuylShwp3nAozABvdN5XZj1i_dRT5c55nXLZZosTnWJ1fPLNuIwZ25x16YSYBUFL3zYpmkpxza4-VHhS_dF3NYW9oYKwPjivHNcxKWwAXA5_VcQcz7qyg6SxXEz0c_b6iOjSH7wG5N_jFrrbD2FUOaXM"
            />
            <span className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-label-sm font-label-sm">
              Cozy
            </span>
          </div>
          <div className="p-md flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Cloud Nine Bed
              </h3>
              <div className="flex items-center gap-1 text-secondary">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="star"
                  data-weight="fill"
                  // style="font-variation-settings: 'FILL' 1;"
                >
                  star
                </span>
                <span className="text-label-md font-label-md">5.0</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md line-clamp-2">
              Orthopedic memory foam base with a washable, ultra-soft faux fur
              cover.
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-headline-md font-bold text-primary">
                $89.00
              </span>
              <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 squishy-button active:scale-95 transition-transform">
                <span className="material-symbols-outlined" data-icon="add">
                  add
                </span>
                Add
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Product Card 4 --> */}
        <div className="bg-surface rounded-xl overflow-hidden card-shadow hover:scale-[1.02] transition-transform group">
          <div className="relative aspect-square overflow-hidden">
            <img
              alt="Grooming Kit"
              className="w-full h-full object-cover rounded-lg m-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
              data-alt="A professional-grade pet grooming kit including a metal brush, specialized scissors, and organic shampoo bottle, arranged neatly on a clean white countertop. The aesthetic is clinical yet warm, with bright high-key lighting. The color palette focuses on professional teals and clean whites, suggesting efficiency and care. The mood is trustworthy and high-quality, aimed at discerning pet owners."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr7xnHyB_Z8dvBztFiYvxoPyBODEqE_8rXJSCZhECT6uAmYEqzXi46rVlu83FhCL5hI6tlpn7XFzJpcmn8C70F43MEASsWU2ss95n7BAqFGN4Jih08GECPHOBetCg2mxjYQemQCm6CXWThs55GDUF8JH5xbQgaTnTrna5va7Ao2pN-26kr5YZkAt17lonu9EOaNLJmfjS1A5M5bFbeX1suNNz0EdEVW6O_LJAU0Dqje3AOC8-Zd8wB3J-U3uZ5Bvga5fOM-yQygE2G"
            />
          </div>
          <div className="p-md flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Deluxe Grooming Kit
              </h3>
              <div className="flex items-center gap-1 text-secondary">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="star"
                  data-weight="fill"
                  // style="font-variation-settings: 'FILL' 1;"
                >
                  star
                </span>
                <span className="text-label-md font-label-md">4.8</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md line-clamp-2">
              Complete set for home maintenance, featuring ergonomic handles and
              stainless steel.
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-headline-md font-bold text-primary">
                $32.00
              </span>
              <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 squishy-button active:scale-95 transition-transform">
                <span className="material-symbols-outlined" data-icon="add">
                  add
                </span>
                Add
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrpductList;
