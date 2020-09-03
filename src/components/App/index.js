import React from 'react';
import '../App/index.css';
import Home from '../../pages/Home';
import Category from '../../pages/Category';
import Search from '../../pages/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { deepPurple, lightGreen } from '@material-ui/core/colors';


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({

        palette: {
          primary: { main: '#00a152' },
          secondary: deepPurple,
          type: prefersDarkMode ? 'dark' : 'dark',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:slug">
            <Category />
          </Route>
          <Route path="/search/:query">
            <Search />
          </Route>
        </Switch>

      </Router >
    </ThemeProvider>

  );
}

export default App;
