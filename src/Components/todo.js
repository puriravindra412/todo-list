import React ,{Component} from "react";

import {MdDelete} from "react-icons/md";
class ToDo extends Component{
    constructor(){
        super()
        this.state={
            newItem:"",
            list:[]
        }
    }
    addItem(todoValue){
         if(todoValue!==""){
            const newItem={
                id:Date.now(),
                value:todoValue,
                isDone:false
            }
            const list=[...this.state.list];
            list.push(newItem);
            this.setState({
                list,
                newItem:""
            });

         }

    }

    deleteItem(id){
        const list=[...this.state.list];
        const updatedlist=list.filter(item=>item.id!==id);
        this.setState({
            list:updatedlist,
            newItem:""
        })
    }

    updateInput(input){
        this.setState({
            newItem:input
        })
    }
    render(){
        return(
            <div className="container">
                <p>Here is your To Do list</p>
                <input
                 id="input-box"
                 type="text"
                 placeholder="Add to do item" 
                 required
                 value={this.state.newItem}
                 onChange={e=>this.updateInput(e.target.value)}
                /> 
                <button 
                id="addbutton"
                onClick={() => this.addItem(this.state.newItem)}
                disabled={!this.state.newItem.length}
                >Add + </button>
                <div className="recordlist">
                    <ul >
                        {this.state.list.map(item=>{
                            return(
                                <li key={item.id}>
                                <input  className="checkbox" type="checkbox" name="todo" />
                                <span> {item.value}</span>
                                <button className="deletebutton" onClick={()=>this.deleteItem(item.id)}>Delete<MdDelete/></button>
                                </li>
                            )
                        })}
                            
                            
                        </ul>
                 </div>
            </div>
        )
    }
}
export default ToDo;