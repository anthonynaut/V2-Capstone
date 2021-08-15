import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>


         <Header/>

          <Switch>
            <Route path='/' component={Home} />
           
          </Switch>


           <Footer/>

      </Router>
    </div>
  );
}

export default App;

