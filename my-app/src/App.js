import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//components
import Header from './components/header';
import Homepage from './components/homepage';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact" component={Contact} />

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
