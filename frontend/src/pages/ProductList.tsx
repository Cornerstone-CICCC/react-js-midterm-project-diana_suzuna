import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "../contexts/cart/UseCart";
import type { Product } from "../contexts/cart/CartContext";

const PrpductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { setCart } = useCart();

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const res = await fetch("http://localhost:4001/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();

        setProducts(data.products);
      };

      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleAddToCart = (product: Product) => {
    setCart((curr) => {
      const existingItem = curr.find((p) => p.productId === product._id);

      if (existingItem) {
        return curr.map((p) =>
          p.productId === product._id
            ? { ...p, quantity: (p.quantity ?? 0) + 1 }
            : p,
        );
      } else {
        return [
          ...curr,
          {
            ...product,
            productId: Number(product._id),
            quantity: 1,
            id: uuidv4(),
          },
        ];
      }
    });
  };
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
      <section className="pb-20 grid md:grid-cols-1 lg:grid-cols-4 gap-gutter">
        {/* sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 */}
        {/* <!-- Product Card 1 --> */}
        <ul className="bg-surface rounded-xl overflow-hidden card-shadow hover:scale-[1.02] transition-transform group">
          {products.map((product) => (
            <>
              <li
                key={product._id}
                className="relative aspect-square overflow-hidden"
              >
                <img alt={product.description} src={product.image} />
              </li>
              <div className="p-md flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {product.item_name}
                  </h3>
                </div>
                <p className="text-on-surface-variant text-body-md line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-headline-md font-bold text-primary">
                    ${product.price}
                  </span>
                  <button
                    className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 squishy-button active:scale-95 transition-transform"
                    onClick={() => handleAddToCart(product)}
                  >
                    <span className="material-symbols-outlined" data-icon="add">
                      add
                    </span>
                    Add
                  </button>
                </div>
              </div>
            </>
          ))}
        </ul>
        {/* <!-- Product Card 2 --> */}
        {/* <div className="bg-surface rounded-xl overflow-hidden card-shadow hover:scale-[1.02] transition-transform group">
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
        </div> */}
      </section>
    </main>
  );
};

export default PrpductList;
