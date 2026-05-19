import { useCart } from '../contexts/cart/UseCart';
import { Link } from 'react-router';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Cart = () => {
  const { cart, setCart, totalSum } = useCart();
  const [removedItem, setRemovedItem] = useState<string | number | null>(null);

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

  const handleRemovedItem = (productId: string | number) => {
    setRemovedItem(productId);
  };

  const confirmRemove = () => {
    setCart((curr) =>
      curr.filter((p) => {
        console.log('removedItem:', removedItem, 'p._id:', p._id);
        return p._id !== removedItem;
      }),
    );
    toast.error('Item removed from cart.');
    setRemovedItem(null);
  };

  return (
    <main className="pt-24 px-margin-mobile max-w-max-width mx-auto lg:px-margin-desktop min-h-screen">
      <div className="mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-white">
          Your Cart
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-white">
          Review your furry friend's favorite items.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16 bg-surface-container-lowest rounded-xl border border-outline-variant/20 shadow-sm dark:bg-neutral-900 dark:text-white">
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
                      onClick={() => handleRemovedItem(p._id)}
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
                      <span className="font-label-md text-label-md w-6 text-center dark:text-black">
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
                  to={'/products'}
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
      {removedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-surface rounded-2xl p-lg shadow-xl max-w-sm w-full mx-4 flex flex-col gap-md">
            <h2 className="front-headline-lg text-headline-lg text-on-surface">
              Remove this item?
            </h2>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setRemovedItem(null)}
                className="px-lg py-sm rounded-full font-label-md text-label-ms bg-surface-container text-on-surface hover:bg-surface-container-high transition-all"
              >
                Cancel
              </button>

              <button
                onClick={confirmRemove}
                className="px-lg py-sm rounded-full font-label-md text-label-md bg-error text-on-error hover:opacity-90 active:scale-95 transition-all"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
