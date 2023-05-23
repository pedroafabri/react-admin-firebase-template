import { AppBar as RAAppBar } from 'react-admin';
import { Box, Typography } from '@mui/material';
import UserMenu from '../user-menu';

const AppBar = () => (
  <RAAppBar userMenu={<UserMenu />} >
      <Box flex="1">
          <Typography variant="h6" id="react-admin-title"></Typography>
      </Box>
  </RAAppBar>
);

export default AppBar;