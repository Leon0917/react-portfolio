import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Switch>
       <Route>
         
       </Route>
     </Switch>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
