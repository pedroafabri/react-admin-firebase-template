import { useState } from 'react';
import { Notification } from 'react-admin';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ResetPasswordForm from './components/ResetPasswordForm';
import LoginForm from './components/LoginForm';

import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where, Timestamp } from "firebase/firestore";
import { firebaseConfig } from "@/firebaseConfig";

const test = async () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const q = query(collection(db, 'coupons'), 
    where('validUntil', '>=', new Date())
  )

  const docs = (await getDocs(q)).docs
    .map(d => d.data())
    .filter(c => c.validFrom.toDate() <= new Date())

  console.log(docs);
}

const LoginPage = () => {
    const [showResetPassword, setShowResetPassword] = useState(false)

    test();

    return (
      <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        { showResetPassword 
        ? <ResetPasswordForm setShowResetPassword={setShowResetPassword}/> 
        : <LoginForm setShowResetPassword={setShowResetPassword}/>
        }
        <Notification />
      </Container>
      </>
    );
};

export default LoginPage;
