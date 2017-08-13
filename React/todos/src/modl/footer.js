import React,{Component} from "react";

class FootModel extends Component{
    nclick=()=>{
        this.props.nclick()
    }
    render(){
        console.log(this.props)
        return(
            <footer
              className="footer" >
              <span className="todo-count">
                <strong>{this.props.num}</strong>
                <span>条未选中</span>
              </span>
              <ul className="filters">
                <li>
                  <a href="#/all"
                  className="selected"
                  onClick = {this.aclck}
                  >全部</a>
                </li>
                <li>
                  <a href="#/active"
                  onClick = {this.nclick}
                  >未完成</a>
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
        )
    }
}
export default FootModel;
