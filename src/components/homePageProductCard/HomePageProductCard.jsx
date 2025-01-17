import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // Ajoute un produit au panier
    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Ajouté au panier");
    }

    // Supprime un produit du panier
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Supprimé du panier");
    }

    // Enregistre les articles du panier dans le localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Récupère le rôle de l'utilisateur depuis le localStorage
    const user = JSON.parse(localStorage.getItem('users'));
    const userRole = user?.role;

    return (
        <div className="mt-10">
            {/* En-tête */}
            <div className="">
                <h1 className="text-center mb-5 text-2xl font-semibold">Produits les plus Vendus</h1>
            </div>

            {/* Principal */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex justify-center">
                        {loading && <Loader />}
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, title, price, productImageUrl } = item;
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-80 h-96 w-full"
                                            src={productImageUrl}
                                            alt="img"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                Ivoire Coding Center E-commerce
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center">
                                                {userRole ? (
                                                    userRole === 'admin' || userRole === 'user' ? (
                                                        Array.isArray(cartItems) && cartItems.some((p) => p.id === item.id) ? (
                                                            <button
                                                                onClick={() => deleteCart(item)}
                                                                className="bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                            >
                                                                Supprimé du Panier
                                                            </button>
                                                        ) : (
                                                            <button
                                                                onClick={() => addCart(item)}
                                                                className="bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                            >
                                                                Ajouté au Panier
                                                            </button>
                                                        )
                                                    ) : (
                                                        <button
                                                            disabled
                                                            className="w-full px-4 py-3 text-center text-gray-500 bg-gray-200 border border-gray-400 rounded-xl"
                                                        >
                                                            Vous n'avez pas la permission d'ajouter au panier
                                                        </button>
                                                    )
                                                ) : (
                                                    <button
                                                        disabled
                                                        className="w-full px-4 py-3 text-center text-gray-500 bg-gray-200 border border-gray-400 rounded-xl"
                                                    >
                                                        Veuillez vous connecter pour ajouter au panier
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;
