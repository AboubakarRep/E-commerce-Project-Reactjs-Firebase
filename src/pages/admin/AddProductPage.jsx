import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";

const categoryList = [
    'fashion', 'shirt', 'jacket', 'mobile', 'laptop', 'shoes', 'home', 'books'
];

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
    });

    const addProductFunction = async () => {
        if (Object.values(product).some(field => field === "")) {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product);
            toast.success("Product added successfully");
            navigate('/admin-dashboard');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Failed to add product");
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center h-screen bg-gray-100'>
                {loading && <Loader />}
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
                    <h2 className='text-center text-3xl font-bold text-pink-600 mb-6'>
                        Ajouté un Produit
                    </h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) => setProduct({ ...product, title: e.target.value })}
                            placeholder='Product Title'
                            className='w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                            placeholder='Product Price'
                            className='w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
                            placeholder='Product Image URL'
                            className='w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
                        />
                    </div>
                    <div className="mb-4">
                        <select
                            value={product.category}
                            onChange={(e) => setProduct({ ...product, category: e.target.value })}
                            className='w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
                        >
                            <option disabled>Select Product Category</option>
                            {categoryList.map((name, index) => (
                                <option key={index} value={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <textarea
                            value={product.description}
                            onChange={(e) => setProduct({ ...product, description: e.target.value })}
                            name="description"
                            placeholder="Product Description"
                            rows="4"
                            className='w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
                        />
                    </div>
                    <button
                        onClick={addProductFunction}
                        type='button'
                        className='w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-bold transition duration-300'
                    >
                        Ajouté un Produit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddProductPage;
