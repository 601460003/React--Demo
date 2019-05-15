import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import Home from './component/Home'
import News from './component/News'

function App() {
    return (
        < div className="App">
            < header className="App-header">
                < img src={logo} className="App-logo" alt="logo"/>
                < a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <Home></Home>
            </header>
        </div>
)
}

export default App;
