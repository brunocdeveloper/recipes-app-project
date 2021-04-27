import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
// import rockGlass from './images/rockGlass.svg';
// import BottomMenu from './components/BottomMenu';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Login } />
    </Router>
    // <div className="meals">
    //   <span className="logo">TRYBE</span>
    //   <object
    //     className="rocksGlass"
    //     type="image/svg+xml"
    //     data={ rockGlass }
    //   >
    //     Glass
    //   </object>
    //   <BottomMenu />
    // </div>
  );
}

export default App;
