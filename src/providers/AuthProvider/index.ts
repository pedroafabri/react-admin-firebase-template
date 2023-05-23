import { FirebaseAuthProvider } from "react-admin-firebase";
import { firebaseConfig } from "@/firebaseConfig";
import { isAdminUser } from "@/client/firebase/auth";

const firebaseAuthProvider = FirebaseAuthProvider(firebaseConfig, {});

const login = async (params: any) => {
  console.log('///////////')
  const isAdmin = await isAdminUser(params.username);
  if(!isAdmin) { throw new Error("Not an admin.")}
  await firebaseAuthProvider.login(params);
}

export default {
  ...firebaseAuthProvider,
  login
}
