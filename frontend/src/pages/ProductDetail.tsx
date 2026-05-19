import { useState, useEffect } from "react";
import { useCart } from "../contexts/cart/UseCart";
import { useParams } from "react-router";
import type { Product } from "../contexts/cart/CartContext";
import { v4 as uuidv4 } from "uuid";
// import { Link } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { setCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:4001/products/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();

        setProduct(data.product || data);

        // if (data && data.product) {
        // } else if (Array.isArray(data)) {
        //   setProducts(data);
        // } else {
        //   console.error("Unexpected data structure:", data);
        // }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

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

  if (!product) {
    return (
      <div className="pt-24 text-center font-body-lg text-on-surface-variant dark:text-white">
        Loading product details...
      </div>
    );
  }

  return (
    <main className="pt-20 pb-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
      <div
        key={product._id}
        className="grid md:grid-cols-1 lg:grid-cols-12 gap-gutter"
      >
        {/* <!-- Image Gallery Column --> */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <img alt={product.description} src={product.image} />
        </div>
        {/* <!-- Product Info Column --> */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-display-lg text-display-lg text-on-surface dark:text-white">
              {product.item_name}
            </h2>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-headline-lg text-headline-lg text-primary">
              ${product.price}
            </span>
          </div>
          {/* <!-- Product Description --> */}
          <div className="flex flex-col gap-3 p-6 bg-surface-container-low rounded-xl border border-surface-variant shadow-sm">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {product.description}
            </p>
          </div>
          {/* <!-- Action Button --> */}
          <div className="flex flex-col gap-3 pt-4">
            <button
              // to={"cart"}
              className="w-full bg-secondary-container text-on-secondary-container font-headline-md text-headline-md py-4 rounded-xl squishy-button flex items-center justify-center gap-3 active:scale-95 transition-all"
              onClick={handleAddToCart}
            >
              <span className="material-symbols-outlined">
                add_shopping_cart
              </span>
              Add to Cart
            </button>
          </div>
        </div>
        <div />
      </div>
    </main>
  );
};

export default ProductDetail;
