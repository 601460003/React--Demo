import React, {Component} from 'react';

class Otherform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            name: '',
            sex: '1',
            city:'广州',
            citys: ['中山', '江门', '广州'],
            hobby: [
                {title: '吃饭', 'checked': true},
                {title: '睡觉', 'checked': false},
                {title: '打游戏', 'checked': false},
            ],
            info: ''
        }
    }

    handelName = (e) => {
        this.setState({
            name: e.target.value
        })
    };
    handelSubmit = (e) => {
        //阻止默认事件
        e.preventDefault();
        console.log(this.state.name, this.state.sex,this.state.city,this.state.hobby,this.state.info)
    };
    handelSex = (e) => {
        this.setState({
            sex: e.target.value
        })
    };
    handelCity=(e)=>{
        this.setState({
            city: e.target.value
        })
    };
    //复选框难度大一点，对象的形式
    handelHobby=(key)=>{
       let hobby = this.state.hobby;
       hobby[key].checked=!hobby[key].checked;
       this.setState({
           hobby:hobby
       })
    };
    handelInfo=(e)=>{
        this.setState({
            info: e.target.value
        })
    };

    render() {
        return (
            <div>
                <h3>其他表单验证</h3>
                <form onSubmit={this.handelSubmit}>
                    用户名： <input type="text" value={this.state.name} onChange={this.handelName}/> <br/><br/>
                    性别： <input type="radio" value='1' checked={this.state.sex == 1} onChange={this.handelSex}/>男
                    <input type="radio" value='2' checked={this.state.sex == 2} onChange={this.handelSex}/>女
                    <br/><br/>
                    住址城市：
                    {/*直接js遍历数组*/}
                    <select value={this.state.city} onChange={this.handelCity}>
                        {
                            this.state.citys.map(function (value, key) {
                                return <option key={key}>{value}</option>
                            })
                        }
                    </select>
                    <br/>
                    <br/>
                    爱好：
                    {
                        this.state.hobby.map((value,key)=>{
                            return (
                                <span key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.handelHobby.bind(this,key)}/>{value.title}
                                </span>
                            )
                        })
                    }
                    <br/>
                    <br/>
                    备注：
                    <textarea value={this.state.info} onChange={this.handelInfo}></textarea>

                    <br/>
                    <br/>
                    <input type="submit" defaultValue='提交'/>
                </form>
            </div>
        )
    }
}

export default Otherform;