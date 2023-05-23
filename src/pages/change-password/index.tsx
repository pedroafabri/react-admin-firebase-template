import React, {FormEvent} from 'react'
import { useState } from 'react';
import { useNotify, Notification } from 'react-admin';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { LABELS, MESSAGES } from '@/constants';

const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('')
  const notify = useNotify()
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!currentPassword || !newPassword || !newPasswordConfirm) { return notify("Preencha ambos os campos corretamente.", { type: 'error' }) }
    if (newPassword !== newPasswordConfirm) { return notify(MESSAGES.PASSWORDS_NOT_EQUAL, { type: 'error' }) }

    const user = getAuth().currentUser
    if(!user) {
      notify(MESSAGES.GENERIC_ERROR, { type: 'error' });
      console.error('user returned null when fetching firebase current logged user.');
      return;
    }

    const credentials = EmailAuthProvider.credential(
      user?.email || '',
      currentPassword
     );
    reauthenticateWithCredential(user, credentials)
      .then(() => {
        updatePassword(user, newPassword)
          .then(() => {
            notify(MESSAGES.PASSWORD_UPDATED)
            navigate('/')
          })
          .catch(e => {
            console.error(e);
            notify(MESSAGES.GENERIC_ERROR, { type: 'error' })
          })
      }
      ).catch(e => {
        console.error(e);
        const message = e.code === 'auth/wrong-password' ? MESSAGES.INCORRECT_CURRENT_PASSWORD : MESSAGES.GENERIC_ERROR
        notify(message, { type: 'error' })
      })


  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="currentPassword"
          label={LABELS.CURRENT_PASSWORD}
          name="currentPassword"
          type="password"
          autoFocus
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="newPassword"
          label={LABELS.NEW_PASSWORD}
          name="newPassword"
          type="password"
          autoFocus
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="newPasswordConfirm"
          label={LABELS.NEW_PASSWORD_CONFIRMATION}
          name="newPasswordConfirm"
          type="password"
          autoFocus
          value={newPasswordConfirm}
          onChange={(e) => setNewPasswordConfirm(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >{LABELS.CHANGE_PASSWORD}</Button>
      </Box>
      <Notification />
    </Box>
  )
}

export default ChangePasswordPage;