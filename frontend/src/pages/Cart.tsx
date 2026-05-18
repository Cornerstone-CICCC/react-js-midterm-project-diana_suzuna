import { useCart } from "../contexts/cart/UseCart";
import { Link } from "react-router";

const Cart = () => {
  const { cart, setCart, totalSum } = useCart();
  // const estimatedTax = totalSum * 0.08;
  const totalItemsCount = cart.reduce(
    (sum, item) => sum + (item.quantity ?? 0),
    0,
  );
  const finalTotal = totalSum.toFixed(2);

  const handleUpdateQuantity = (productId: string | number, amount: number) => {
    setCart((curr) =>
      curr.map((p) => {
        if (p._id === productId) {
          const newQuantity = (p.quantity ?? 0) + amount;
          return { ...p, quantity: newQuantity < 1 ? 1 : newQuantity };
        }
        return p;
      }),
    );
  };

  const handleRemoveItem = (productId: string | number) => {
    const isConfirmed = window.confirm("Remove this item from your cart?");
    if (isConfirmed) {
      setCart((curr) => curr.filter((p) => p._id !== productId));
    }
  };

  return (
    <main className="pt-24 px-margin-mobile max-w-max-width mx-auto lg:px-margin-desktop">
      <div className="mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Your Cart
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Review your furry friend's favorite items.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16 bg-surface-container-lowest rounded-xl border border-outline-variant/20 shadow-sm">
          <span className="material-symbols-outlined text-[64px] text-outline mb-4">
            shopping_basket
          </span>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Your cart is empty
          </p>
          <Link
            to="/products"
            className="inline-flex bg-secondary text-white font-label-md px-6 py-3 rounded-full hover:bg-secondary/90 transition-all shadow-md"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* <!-- Cart Items List --> */}
          <div className="lg:col-span-8 space-y-md pb-20">
            {/* <!-- Cart Item 1 --> */}
            {cart.map((p) => (
              <div
                key={p._id}
                className="bg-surface-container-lowest rounded-xl p-md flex gap-md shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] hover:scale-[1.01] transition-transform"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img alt={p.description} src={p.image} />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        {p.item_name}
                      </h3>
                    </div>
                    <button
                      className="text-on-surface-variant hover:text-error transition-colors"
                      onClick={() => handleRemoveItem(p._id)}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center bg-surface-container-low rounded-full px-xs py-xs gap-sm border border-outline-variant">
                      <button
                        className="w-8 h-8 flex items-center justify-center text-primary active:scale-90 transition-transform"
                        onClick={() => handleUpdateQuantity(p._id, -1)}
                      >
                        <span className="material-symbols-outlined">
                          remove
                        </span>
                      </button>
                      <span className="font-label-md text-label-md w-6 text-center">
                        {p.quantity}
                      </span>
                      <button
                        className="w-8 h-8 flex items-center justify-center text-primary active:scale-90 transition-transform"
                        onClick={() => handleUpdateQuantity(p._id, 1)}
                      >
                        <span className="material-symbols-outlined">add</span>
                      </button>
                    </div>
                    <span className="font-headline-md text-headline-md text-secondary">
                      ${(p.price * (p.quantity ?? 1)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- Total Summary Card --> */}
          <div className="lg:col-span-4">
            <div className="bg-surface-container-low rounded-xl p-md sticky top-24 space-y-md">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Order Summary
              </h3>
              <div className="space-y-sm">
                <div className="flex justify-between font-body-md text-body-md">
                  <span className="text-on-surface-variant">
                    Subtotal ({totalItemsCount} items)
                  </span>
                  <span className="text-on-surface">${finalTotal}</span>
                </div>
                <div className="flex justify-between font-body-md text-body-md">
                  <span className="text-on-surface-variant">Shipping</span>
                  <span className="text-on-surface font-bold text-primary">
                    Free
                  </span>
                </div>
                {/* <div className="flex justify-between font-body-md text-body-md border-b border-outline-variant pb-sm">
                  <span className="text-on-surface-variant">Estimated Tax</span>
                  <span className="text-on-surface">$8.24</span>
                </div> */}
                <div className="flex justify-between pt-sm">
                  <span className="font-headline-md text-headline-md text-on-surface">
                    Total
                  </span>
                  <span className="font-headline-lg text-headline-lg text-secondary">
                    ${finalTotal}
                  </span>
                </div>
              </div>
              <div className="space-y-sm pt-4">
                <button className="w-full bg-secondary text-on-secondary font-headline-md py-4 rounded-full shadow-lg active:scale-[0.98] transition-transform hover:opacity-90 flex items-center justify-center gap-2">
                  <span>Proceed to Checkout</span>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
                <Link
                  to={"/products"}
                  className="w-full bg-transparent border-2 border-primary text-primary font-headline-md py-4 rounded-full active:scale-[0.98] transition-transform hover:bg-surface-container-highest flex items-center justify-center gap-2"
                >
                  <span>Continue Shopping</span>
                </Link>
              </div>
              <div className="flex items-center gap-2 justify-center pt-md opacity-60">
                <span className="material-symbols-outlined text-sm">lock</span>
                <p className="font-label-sm text-label-sm uppercase">
                  Secure SSL Checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
