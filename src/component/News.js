import React from 'react';

class News extends React.Component {
    constructor() {
        super();
        this.state = {
            list:[
                {title:'name'},
                {age:18},
                {height:180},
                ],
            list1:[1,2,3,4,5],
            list2:[<h2 key='1'>我</h2>,<h2 key='2'>你</h2>]
        }
    }

    render() {
         //遍历数据的第一种方法
        let resultList = this.state.list1.map(function (value,key) {
            return <li key={key}>{value}</li>
        });
        return (
            <div>
              <p>组件第二种写法</p>
                {/*遍历数据的第二种方法*/}
                <ul>{this.state.list2}</ul>
                <ul>
                    {resultList}
                </ul>
                {/*遍历数据的第三种方法*/}
                <ul>
                    {this.state.list.map(function (value,key) {
                        return <li key={key}>{value.title}{value.age}{value.height}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default News;

