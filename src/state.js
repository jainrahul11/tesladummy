import React from "react"

export default class State extends React.Component{
    constructor(){
       super()
        this.state={name:'hina', age:27}
        this.changeName=this.changeName.bind(this)
    }
changeName(){
    this.setState({name:'abc',age:90})
}
    render(){
        return(
            <>
            <p> {this.state.name} </p>
            <p> {this.state.age} </p>
            <button onClick={this.changeName}> how are you </button>            
            
            </>
        )
    }
}