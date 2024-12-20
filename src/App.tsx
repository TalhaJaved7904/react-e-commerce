import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/cards';
import Approuter from './config/Approuter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'


function App() {
  return (
    <div className="App">
      <Provider store={}>
        <Approuter />

      </Provider>

    </div>
  );
}

export default App;
