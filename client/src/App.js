import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import {
  HomePage,
  LoginPage,
  ChangePasswordPage,
  DetailPage,
  HistoryPage,
} from './pages';
import PrivateRoute from './components/PrivateRoute';
import { loadUser } from './actions/auth';

const App = () => {
  useEffect(() => store.dispatch(loadUser()), []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute
            exact
            path="/change-password"
            component={ChangePasswordPage}
          />
          <PrivateRoute path="/detail-page/:siloID" component={DetailPage} />
          <PrivateRoute exact path="/history" component={HistoryPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
