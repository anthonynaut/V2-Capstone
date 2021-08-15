import React from 'react';
import ReactDOM from 'react-dom';
import { Home, DataTable, Dashboard, Single, Blades, SignIn, Blog, Gear, ReviewsForm, ComingSoon, About, Shipping, Contact, Services, NewArrivals} from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { FirebaseAppProvider, AuthCheck } from 'reactfire'; 
import 'firebase/auth'; 
import { firebaseConfig } from './firebaseConfig' 

ReactDOM.render(
  <React.StrictMode>
      <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense = {true}>
        <Provider store = { store }>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={'Latchless Inventory'}/>
        </Route>

        <Route path='/Single'>
          <Single></Single>
        </Route>


        <Route path='/ReviewsForm'>
          <ReviewsForm></ReviewsForm>
        </Route>

        <Route path='/Blades'>
          <Blades></Blades>
        </Route>



        <Route path='/Gear'>
          <Gear></Gear>
        </Route>


        <Route path='/NewArrivals'>
          <NewArrivals></NewArrivals>
        </Route>


        <Route path='/ComingSoon'>
          <ComingSoon></ComingSoon>
        </Route>


        <Route path='/Services'>
          <Services></Services>
        </Route>


        <Route path='/Shipping'>
          <Shipping></Shipping>
        </Route>


        <Route path='/About'>
          <About></About>
        </Route>


        <Route path='/Blog'>
          <Blog></Blog>
        </Route>

        <Route path='/Contact'>
          <Contact></Contact>
        </Route>

        <Route path='/SignIn'>
          <SignIn></SignIn>
        </Route>

        <Route path='/Dashboard'>
    <Dashboard></Dashboard>
    </Route>

      </Switch>
    </Router>
    </Provider>
  </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
