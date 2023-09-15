import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"
import { Home } from './views/Home';
import { About } from './views/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
