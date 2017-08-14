import React,{Component} from "react";
class FooterList extends Component{
changeView = ()=>{
    this.props.changeView(this.props.hash);
}
    render(){

        return(
            <li>
                <a
                    href={this.props.hash}
                    className={(this.props.view == this.props.hash)?'selected':''}
                    onClick = {this.changeView}
                >{this.props.name}</a>
            </li>
        )
    }
}
export default FooterList;
