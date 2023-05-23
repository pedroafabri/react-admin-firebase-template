import { useState } from 'react';
import { useNotify } from 'react-admin';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { sendPasswordRecoverEmail } from '@/client/firebase/auth';
import { MESSAGES } from '@/constants';

const ResetPasswordForm = ({ setShowResetPassword } : { setShowResetPassword: Function }) => {
  const [email, setEmail] = useState('');
  const notify = useNotify();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordRecoverEmail(email);
    } finally {
      notify(MESSAGES.PASSWORD_RECOVERY_EMAIL_SENT);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img src='/logo.png'/>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Endereço de Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Recuperar Conta
        </Button>
        <Button
          onClick={() => setShowResetPassword(false)}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Voltar
        </Button>
      </Box>
    </Box>
    )
}

export default ResetPasswordForm;
