import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Header/>
     <Switch>
       <Route exact ="/">
           <Portfolio />
       </Route>
       <Route exact ="/about">
           <About />
       </Route>
       <Route exact ="/contact">
           <Portfolio />
       </Route>
       <Route exact ="/portfolio">
           <Portfolio />
       </Route>

     </Switch>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
