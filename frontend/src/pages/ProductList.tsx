import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "../contexts/cart/UseCart";
import type { Product } from "../contexts/cart/CartContext";
import { Link, useLocation } from "react-router";

const PrpductList = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { setCart } = useCart();
  const location = useLocation();
  const initialPetType = location.state?.selectedPetType || "all";
  const [activePetType, setActivePetType] = useState<string>(initialPetType);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:4001/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();

        if (data && data.products) {
          setProducts(data.products);
        } else if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Unexpected data structure:", data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchProducts();
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
    // alert(`${product.item_name} has been added to your cart!`);
  };

  const filteredProducts = products.filter((product) => {
    const matchesPetType =
      activePetType === "all" || product.pet_type === activePetType;

    const matchesSearch = product.item_name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesPetType && matchesSearch;
  });

  return (
    <main className="pt-20 px-margin-mobile pb-20 md:px-margin-desktop max-w-max-width mx-auto">
      {/* <!-- Search and Hero Section --> */}
      <section className="mb-lg">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-white">
              Find the best for your buddy
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl dark:text-white">
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>
      {/* <!-- Filters Section --> */}
      <section className="mb-gutter flex overflow-x-auto pb-4 gap-3 no-scrollbar">
        {/* PetType buttoms */}
        <button
          onClick={() => setActivePetType("all")}
          className={`px-6 py-2 rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-all ${
            activePetType === "all"
              ? "bg-secondary-container text-white"
              : "bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          <span
            className="material-symbols-outlined text-sm"
            data-icon="filter_list"
          >
            filter_list
          </span>
          All Products
        </button>
        <button
          onClick={() => {
            if (activePetType === "dog") {
              setActivePetType("all");
            } else {
              setActivePetType("dog");
            }
          }}
          className={`px-6 py-2 rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-all ${
            activePetType === "dog"
              ? "bg-secondary-container text-white"
              : "bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Dogs
        </button>
        <button
          onClick={() => {
            if (activePetType === "cat") {
              setActivePetType("all");
            } else {
              setActivePetType("cat");
            }
          }}
          className={`px-6 py-2 rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-all ${
            activePetType === "cat"
              ? "bg-secondary-container text-white"
              : "bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Cats
        </button>
        <button
          onClick={() => {
            if (activePetType === "bird") {
              setActivePetType("all");
            } else {
              setActivePetType("bird");
            }
          }}
          className={`px-6 py-2 rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-all ${
            activePetType === "bird"
              ? "bg-secondary-container text-white"
              : "bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Birds
        </button>
        <button
          onClick={() => {
            if (activePetType === "fish") {
              setActivePetType("all");
            } else {
              setActivePetType("fish");
            }
          }}
          className={`px-6 py-2 rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-all ${
            activePetType === "fish"
              ? "bg-secondary-container text-white"
              : "bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Fish
        </button>
        <div>
          <span>/</span>
        </div>
        {/* category buttoms */}
        <button
          onClick={() => {
            if (search === "food") {
              setSearch("");
            } else {
              setSearch("food");
            }
          }}
          className={`px-6 py-2 rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-all ${
            search === "food"
              ? "bg-secondary-container text-white"
              : "bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Foods
        </button>
        <button
          onClick={() => {
            if (search === "toy") {
              setSearch("");
            } else {
              setSearch("toy");
            }
          }}
          className={`px-6 py-2 rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-all ${
            search === "toy"
              ? "bg-secondary-container text-white"
              : "bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Toys
        </button>
        <button
          onClick={() => {
            if (search === "leash") {
              setSearch("");
            } else {
              setSearch("leash");
            }
          }}
          className={`px-6 py-2 rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-all ${
            search === "leash"
              ? "bg-secondary-container text-white"
              : "bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Leash
        </button>
        <button
          onClick={() => {
            if (search === "cage") {
              setSearch("");
            } else {
              setSearch("cage");
            }
          }}
          className={`px-6 py-2 rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-all ${
            search === "cage"
              ? "bg-secondary-container text-white"
              : "bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Cages
        </button>
        <button
          onClick={() => {
            if (search === "shampoo") {
              setSearch("");
            } else {
              setSearch("shampoo");
            }
          }}
          className={`px-6 py-2 rounded-full font-label-md text-label-md whitespace-nowrap active:scale-95 transition-all ${
            search === "shampoo"
              ? "bg-secondary-container text-white"
              : "bg-surface-container-highest text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Shampoo
        </button>
      </section>
      {/* <!-- Product Grid --> */}
      <section className="pb-20 grid md:grid-cols-1 lg:grid-cols-4 gap-gutter">
        {/* <!-- Product Card 1 --> */}
        {filteredProducts?.map((product) => (
          <Link
            to={`/products/${product._id}`}
            key={product._id}
            className="bg-surface rounded-xl overflow-hidden card-shadow hover:scale-[1.02] transition-transform group"
          >
            <div className="relative aspect-square overflow-hidden">
              <img alt={product.description} src={product.image} />
            </div>
            <div className="p-md flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {product.item_name}
                </h3>
              </div>
              {/* <p className="text-on-surface-variant text-body-md line-clamp-2">
                {product.description}
              </p> */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-headline-md font-bold text-primary">
                  ${product.price}
                </span>
                <button
                  className="bg-secondary text-on-secondary px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 squishy-button active:scale-95 transition-transform"
                  onClick={(e) => {
                    // IMPORTANT!!!
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  <span className="material-symbols-outlined" data-icon="add">
                    add
                  </span>
                  Add
                </button>
              </div>
            </div>
          </Link>
        ))}

        {filteredProducts?.length === 0 && (
          <p className="text-center col-span-full text-on-surface-variant py-10">
            No products found for this pet type.
          </p>
        )}
      </section>
    </main>
  );
};

export default PrpductList;
