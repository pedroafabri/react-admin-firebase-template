import { UserType } from "@/types";
import { QuerySnapshot } from "firebase/firestore";

export const checkSnapDocs = (snap: QuerySnapshot) : Boolean => snap.docs.length === 1 
  && snap.docs[0].data().userType === UserType.ADMIN