import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebaseConfig";
import { checkSnapDocs } from "./functions";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { CreateParams } from "react-admin";
import { createHash } from "@/helpers";
import { FIREBASE_ERRORS } from "@/constants";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

/**
 * Checks wheter or not an email is an admin user.
 * @param email The email to check against
 * @returns Boolean indicating if user is admin or not.
 */
export const isAdminUser = async (email: string) : Promise<Boolean> => {
  const q = query(collection(db, 'users'), where('email', '==', email))
  const snap = await getDocs(q);
  return checkSnapDocs(snap);
}

/**
 * Sends a password recovery email for the provided email address
 * @param email The email that wants to reset the password
 * @returns Promise<void>
 */
export const sendPasswordRecoverEmail = (email: string) => sendPasswordResetEmail(auth, email)

/**
 * Creates an AuthUser and send reset-password email.
 * @param params react-admin CreateParams.
 */
export const createAuthUser = async (params: CreateParams) => {
  try {
    
    const email: string = params.data.email;
    const password = await createHash(email + Date.now())
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await sendPasswordResetEmail(auth, email);
    return user;
  }catch(e: any) {
    throw new Error(FIREBASE_ERRORS[e.code] || FIREBASE_ERRORS.fallback)
  }
}