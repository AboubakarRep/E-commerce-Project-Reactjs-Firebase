import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
    // Récupérer l'utilisateur depuis localStorage
    const user = JSON.parse(localStorage.getItem('users'));

    // Navigation
    const navigate = useNavigate();

    // Fonction de déconnexion
    const logout = () => {
        localStorage.clear('users');
        navigate("/login");
    };

    // Items du panier
    const cartItems = useSelector((state) => state.cart);

    // Liste des éléments de navigation
    const navList = (
        <ul className="flex space-x-5 text-white font-medium text-md px-5 items-center">
            {/* Accueil */}
            <li className="relative group px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-800 hover:text-white transition-colors duration-300">
                <Link to={'/'}>
                    Accueil
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>

            {/* Tous les produits */}
            <li className="relative group px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-800 hover:text-white transition-colors duration-300">
                <Link to={'/allproduct'}>
                    Tous les produits
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>

            {/* Inscription */}
            {!user ? (
                <li className="relative group px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-800 hover:text-white transition-colors duration-300">
                    <Link to={'/signup'}>
                        Inscription
                    </Link>
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                </li>
            ) : null}

            {/* Connexion */}
            {!user ? (
                <li className="relative group px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-800 hover:text-white transition-colors duration-300">
                    <Link to={'/login'}>
                        Connexion
                    </Link>
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                </li>
            ) : null}

            {/* Tableau de bord utilisateur */}
            {user?.role === "user" && (
                <li className="relative group px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-800 hover:text-white transition-colors duration-300">
                    <Link to={'/user-dashboard'}>
                        Tableau de bord utilisateur
                    </Link>
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                </li>
            )}

            {/* Tableau de bord administrateur */}
            {user?.role === "admin" && (
                <li className="relative group px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-800 hover:text-white transition-colors duration-300">
                    <Link to={'/admin-dashboard'}>
                        Tableau de bord administrateur
                    </Link>
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                </li>
            )}

            {/* Déconnexion */}
            {user && (
                <li className="relative group px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-800 hover:text-white transition-colors duration-300" onClick={logout}>
                    Déconnexion
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                </li>
            )}

            {/* Panier */}
            <li className="relative group px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-800 hover:text-white transition-colors duration-300">
                <Link to={'/cart'}>
                    Panier({cartItems.length})
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>
        </ul>
    );

    return (
        <nav className="bg-[#2D2D2D] sticky top-0 shadow-lg transition duration-500 ease-in-out">
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
                {/* Partie gauche */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className="font-bold text-white text-2xl text-center">Ivoire Coding Center E-commerce</h2>
                    </Link>
                </div>

                {/* Partie droite */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Barre de recherche */}
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;
