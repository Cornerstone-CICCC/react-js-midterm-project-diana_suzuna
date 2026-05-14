const AdminDashboard = () => {
  return (
    <main className="pt-24 pb-20 md:pb-15 px-20 max-w-[1440px] mx-auto">
      {/* <!-- Header Section: Admin Profile Card --> */}
      <section className="mb-xl">
        <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] flex flex-col md:flex-row items-center md:items-start gap-8 border border-outline-variant/20">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-secondary-container p-1 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                alt="A close-up portrait of a cheerful male executive with professional styling and a friendly expression. He is positioned in front of a soft, airy background. The image has a warm, tactile feel with bright, natural light, reinforcing the dependable and empathetic values of the pet care brand while maintaining a premium boutique aesthetic."
                src=""
              />
            </div>
            <button className="absolute bottom-1 right-1 bg-primary text-on-primary p-2 rounded-full shadow-lg active:scale-95 transition-transform">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="edit"
              >
                edit
              </span>
            </button>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">
                Diana Escamilla
              </h2>
              <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-label-sm uppercase tracking-widest text-[10px]">
                <span
                  className="material-symbols-outlined text-[14px]"
                  data-icon="verified_user"
                >
                  verified_user
                </span>
                System Administrator
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-6">
              Overseeing logistics and digital operations at PetHaven. Committed
              to ensuring every pet gets the premium care they deserve through
              seamless platform management.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="px-6 py-4 bg-surface-container-low rounded-xl border border-outline-variant/30 text-center min-w-[120px]">
                <p className="text-primary font-headline-md">124</p>
                <p className="text-label-sm text-on-surface-variant uppercase">
                  Tasks Pending
                </p>
              </div>
              <div className="px-6 py-4 bg-surface-container-low rounded-xl border border-outline-variant/30 text-center min-w-[120px]">
                <p className="text-secondary font-headline-md">98.2%</p>
                <p className="text-label-sm text-on-surface-variant uppercase">
                  Uptime Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Quick Actions Row --> */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="flex items-center gap-2 bg-secondary text-on-secondary px-6 py-3 rounded-xl font-label-md text-label-md shadow-md active:scale-95 transition-all hover:opacity-90">
          <span className="material-symbols-outlined">add_circle</span>
          Add Product
        </button>
        <button className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl font-label-md text-label-md active:scale-95 transition-all hover:bg-primary-container hover:text-on-primary-container">
          <span className="material-symbols-outlined">inventory</span>
          Manage Inventory
        </button>
      </div>
      {/* <!-- Summary Stats Bento Grid --> */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-gutter mb-xl">
        {/* <!-- Total Sales --> */}
        <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] flex flex-col gap-4 border border-surface-variant hover:scale-[1.02] transition-transform">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <span className="text-secondary font-bold font-label-sm">
              +12.5%
            </span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant">
              Total Sales
            </p>
            <p className="text-4xl font-display-lg text-display-lg text-on-surface">
              $24,592.00
            </p>
          </div>
        </div>
        {/* <!-- New Orders --> */}
        <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] flex flex-col gap-4 border border-surface-variant hover:scale-[1.02] transition-transform">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">shopping_bag</span>
            </div>
            <span className="text-secondary font-bold font-label-sm">
              +5 today
            </span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant">
              New Orders
            </p>
            <p className="text-4xl font-display-lg text-display-lg text-on-surface">
              128
            </p>
          </div>
        </div>
        {/* <!-- Inventory Alert --> */}
        <div className="bg-error-container p-md rounded-xl shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] flex flex-col gap-4 border border-error/20 hover:scale-[1.02] transition-transform">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-lg bg-error/10 flex items-center justify-center text-error">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <span className="text-error font-bold font-label-sm">Critical</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-error-container">
              Inventory Alerts
            </p>
            <p className="text-4xl font-display-lg text-display-lg text-on-error-container">
              12 Items
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Recent Orders & Analytics Section --> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* <!-- Recent Orders Table --> */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] overflow-hidden border border-surface-variant">
          <div className="p-6 border-b border-surface-variant flex justify-between items-center">
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Recent Orders
            </h3>
            <button className="text-primary font-label-md hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant font-label-sm uppercase tracking-wider">
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant">
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 font-label-md text-on-surface">
                    #PH-9402
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim"></div>
                      <span className="font-body-md text-body-md">
                        Sarah Jenkins
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-body-md text-body-md">
                    Organic Kibble (5kg)
                  </td>
                  <td className="px-6 py-4 font-body-md text-body-md">
                    $45.99
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-[11px] font-bold uppercase">
                      Shipped
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 font-label-md text-on-surface">
                    #PH-9401
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary-fixed-dim"></div>
                      <span className="font-body-md text-body-md">
                        Michael Chen
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-body-md text-body-md">
                    Nylon Braided Leash
                  </td>
                  <td className="px-6 py-4 font-body-md text-body-md">
                    $18.50
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-6 py-4 font-label-md text-on-surface">
                    #PH-9400
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed-dim"></div>
                      <span className="font-body-md text-body-md">
                        Emma Wilson
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-body-md text-body-md">
                    Orthopedic Dog Bed
                  </td>
                  <td className="px-6 py-4 font-body-md text-body-md">
                    $120.00
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[11px] font-bold uppercase">
                      Delivered
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <!-- Inventory Alerts Sidebar Panel --> */}
        <div className="bg-tertiary-container text-on-tertiary-container rounded-xl p-6 flex flex-col gap-6 shadow-lg border border-tertiary/20">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-md text-headline-md">Stock Alerts</h3>
            <span className="material-symbols-outlined">
              notification_important
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {/* <!-- Alert Item --> */}
            <div className="bg-white/10 p-4 rounded-lg flex gap-4 items-center border border-white/5">
              <img
                className="w-12 h-12 rounded-lg object-cover"
                data-alt="A close-up high-resolution photograph of premium dog treats in a modern, eco-friendly tan packaging. The background is a clean white studio setting with soft natural shadows, highlighting the organic texture of the treats. The aesthetic is clean and high-end, representing a premium pet product."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA502CZs1YMaJNYfXAqEbMyURxDct-LXRLji5zCIa0HqubshjelPH-1gPv8-HSpZgq1PT1-CWb0Zk2KVla-e5ThVdnI5jHkyRV2xacxklx4MpX6kODrYuKsKIvdPGCtdCoRH-qclOOuBxM2SyyQDJx38zp9Ngueo_s4Hcf2H5VJoDHJqmfv5o_a7ee23H0tqTFblXO8DQBKa4bSfdsf1CfkJt0t-NG4FKHAgNXu7KAK9q7BDM4R0J2XzTaihSofeRmQscxfKRYHGToR"
              />
              <div>
                <p className="font-label-md text-label-md">
                  Gourmet Beef Jerky
                </p>
                <p className="font-label-sm text-label-sm opacity-80">
                  Only 2 left in stock
                </p>
              </div>
            </div>
            {/* <!-- Alert Item --> */}
            <div className="bg-white/10 p-4 rounded-lg flex gap-4 items-center border border-white/5">
              <img
                className="w-12 h-12 rounded-lg object-cover"
                data-alt="A stylish, modern ceramic pet bowl with a minimalist pattern, photographed in a brightly lit kitchen setting. The soft morning light hits the ceramic surface, creating gentle reflections. The color palette is composed of soft creams and teals, fitting the brand's tactile minimalist aesthetic perfectly."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbmN_jfCKdwjtL24IPsqV3IhQMWw41RMHLqxTeTbAGtLLzNoA9HXC4jL8bVts4Z60hdwyXjVHizOJGnVPcZWGoxaQajOLQ7QIr_j5ZRW7Sk7kIR1yyM8eKcBIgDbQauqlQ9dE42Nga3w6MtbvF1igEAovUlDBF35SuJ9Md_VwHYiQZUdJ7LaDjdym3oj9wVkiNy21RAO1ENpAoDHdlQp46UJQZeZRPiDrdQQgIh7fni58IQaiNka8_eJqWFBCB4df0c4Lj63MZwEjo"
              />
              <div>
                <p className="font-label-md text-label-md">Ceramic Cat Bowl</p>
                <p className="font-label-sm text-label-sm opacity-80">
                  Out of Stock
                </p>
              </div>
            </div>
          </div>
          <button className="w-full py-3 rounded-xl bg-on-tertiary-container text-tertiary font-bold font-label-md mt-auto hover:opacity-90 transition-opacity">
            Reorder Low Stock
          </button>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
