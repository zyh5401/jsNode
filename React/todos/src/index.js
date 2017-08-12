import React,{Component} from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import HeadModel from './modl/header';
import LiModel from './modl/main';

class App extends Component{
    constructor(){
        super();
        this.state={
            val :'',
            data : [
                {txt :'123',checked:false,id:1}
            ]
        }
    }
    change1=(v)=>{
        this.setState ({
            val:v
        })
    }
    lismodel=(dad)=>{
        let {data} = this.state;
        let arr2 = Object.assign(data);
        arr2.push(dad);
        this.setState({
            data:arr2,
            val :''
        });
    }
    lischack = (id)=>{
        let {data} = this.state;
        let arr = Object.assign(data);
        arr.forEach(e=>{if(e.id ===id){
            e.checked=!e.checked
        }})
        this.setState({
            data:arr
        })
    }
    allchange = ()=>{
        let {checked} = this.all;
        let {data} = this.state;
        let data2 = Object.assign(data);

        data2.forEach(e=>e.checked = checked)
        this.setState({
            data:data2
        });
    }
    remove = (id) => {
        let {data} = this.state;
        let data2 = null;
        data2 = data.filter((e,i)=>{
            return e.id != id;
        });
        this.setState({
            data:data2
        });
    }
    render(){
        let {data} = this.state;
        let list = null;
        let all = false;
        list = data.map((e,i)=>{
            let data = {
                txt : e.txt,
                key : i,
                id : e.id,
                checked: e.checked,
                lischack:this.lischack,
                remove:this.remove
            }
            return <LiModel {...data}/>
        })

        all = data.every((e)=>e.checked);
        return (
            <div>
                <HeadModel
                    val ={this.state.val}
                    change1 = {this.change1}
                    lismodel = {this.lismodel}
                />
                <section className="main">
                <input
                className="toggle-all"
                type="checkbox"
                checked={all}
                onChange = {this.allchange}
                ref = {(elem) => {this.all = elem}}
                />
                <ul className="todo-list">
                    {list}
                </ul>
            </section>
            <footer
              className="footer" >
              <span className="todo-count">
                <strong>0</strong>
                <span>条未选中</span>
              </span>
              <ul className="filters">
                <li>
                  <a href="#/all" className="selected">全部</a>
                </li>
                <li>
                  <a href="#/active">未完成</a>
                </li>
                <li>
                  <a href="#/completed">已完成</a>
                </li>
              </ul>
              <button
                className="clear-completed"
              >
                  清除完成项
              </button>
            </footer>
        </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
