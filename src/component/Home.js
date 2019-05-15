import React, {Component, Fragment} from 'react'
//和vue一样，引入News组件，形成父子组件的关系
import News from '../component/News'

class Home extends Component {
    constructor(props) {    //props和vue一样用于父子之间的传值
        super(props);
        //react定义数据规范，插值
        this.state = {
            name:'数据绑定',
        }
    }

    render() {
        return (
            <Fragment>
                <h5>{this.state.name}</h5>
                <News></News>
            </Fragment>
        )
    }
}

export default Home;