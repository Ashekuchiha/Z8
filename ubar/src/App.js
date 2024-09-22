import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeSettings } from './theme/Theme';
import RTL from './layouts/full/shared/customizer/RTL';
import ScrollToTop from './components/shared/ScrollToTop';
import {Router, RouterCT } from './routes/Router';
import { useEffect } from 'react';
import { checkAuth } from './views/MyWidgets/userSlice';

function App() {

  const theme = ThemeSettings();
  const customizer = useSelector((state) => state.customizer);
  const dispatch = useDispatch();
  const role = useSelector((state)=>state.user.role);

  const routerToUse = role === 'admin' ? Router : RouterCT;

  const routing = useRoutes(routerToUse);


  useEffect(() => {
    dispatch(checkAuth()); // Check authentication on app load
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <RTL direction={customizer.activeDir}>
        <CssBaseline />
        <ScrollToTop>{routing}</ScrollToTop>
      </RTL>
    </ThemeProvider>
  );
}

export default App;
