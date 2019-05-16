/**
 * 事件对象，键盘事件，表单事件，ref获取Dom节点，React实现类似Vue双向绑定
 *
 * 事件对象：在出发dom上的某个事件时，会产生一个事件对象event。这个对象中包含所有事件信息
 */

import React, {Component} from 'react';

class Myform extends Component {
    constructor() {
        super();
        this.state = {
            userName:'',
            firstName:'',
            lastName:'双向'
        }
    }

    run(event) {
        //获取执行dom节点,间接操控dom元素
        event.target.style.color='red'
        console.log(event.target)
    }
    //第一种方法
    getData=()=>{
        alert(this.state.userName)
        this.state.userName=''
    };
    inputChange=(e)=>{
        this.setState({
            userName:e.target.value
        })
    };
    //第二种方法
    inputChanges=()=>{
         let val = this.refs.firstName.value;
         this.setState({
             firstName:val
         })
    };
    getDatas=()=>{
        alert(this.state.firstName)
    };
    //键盘事件
    KeyUp(e){
        // e.keyCode来监听键盘的每一个键13代表enter
     if(e.keyCode==13) alert(e.target.value)

    }
    //封装双向绑定
    inputLast=(e)=>{
      this.setState({
          lastName:e.target.value
      })
    };

    render() {
        return (
            <div>
                <h3>表单事件</h3>
                <button onClick={this.run}>获取事件对象</button>
                <br/>
                {/*第一种方法获取表单的值*/}
                {/*1.onChange监听表单改变事件*/}
                {/*2.把表单改变的值赋给变量*/}
                {/*3.点击按钮获取值，单向绑定*/}
                <input onChange={this.inputChange}/>
                <button onClick={this.getData}>获取input的值1</button>
                <br/>
                {/*第二种获取表单的方法*/}
                {/*1.通过绑定ref获取值*/}
                <input ref='firstName' onChange={this.inputChanges}/>
                <button onClick={this.getDatas}>获取input的值2</button>
                <h4>键盘事件</h4>
                <input  onKeyUp={this.KeyUp} />
                <br/>
                <h3>双向数据绑定</h3>
                <input value={this.state.lastName}  onChange={this.inputLast}/>
                <p>{this.state.lastName}</p>
            </div>
        )
    }
}

export default Myform;