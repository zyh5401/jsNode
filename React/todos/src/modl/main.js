import React,{Component} from "react";
class LiModel extends Component{
    constructor(){
      super();
      this.state = {
          db:false
      }
    }
    lisc =() =>{
    this.props.lischack(this.props.id);
    }
    remove = ()=>{
      this.props.remove(this.props.id);
    }
    dbclick = ()=>{

        this.setState({
            db:true
        },()=>{
            this.db.focus();
        });
        console.log(this.state.db)
    }
    blur = ()=>{
        let{id,checked} = this.props;
        let newData = {
            id:id,
            checked:checked,
            txt:this.db.value
        }
        this.props.changeText(newData);
        this.setState({
            db:false
        })
    }
    enter=(ev)=>{
        if(ev.keyCode===13){
            this.blur();
        }
    }
    render(){
        let {txt,checked} = this.props;
        let sClass = checked?'completed':'';

        if(this.state.db){
          sClass += ' editing';
        }
        return (
          <li className={sClass}>
              <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.lisc}
                  />
                <label
                    onDoubleClick = {this.dbclick}
                    >{this.props.txt}
                </label>
                  <button
                      className="destroy"
                      onClick = {this.remove}
                      ></button>
              </div>
              <input
                ref = {(elem) => {this.db = elem}}
                className ="edit"
                onBlur = {this.blur}
                onKeyUp ={this.enter}
              />
          </li>
        )
    }
}
export default LiModel;
