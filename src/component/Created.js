/**
 *  React生命周期函数：
 *  组件加载之前，组件加载完成，以及组件更新数据，组件销毁的过程
 *  出发的一系列的方法，就叫生命周期
 *
 *  组件加载是出发的函数：
 *  constructor ; componentWillMount; render ;componentDidMount
 *
 *  组件更新的时候触发的生命周期函数：
 *  shouldComponentUpdata  componentWillMount; render ;componentDidMount
 *
 *  在父组件里面改变props传值的时候触发：
 *  componWillReceiveProps
 *
 *  组件销毁是触发：
 *  componentWillUnmount
 *
 *  开发中常用的钩子函数
 *  加载的时候：componentWillMount; render ;componentDidMount
 *  更新的时候：componentWillMount; render ;componentDidMount
 *  销毁的时候：componentWillUnmount
 *
 * */


import React, {Component} from 'react'

class Created extends  Component{
    constructor(){
        super();
        console.log('01第一个触发的生命钩子--构造函数')
        this.state={
            msg:'我是信息'
        }
    }

    /**
     * 以下是生命钩子
     */
    componentWillMount(){
        console.log('02组件将要挂载')
    }

    componentDidMount(){
        console.log('04组件挂载完成以后--这时候可以操控真实dom')
    }

    //是否要更新数据，如果返回true才会执行更新数据的造作
    shouldComponentUpdata(nextProps,nextState){
        console.log('01是否要更新数据');
        console.log(nextProps);
        console.log(nextState);
        return true
    }
    //将要更新时触发
    componentWillUpdata(){
    console.log('02将要跟新的时候触发方法')
    }
    //组件完成时触发
    componentDidUpdate(){
        console.log('04跟新完成的时候触发方法')
    }
   //组件销毁时触发的钩子 ==用于当用户修改完信息后，没有保存直接按返回时，此时钩子会触发 然后写保存数据的方法
    componentWillUnmount(){
     console.log('组件销毁了')
    }

    //自定义方法
    setMst=()=>{
      this.setState({
          msg:'改变你的时候触发钩子'
      })
    };

    render(){
        console.log('03数据渲染render')
        return(
            <div>
                生命周期函数--{this.state.msg}
                <br/>
                <button onClick={this.setMst}>跟新msg数据</button>
            </div>
        )
    }
}

export default Created;