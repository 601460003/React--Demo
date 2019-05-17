/**
 * --save安装依赖包的时候会自动生成在配置文件里面
 */
import React, {Component} from 'react'
import '../assets/css/App.css'
//引入模块axios
import axios from 'axios'
//解决跨域插件fetchJsonp
import fetchJsonp from 'fetch-jsonp'


class HttpShop extends Component {
    constructor() {
        super();

        this.state = {
            list: [],
            item: []
        }
    }

    //获取网络接口数据，然后setState刷新数值
    getData = () => {
        let api = 'https://www.easy-mock.com/mock/5c680d841b1cdb6835813584/example/miss';
        axios.get(api)
            .then(res => {
                console.log(res.data.data.floor1);
                this.setState({
                    list: res.data.data.floor1
                })
            })
            .catch(error => {
                console.log(error)
            })
    };
    //获取Jsonp网络接口数据，然后setState刷新数值
    getJsonp = () => {
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        fetchJsonp(api)
            .then(res => {
                return res.json()
            })
            .then((Json) => {
                console.log(Json.result)
                this.setState({
                    item: Json.result
                })
            })
            .catch(error => {
                console.log(error)
            })
    };


    /**
     * 生命钩子获取数据,页面加载就会触发==vue中的created()钩子
     */
    componentDidMount(){
      // this.getData();
    }

    render() {
        return (
            <div>
                <h4>利用插件axios--fetch-jsonp获取网络数据</h4>
                <button onClick={this.getData}>axios获取网络api接口数据</button>

                <ul className='shopList'>
                    {
                        this.state.list.map((value, key) => {
                            return <li key={key}>
                                <p>{value.goodsId}</p>
                                <img src={value.image}/>
                            </li>
                        })
                    }
                </ul>
                <hr/>
                <button onClick={this.getJsonp}>fetch-jsonp获取网络跨域jsonp接口数据</button>
                <ul className='shopList'>
                    {
                        this.state.item.map((value, key) => {
                            return <li key={key}>
                                <p>{value.title}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default HttpShop;