import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/header';
import Hompepage from './components/homePage';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <Route exact path="/" component={Hompepage} />
          <Route exact path="/contact" component={Contact} />

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
