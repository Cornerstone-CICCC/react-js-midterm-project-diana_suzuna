import { useState, useEffect, type FormEvent } from 'react';
import { useUser } from '../../contexts/user/UseUser';
import { useNavigate, Link } from 'react-router';
import type { Product } from '../../contexts/cart/CartContext';
import toast from 'react-hot-toast';
import { IoBagAdd } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

interface AdminProduct extends Product {
  stock_quantity: number;
  pet_type: string;
  category: string;
}

const AdminDashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<AdminProduct | null>(
    null,
  );
  const [formData, setFormData] = useState({
    item_name: '',
    price: 0,
    stock_quantity: 0,
    description: '',
    image: '',
    pet_type: '',
    category: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4001/products');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();

        if (data && data.products) {
          setProducts(data.products);
        } else if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Unexpected data structure:', data);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (product: AdminProduct) => {
    setEditingProduct(product);
    setFormData({
      item_name: product.item_name,
      price: Number(product.price),
      stock_quantity: Number(product.stock_quantity),
      description: product.description,
      image: product.image,
      pet_type: product.pet_type,
      category:
        typeof product.category === 'object'
          ? (product.category as { _id: string })._id
          : product.category,
    });
    setShowForm(true);

    console.log(handleEdit);
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:4001/products/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!res.ok) throw new Error('Fail to delete product.');
      setProducts((curr) => curr.filter((product) => product._id !== id));
      toast.error('Product deleted!');
    } catch (err) {
      toast.error('Error deleting product.');
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const url = editingProduct
        ? `http://localhost:4001/products/${editingProduct._id}`
        : 'http://localhost:4001/products';

      const method = editingProduct ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Fail to submit product.');

      const updatedProduct = await res.json();
      if (editingProduct) {
        setProducts((curr) =>
          curr.map((p) => (p._id == updatedProduct._id ? updatedProduct : p)),
        );
      } else {
        setProducts((curr) => [...curr, updatedProduct]);
      }

      setEditingProduct(null);
      setShowForm(false);
      toast.success(editingProduct ? 'Product updated' : 'Product added!');
    } catch (err) {
      toast.error('Error submiting the product.');
    }
  };

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <main className="pt-24 pb-20 px-20 max-w-[1440px] mx-auto min-h-screen">
      {/* <!-- Header Section: Admin Profile Card --> */}
      <section className="mb-xl">
        <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_20px_20px_-4px_rgba(112,84,74,0.08)] flex flex-col md:flex-row items-center md:items-start gap-8 border border-outline-variant/20">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">
                Welcome, Admin
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
          </div>
        </div>
      </section>

      {/* Add products */}
      <section>
        <div>
          <button onClick={() => setShowForm(true)}>
            Add Product <IoBagAdd />{' '}
          </button>
        </div>

        <div>
          {showForm && (
            <form onSubmit={handleSubmit}>
              <label>
                {' '}
                Name:
                <input
                  type="text"
                  value={formData.item_name}
                  onChange={(e) =>
                    setFormData({ ...formData, item_name: e.target.value })
                  }
                />
              </label>

              <label>
                {' '}
                Price: $
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.valueAsNumber })
                  }
                />
              </label>

              <label>
                {' '}
                Stock Quantity:
                <input
                  type="number"
                  value={formData.stock_quantity}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      stock_quantity: e.target.valueAsNumber,
                    })
                  }
                />
              </label>

              <label>
                {' '}
                Description
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
              </label>

              <label>
                {' '}
                Image reference
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </label>

              <label>
                Pet type
                <select
                  value={formData.pet_type}
                  onChange={(e) =>
                    setFormData({ ...formData, pet_type: e.target.value })
                  }
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Birds</option>
                  <option value="fish">Fish</option>
                  <option value="hamster">Hamster</option>
                </select>
              </label>

              <label>
                {' '}
                Categories
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="6a0671b1dae5f3100a2fffea">Food</option>
                  <option value="6a0671cadae5f3100a2fffeb">Toys</option>
                  <option value="6a0671e5dae5f3100a2fffec">Supplements</option>
                  <option value="6a0671fddae5f3100a2fffed">Accessories</option>
                  <option value="6a067213dae5f3100a2fffee">Grooming</option>
                </select>
              </label>

              <button type="submit">
                {editingProduct ? 'Update Product' : 'Add Product'}
              </button>
            </form>
          )}
        </div>

        <div>
          {products.length === 0 ? (
            <p>Not products found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Pet Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.item_name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock_quantity}</td>
                    <td>{product.pet_type}</td>
                    <td>
                      <button onClick={() => handleEdit(product)}>
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(product._id)}>
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      {/* <!-- Logout Action --> */}
      {user ? (
        <section className="flex justify-center mt-xl">
          <button
            className="flex items-center gap-2 bg-on-surface-variant/5 text-error px-xl py-md rounded-full font-bold hover:bg-error-container/20 active:scale-95 transition-all dark:bg-neutral-900"
            onClick={handleLogout}
          >
            <span className="material-symbols-outlined">logout</span>
            Logout from Account
          </button>
        </section>
      ) : (
        <Link
          to="/auth"
          className="flex items-center gap-2 bg-primary text-on-primary px-xl py-md rounded-full font-bold hover:opacity-90 active:scale-95 transition-all shadow-md no-underline"
        >
          <span className="material-symbols-outlined">login</span>
          Login / Signup to Account
        </Link>
      )}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-surface rounded-2xl p-lg shadow-xl max-w-sm w-full mx-4 flex flex-col gap-md">
            <h2 className="front-headline-lg text-headline-lg text-on-surface">
              Are you sure you want to logout?
            </h2>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-lg py-sm rounded-full font-label-md text-label-ms bg-surface-container text-on-surface hover:bg-surface-container-high transition-all"
              >
                Cancel
              </button>

              <button
                onClick={confirmLogout}
                className="px-lg py-sm rounded-full font-label-md text-label-md bg-error text-on-error hover:opacity-90 active:scale-95 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default AdminDashboard;
