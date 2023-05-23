import { CreateParams } from "react-admin";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebaseConfig";
import ERRORS from '@/constants/firebase-errors';
import { createHash } from '@/helpers'

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
    throw new Error(ERRORS[e.code] || ERRORS.fallback)
  }
}