import React,{Component} from "react";
import { BiCaretRight } from "react-icons/bi";
class Nav extends Component{
    render(){
        return(
            <div className="nav">
            <h1 className="logo">ToDo List </h1>
            <span><BiCaretRight id="logo-icon" /></span>
            
            </div>
            
        )
    }
}
export default Nav;