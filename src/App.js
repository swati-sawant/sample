import logo from './logo.svg';
import React, { component }  from 'react';
import { BrowserRouter , Router, Route, Link, Routes, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SearchBar from './components/SearchBar';
import ChangePassword from './components/ChangePassword';


function App() {
  return (
    // <div>
    //   {/* <Signup /> */}
    //   {/* <Login /> */}
    //   <Router>
    //     <Switch>
    //       <Route exact path="/" component={<Login/>}/>
    //       <Route exact path="/signup" component={<SignUp/>}/>
    //     </Switch>
    //   </Router>
    // </div>  
    
    <div className="App">
    <BrowserRouter>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/searchbar" component={SearchBar}/>
          <Route path="/changepassword" component={ChangePassword}/>
        </Switch>
      </div>
    </BrowserRouter>
  </div>

    


  );
}

export default App;
