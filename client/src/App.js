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
import Construction from './components/Construction';
import ContactUs from './pages/ContactUs';
import About from './components/About';
import Payment from './components/Payment';

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
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/adminHome" component={AdminHome} />
          <Route exact path="/profile/:id" component={Profile} />

          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/amenities" component={Amenities} />
          <Route exact path="/documents" component={Documents} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/about" component={About} />
          <Route exact path="/construction" component={Construction} />
          <Route exact path="/payment" component={Payment} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
