// react入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
//加快js的编译速度
import * as serviceWorker from './serviceWorker';


//
// <div /> 会被编译成 React.createElement('div')
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();



