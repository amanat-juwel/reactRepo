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
import PersonList from './components/personList/person-list';
import PersonCreate from './components/personList/person-create';
import Album from './components/album';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/person" component={PersonList} />
          <Route exact path="/person/create" component={PersonCreate} />
          <Route exact path="/album" component={Album} />

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
