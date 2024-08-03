import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig.jsx";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Navbar from "../../components/navbar/Navbar.jsx";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const userLoginFunction = async () => {
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

            const q = query(
                collection(fireDB, "user"),
                where('uid', '==', users?.user?.uid)
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let user;
                QuerySnapshot.forEach((doc) => user = doc.data());
                localStorage.setItem("users", JSON.stringify(user));
                setUserLogin({ email: "", password: "" });
                toast.success("Login Successfully");
                setLoading(false);
                if (user.role === "user") {
                    navigate('/user-dashboard');
                } else {
                    navigate('/admin-dashboard');
                }
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }

    return (
        <div className="relative flex flex-col h-screen bg-gray-100">
            <Navbar />
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <Loader />
                </div>
            )}
            <div className="flex flex-1 justify-center items-center">
                <div className="bg-white p-8 border border-gray-300 rounded-xl shadow-lg w-full max-w-md">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700">
                            Se Connecter
                        </h2>
                    </div>

                    <div className="mb-5">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={userLogin.email}
                            onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
                            className="bg-gray-50 border border-gray-300 px-4 py-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                    </div>

                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder="Password"
                            value={userLogin.password}
                            onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                            className="bg-gray-50 border border-gray-300 px-4 py-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                    </div>

                    <div className="mb-5">
                        <button
                            type="button"
                            onClick={userLoginFunction}
                            className="bg-blue-500 hover:bg-blue-600 w-full text-white text-center py-3 font-semibold rounded-md shadow-sm transition-all"
                        >
                            Se Connecter
                        </button>
                    </div>

                    <div className="text-center">
                        <h2 className="text-gray-600">Pas de compte <Link className="text-blue-500 font-semibold hover:underline" to="/signup">S'inscrire</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
