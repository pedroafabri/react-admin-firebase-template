import { defaultTheme } from 'react-admin';
import red from '@mui/material/colors/red';

const Theme = {
    ...defaultTheme,
    palette: {
        primary: {
          main: '#c74431'
        },
        secondary: {
          main: '#DF6957'
        },
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    }
};

export default Theme;
