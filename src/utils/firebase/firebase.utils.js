import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFezpELziDsZLEvNMVfCFwZ_qhMwVuOk8",
  authDomain: "crown-clothing-db-2db11.firebaseapp.com",
  projectId: "crown-clothing-db-2db11",
  storageBucket: "crown-clothing-db-2db11.appspot.com",
  messagingSenderId: "283241095918",
  appId: "1:283241095918:web:d4a7e5b76d7b91100c49ff",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Error creating the user", error);
    }
  }

  return userDocRef;
};
