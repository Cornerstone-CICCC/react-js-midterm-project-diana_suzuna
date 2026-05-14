const Cart = () => {
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
      <div className="grid md:grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* <!-- Cart Items List --> */}
        <div className="lg:col-span-8 space-y-md ">
          {/* <!-- Cart Item 1 --> */}
          <div className="bg-surface-container-lowest rounded-xl p-md flex gap-md shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] hover:scale-[1.01] transition-transform">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img
                alt="Organic Dog Food"
                className="w-full h-full object-cover"
                data-alt="A professional product photograph of a premium, organic dog food bag sitting on a clean, minimalist kitchen floor. The lighting is soft and natural, coming from a nearby window, creating a warm and dependable atmosphere. The background is slightly blurred with soft tan and cream tones, emphasizing the vibrant teal and orange branding of the PetHaven product line. The overall aesthetic is tactile and high-end."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuLuyfi3qunLyMsjL34TTWxbJvNdI58nbKngKtvR4sA3X88_vsq5ULd6qZzia6apdovcYYfVFof7EhQSzQmEBiwmOXRlmHxhOiBfXcA051z2hKHV3oLJFote3mHRp3tGqXxb3NLDVSk4xgauwX-JoUVXZWNmRUmeElkdrp_yXVCnHrzexq0dTD3-AOKVNmHGd9OKio579PFcyw1UlGTzd-VYf2mj_qaxXfK7Zx93uEbrJty60yd6V8i7W2aIGH5LBbmUKs9lcR69lu"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Organic Salmon Kibble
                  </h3>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Adult Dogs • 5kg
                  </p>
                </div>
                <button className="text-on-surface-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div className="flex items-center bg-surface-container-low rounded-full px-xs py-xs gap-sm border border-outline-variant">
                  <button className="w-8 h-8 flex items-center justify-center text-primary active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="font-label-md text-label-md w-6 text-center">
                    1
                  </span>
                  <button className="w-8 h-8 flex items-center justify-center text-primary active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <span className="font-headline-md text-headline-md text-secondary">
                  $45.99
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Cart Item 2 --> */}
          <div className="bg-surface-container-lowest rounded-xl p-md flex gap-md shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] hover:scale-[1.01] transition-transform">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img
                alt="Plush Cat Toy"
                className="w-full h-full object-cover"
                data-alt="A macro studio shot of a plush, designer cat toy in the shape of a colorful bird. The toy features soft, organic textures and vibrant orange and teal accents. It sits on a neutral cream-colored surface with a soft-focus background that evokes a cozy home environment. The lighting is bright and cheerful, highlighting the premium stitching and durable materials used in the boutique pet accessory."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB13iUgaxVj2honfWMixYCFQALx3YpUd5gUKV7QyI4ucEYibN3zHmqEUTlJy1YXbH7QS1uzlpMeQXUDsQ-kIIah3ojxebDO49_CGJIIogU7GuRtYEwllWfxb5rga9zAcumk8NpWZmyhZqok8Gx_N1vUEzyWbJVn_SANWFAZ8OIeOnPlqDPqjpw8KflrVVkW8V4lBX1yIfMsZ4_X3rZuKNghPRqpaeJ-Zl4ZeC9fEv2e-VwF1EYzga-kVMQcCmjazrKlGWw1zHi5IVGn"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Feather Bouncer Toy
                  </h3>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Interactive • Multi-color
                  </p>
                </div>
                <button className="text-on-surface-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div className="flex items-center bg-surface-container-low rounded-full px-xs py-xs gap-sm border border-outline-variant">
                  <button className="w-8 h-8 flex items-center justify-center text-primary active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="font-label-md text-label-md w-6 text-center">
                    2
                  </span>
                  <button className="w-8 h-8 flex items-center justify-center text-primary active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <span className="font-headline-md text-headline-md text-secondary">
                  $12.50
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Cart Item 3 --> */}
          <div className="bg-surface-container-lowest rounded-xl p-md flex gap-md shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] hover:scale-[1.01] transition-transform">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
              <img
                alt="Adjustable Leather Collar"
                className="w-full h-full object-cover"
                data-alt="A detailed, close-up photograph of a handcrafted leather pet collar with polished brass hardware. The collar is made from rich, cognac-colored leather and is presented on a textured tan background that suggests an organic, boutique feel. The lighting is dramatic but warm, casting soft shadows that give the scene depth and a sense of artisanal quality. The image conveys dependability and professional craftsmanship."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIvGspxKHQ9gzNzpyr7snLOfiJGJyzL79vllhrpLVI9b1tGoCzla-Ga01D8jFF9NRSZ31Byewtj5DCYuWq5kOjRWno-T6Jvf8DdHM3gRV6fD9DKob-8gJ-ZKlTkJYOhCPvnSpTqH_fUIQCmk1jDUPnrxhqhIBmqwt-5ddFRRWa0xrBm9uSYbznl2bK1fKwFqH6f_l-uPMQ9kD65Rj7QSlbCN5SEa39KIFHiAj2zgsCVZlTMa9pYGhinyBCNRA_wHhqVVnAhM5ISBpP"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Artisan Leather Collar
                  </h3>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Size M • Cognac
                  </p>
                </div>
                <button className="text-on-surface-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div className="flex items-center bg-surface-container-low rounded-full px-xs py-xs gap-sm border border-outline-variant">
                  <button className="w-8 h-8 flex items-center justify-center text-primary active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="font-label-md text-label-md w-6 text-center">
                    1
                  </span>
                  <button className="w-8 h-8 flex items-center justify-center text-primary active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <span className="font-headline-md text-headline-md text-secondary">
                  $32.00
                </span>
              </div>
            </div>
          </div>
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
                  Subtotal (4 items)
                </span>
                <span className="text-on-surface">$102.99</span>
              </div>
              <div className="flex justify-between font-body-md text-body-md">
                <span className="text-on-surface-variant">Shipping</span>
                <span className="text-on-surface font-bold text-primary">
                  Free
                </span>
              </div>
              <div className="flex justify-between font-body-md text-body-md border-b border-outline-variant pb-sm">
                <span className="text-on-surface-variant">Estimated Tax</span>
                <span className="text-on-surface">$8.24</span>
              </div>
              <div className="flex justify-between pt-sm">
                <span className="font-headline-md text-headline-md text-on-surface">
                  Total
                </span>
                <span className="font-headline-lg text-headline-lg text-secondary">
                  $111.23
                </span>
              </div>
            </div>
            <div className="space-y-sm pt-4">
              <button className="w-full bg-secondary text-on-secondary font-headline-md py-4 rounded-full shadow-lg active:scale-[0.98] transition-transform hover:opacity-90 flex items-center justify-center gap-2">
                <span>Proceed to Checkout</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="w-full bg-transparent border-2 border-primary text-primary font-headline-md py-4 rounded-full active:scale-[0.98] transition-transform hover:bg-surface-container-highest flex items-center justify-center gap-2">
                <span>Continue Shopping</span>
              </button>
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
    </main>
  );
};

export default Cart;
