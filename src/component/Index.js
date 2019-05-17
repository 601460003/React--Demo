/**这里在父组件里面操控子组件
 * 父组件主动获取子组件的数据
 * 1.调用子组件的时候指定ref的值   <Header ref=‘header’></Header>
 * 2.通过this.refs.header 获取整个子组件的实例(组件加载完dom后执行)
 */
import React, {Component} from 'react'
import Header from '../component/Header'

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'我是一个父组件',
            title:'首页',
            age:20
        }
    }
    run=()=>{
        alert('我是父组件的run方法')

    };

    //获取子组件传过来的数据
    getChildData=(result)=>{
        alert(result);
        this.setState({
            msg:result
        })
    };
    //父组件主动获取子组件的方法
    getHeader=()=>{
        this.refs.header.run()
    }

    render(){
        return(
            <div>
                {/*好像angular一样MM={this}代表获取整个父组件*/}
                <Header
                    ref='header'
                    title={this.state.title}
                    run={this.run}
                    MM={this}
                    age={this.state.age}
                ></Header>
                <h2>{this.state.msg}</h2>
                <button onClick={this.getHeader}>获取整个子组件的实例</button>

            </div>
        )
    }
}


export  default Index;