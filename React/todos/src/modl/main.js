import React,{Component} from "react";
class LiModel extends Component{
  lisc =() =>{
    this.props.lischack(this.props.id);
  }
  remove = ()=>{
      this.props.remove(this.props.id);
  }
  render(){
      let {txt,checked} = this.props;
      let sClass = checked?'completed':'';

    return (
      <li className={sClass}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={this.props.checked}
                onChange={this.lisc}
              />
              <label>{this.props.txt}</label>
              <button
                  className="destroy"
                  onClick = {this.remove}
                  ></button>
          </div>
      </li>
    )
  }
}
export default LiModel;
