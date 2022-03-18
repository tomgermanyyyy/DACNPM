import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import { HomePage, LoginPage, ChangePasswordPage } from './pages';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/change-password" component={ChangePasswordPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
