import React from 'react';
import Header from './Components/Header';
import { Route, BrowserRouter as MyRouter, Switch } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import { Provider } from 'react-redux';
import configureStore from './Stores/LoginStore';


function App() {
  const loginStore = configureStore;
  return (
    <Provider store={loginStore}>
    <MyRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/myDashboard" component={DashboardPage} />
        </Switch>
      </div>
    </MyRouter>
    </Provider>
  );
}

export default App;
