import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header'; //Header Static has NAV bar
import Footer from './components/Footer'; //Footer Static
import NoMatch from './components/NoMatch'; //404 Page

import AdminHome from './pages/AdminHome';
import Amenities from './pages/Amenities';
import Documents from './pages/Documents';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UnitInfo from './pages/UnitInfo';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/adminHome" component={AdminHome} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/unit/:id" component={UnitInfo} />
              <Route exact path="/admin" component={AdminHome} />
              <Route exact path="/amenities" component={Amenities} />
              <Route exact path="/documents" component={Documents} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
