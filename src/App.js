import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';
import {Switch, Route, Redirect} from 'react-router-dom';
import Practical from './Practical';
import Practical1 from './Practical1';
import Practical2 from './Practical2';
import Todolist from './Todolist';
import ComA from './ComA';
import BookContainer from './Components1/BookContainer';
import HookBookContainer from './Components1/HookBookContainer';
import { Provider } from 'react-redux';
import store from './redux1/store';
// import Usestate from './Usestate';
// import Example1 from './Example1';
// import ApiExample from './ApiExample';
// import CakeContainer from './Components/CakeContainer';
// import {Route, Switch} from 'react-router-dom';
// import Hook1 from './Components/Hook1';
// import Hook2 from './Components/Hook2';
// import Hook3 from './Components/Hook3';
// import Hook4 from './Components/Hook4';
// import Hook5 from './Components/Hook5';



const App = () => {


  return(
   
    <>
    {/* <Navbar />
     <Switch>

       <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/contact" component={Contact} />
       <Route exact path="/service" component={Service} />
       <Redirect to="/" />

     
     </Switch>
     <Footer /> */}

    {/* <Practical2 /> */}
    <Todolist />
    {/* <ComA /> */}
    {/* <Provider store={store}>
   <BookContainer />
   <HookBookContainer />
   </Provider> */}
    </>
   
  );
}

export default App;