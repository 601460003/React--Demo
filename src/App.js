import React, {Component} from 'react';
// import logo from './assets/img/logo.svg';
import './assets/css/App.css';
// import Home from './component/Home'
// import News from './component/News'
// import Myform from './component/Myform'
// import Otherform from './component/Otherform'
import Todolist from './component/Todolist'
// import Index from './component/Index'
// import HttpShop from './component/HttpShop'
import Created from './component/Created'

class App extends Component {
    constructor() {
        super();
        this.state = {
            flag: true
        }
    }
    setFlag=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }

    render() {
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
                    {/*<Index></Index>*/}
                    {/*<HttpShop></HttpShop>*/}
                    {
                        this.state.flag?<Created></Created>:''
                    }
                    <button onClick={this.setFlag}>挂载和销毁声明组件周期函数</button>
                </header>
            </div>
        )
    }
}

export default App;
