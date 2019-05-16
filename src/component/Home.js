import React, {Component, Fragment} from 'react'
//和vue一样，引入News组件，形成父子组件的关系
import News from '../component/News'

class Home extends Component {
    constructor(props) {    //props和vue一样用于父子之间的传值
        super(props);
        //react定义数据规范，插值
        this.state = {
            name: '数据绑定',
            title: '属性绑定',
            color: 'red',
            value: '事件1绑定bind'
        }
        //第二种绑定事件，this指向改为全局的
        this.say = this.say.bind(this);
    }

    run() {
        //第一种绑定事件，this指向bing（this）
        this.setState({value: 'X'})
    }

    say() {
        alert(this.state.title)
    }
//第三种绑定事件，直接使用箭头函数
    hey=()=>{
        alert(this.state.name)
    };

    setData = () => {
        this.setState({value: 'X'})
    };

    setMessage = (str) => {
        this.setState({
            name: str
        })
    };

    render() {
        return (
            <Fragment>
                <h4>事件的绑定的三种方法</h4>
                <div>{this.state.name}插值绑定</div>
                <div title={this.state.title} className={this.state.color}>属性/样式绑定</div>
                <br/>
                <br/>
                <button onClick={this.run.bind(this)}>{this.state.value}</button>
                <br/>
                <button onClick={this.say}>事件2定义全局</button>
                <br/>
                <button onClick={this.hey}>事件3箭头函数</button>
                <br/>
                <button onClick={this.setData}>事件4用setState方法动态改变值</button>
                <br/>
                <button onClick={this.setMessage.bind(this,'张三')}>执行方法传值(传参)</button>
            </Fragment>
        )
    }
}

//组件的固定写法
export default Home;