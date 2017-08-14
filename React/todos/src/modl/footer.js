import React,{Component} from "react";
import FooterList from './footerList';
class FootModel extends Component{
    constructor(){
        super();
        this.state={
            list:[
                {name:'全部',checked:true,hash:'#/all'},
                {name:'未完成',checked:false,hash:'#/active'},
                {name:'已完成',checked:false,hash:'#/completed'}
            ]
        }
    }
    click=()=>{
        this.props.nclick();
    }
    render(){
        let {list} = this.state;
        let {view,changeView} = this.props;
        let listLi = null;
        if(list.length){
            listLi = list.map((e,i)=>{
                let data ={
                    name:e.name,
                    hash:e.hash,
                    checked:e.checked,
                    key:i,
                    view:view,
                    changeView:changeView
                }
            return <FooterList {...data}/>
          });
        }
        return (
            <footer
              className="footer" >
              <span className="todo-count">
                <strong>{this.props.num}</strong>
                <span>条未选中</span>
              </span>
              <ul className="filters">
                {listLi}
              </ul>
              <button
                className="clear-completed"
                onClick = {this.click}
              >
                  清除完成项
              </button>
            </footer>
        )
    }
}
export default FootModel;
