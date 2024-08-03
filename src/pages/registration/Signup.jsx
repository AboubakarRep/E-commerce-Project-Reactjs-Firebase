/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar.jsx";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    /**========================================================================
     *                          User Signup Function 
    *========================================================================**/

    const userSignupFunction = async () => {
        // validation 
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required")
            setLoading(false);
            return;
        }

        if (userSignup.password.length < 6) {
            toast.error("Le mot de passe doit contenir au moins 6 caractères.");
            setLoading(false);
            return;
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user Reference
            const userReference = collection(fireDB, "user");

            // Add User Detail
            await addDoc(userReference, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            });

            toast.success("Signup Successfully");
            navigate('/login');
        } catch (error) {
            console.log(error);
            toast.error("Signup Failed: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar />
            <div className='flex justify-center items-center flex-1'>
                {loading && <Loader />}
                {/* Signup Form  */}
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    {/* Top Heading  */}
                    <div className="mb-6">
                        <h2 className='text-center text-3xl font-extrabold text-gray-800'>
                            Créez un Compte
                        </h2>
                    </div>

                    {/* Input One  */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder='Nom Complet'
                            value={userSignup.name}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    name: e.target.value
                                });
                            }}
                            className='bg-gray-100 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>

                    {/* Input Two  */}
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder='Adresse Email'
                            value={userSignup.email}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    email: e.target.value
                                });
                            }}
                            className='bg-gray-100 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>

                    {/* Input Three  */}
                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder='Mot de Passe'
                            value={userSignup.password}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    password: e.target.value
                                });
                            }}
                            className='bg-gray-100 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm outline-none focus:ring-2 focus:ring-indigo-500'
                        />
                    </div>

                    {/* Signup Button  */}
                    <div className="mb-4">
                        <button
                            type='button'
                            onClick={userSignupFunction}
                            className='bg-indigo-600 hover:bg-indigo-700 w-full text-white text-center py-2 font-bold rounded-md transition duration-200'
                        >
                            S'inscrire
                        </button>
                    </div>

                    <div>
                        <p className='text-center text-gray-600'>
                            Vous avez déjà un compte ? <Link className='text-indigo-600 font-bold' to={'/login'}>Se connecter</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
