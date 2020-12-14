import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#030303',
    },
    clrAccent: '#161B22',
    clrHover: {
      primary: '#fafafa',
    },
  },
});

export default darkTheme;