import React from 'react';
// import logo from './assets/img/logo.svg';
import './assets/css/App.css';
// import Home from './component/Home'
// import News from './component/News'
// import Myform from './component/Myform'
// import Otherform from './component/Otherform'
import Todolist from './component/Todolist'




function App() {
    return (
        < div className="App">
            < header className="App-header">
                {/*模块化绑定图片*/}
                {/*< img src={logo} className="App-logo" alt="logo"/>*/}
                {/*<Home></Home>*/}
                {/*<News></News>*/}
                {/*<Myform></Myform>*/}
                {/*<Otherform></Otherform>*/}
                <Todolist></Todolist>
            </header>
        </div>
)
}

export default App;
