// Import necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp, collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Import Firebase configuration from a separate file
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

// Function to create an admin account
const createAdminAccount = async () => {
  try {
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123"; // Ensure the password meets Firebase criteria

    // Create the admin user
    const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);

    // Define the admin user object
    const user = {
      name: "Admin User",
      email: userCredential.user.email,
      uid: userCredential.user.uid,
      role: "admin",
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    // Reference to the Firestore collection
    const userReference = collection(fireDB, "users");

    // Add the admin user to Firestore
    await addDoc(userReference, user);

    console.log("Admin account created successfully");
  } catch (error) {
    console.error("Error creating admin account:", error);
  }
};

// Execute the function to create the admin account
createAdminAccount();
