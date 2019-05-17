import React, {Component} from 'react';
import '../assets/css/App.css'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {title:'vue',checked:true},
                {title:'angular',checked:false},
                {title:'react',checked:false},
                {title:'css',checked:false},
            ]
        }

    }

    //增加留言条的方法
    addDate = (e) => {
        // 获取数组
        let templeList = this.state.list;
        // 获取ref绑定input的值
        let title = this.refs.title.value;
        if (this.refs.title.value){
            templeList.push({
                title:title,
                checked:false
            })
        }
        // 最后一步通过setState动态去更新视图层
        this.setState({
            list: templeList
        })
        this.refs.title.value = '';
        //缓存数据h5
        localStorage.setItem('todolist',JSON.stringify(templeList))
    };

    //删除留言条的方法 通过bind（把key传值），有点类似小程序
    removeData(key) {
        let templeList = this.state.list;
        templeList.splice(key, 1)
        this.setState({
            list: templeList
        })
        //缓存数据h5
        localStorage.setItem('todolist',JSON.stringify(templeList))
    };
    //按回车增加事件 忘记了let有块级保护
    add=(e)=>{
        let title = this.refs.title.value;
        let templeList = this.state.list;
        if(e.keyCode==13){
           if (title){
               templeList.push({
                   title:title,
                   checked:false
               })
           }
            this.setState({
                list:templeList
            })
            this.refs.title.value=''
        }
        //缓存数据h5
        localStorage.setItem('todolist',JSON.stringify(templeList))
    };
    //动态改变视图
    changeBox(key){
        let templeList = this.state.list;
        templeList[key].checked=!templeList[key].checked;
        this.setState({
            list:templeList
        })
        //缓存数据h5
        localStorage.setItem('todolist',JSON.stringify(templeList))
    }


    /**
     * 生命钩子获取数据,页面加载就会触发
     */
   componentDidMount(){
    let todoLists = JSON.parse(localStorage.getItem('todolist'));
   if(todoLists){
       this.setState({
           list:todoLists
       })
   }
    }

    render() {
        return (
            <div className='container'>
                <h2>todolistDemo</h2>
                <input ref='title' onKeyUp={this.add}/>
                <button onClick={this.addDate}>增加</button>
                <hr/>
                <h3>代办事项</h3>
                <ul className='box'>
                    {/*map方法是可以原数组中的元素进行处理、修改等操作，然后返回一个新的数组对象。*/}
                    {
                        this.state.list.map((value, key) => {
                           if(!value.checked){
                               return(
                                   <li key={key}>
                                       <input type="checkbox" checked={value.checked} onChange={this.changeBox.bind(this,key)}/>{value.title}
                                       <button onClick={this.removeData.bind(this, key)}>删除</button>
                                   </li>
                               )
                           }
                        })
                    }
                </ul>
                <hr/>
                <h3>已完成事项</h3>
                <ul className='box1'>
                    {
                        this.state.list.map((value, key) => {
                            if(value.checked){
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.changeBox.bind(this,key)}/>{value.title}
                                        <button onClick={this.removeData.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todolist;