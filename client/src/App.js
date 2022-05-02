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
import UnitInfo from './pages/UnitInfo';
import ContactUs from './pages/ContactUs';

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
        <div className="flex-column justify-content-center min-100-vh">
          <Header />
          <div className='d-flex justify-content-center'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/adminHome" component={AdminHome} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/unit/:id" component={UnitInfo} />
              <Route exact path="/admin" component={AdminHome} />
              <Route exact path="/amenities" component={Amenities} />
              <Route exact path="/documents" component={Documents} />
              <Route exact path="/contactUs" component={ContactUs} />

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
