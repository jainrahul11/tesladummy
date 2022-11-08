import React from "react"

export default class Counter extends React.Component{
    constructor(){
        super()
        this.state={Counter:1}

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)

    }
increment(){

    this.setState({Counter:this.state.Counter+1})
}

decrement(){

    this.setState({Counter:this.state.Counter-1})
}
    render(){

        return(
            <>
            
            
            <button onClick={this.increment}>+</button>
            <p>{this.state.Counter} </p>
            <button onClick={this.decrement}>-</button>
            
            </>


        )
    }
}