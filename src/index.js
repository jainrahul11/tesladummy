// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// -------------------------------------------------------------------------------


// starts form here:-




// import React from "react"
// import ReactDOM from "react-dom/client"

// ReactDOM.createRoot(document.querySelector("#root")).render(<h1>rahul</h1>)


// --------------------------------------------------------------------



// function Hello(){
//   return <h2> rahul </h2>
// }

// ReactDOM.createRoot(document.querySelector("#root")).render(<Hello/>)

// --------------------------------------------------------------

// const name = "rahul"

// ReactDOM.createRoot(document.querySelector("#root")).render(<h3>{name}</h3>)

// ------------------------------------------------------------------


// class HEllo extends React.Component{
//   render(){
//     return <h1>RAHUL</h1>
//   }
// }
// ReactDOM.createRoot(document.querySelector("#root")).render(<HEllo/>)


// ------------------------------------------------------


// import React from "react"
// import ReactDOM from "react-dom/client"

// import {Demo} from "./demo"

// ReactDOM.createRoot(document.querySelector("#root")).render(<Demo/>)

// --------------------------------------------------------

// import Home from "./home" 

// ReactDOM.createRoot(document.querySelector("#root")).render(<Home/>)


// ----------------------------------------------------


// class Person{
//     constructor (name,age){
//         this.name = name 
//         this.age = age
//     }
// // }

//  class Student extends Person {

//     constructor (rollno, marks,name,age){
//         super(name,age)
//         this.rollno = rollno
//         this.marks = marks
//     }
//  }

//  let s = new Student(1,90,"abc",20)
 
//  console.log(s.rollno)
//  console.log(s.marks)
//  console.log(s.name)
//  console.log(s.age)
 

// ---------------------------------------------------------


// import State from "./state"

// ReactDOM.createRoot(document.querySelector("#root")).render(<State/>)


// ----------------------------------------------examples for understanding the state

// let array = [1,2,3,4]
// console.log(array[0])

// let phonebook ={'abc':1234, 'bcd':5678}

// console.log(phonebook.abc)


// ----------------------------------------------------

// import React from "react"
// import ReactDOM from "react-dom/client"

// import Counter from "./counter"
// import "./index.css"

// ReactDOM.createRoot(document.querySelector("#root")).render(<Counter></Counter>)

// -------------------------------------------------------------------------



// import React from "react"
// import ReactDOM from "react-dom/client"
// import "./index.css"
// import Table from "./table"

// ReactDOM.createRoot(document.querySelector("#root")).render(<Table></Table>)


// -----------------------------------------------------------

import React from "react"
import ReactDOM from "react-dom/client"
import TeslaHome from "./TeslaHome"


ReactDOM.createRoot(document.querySelector("#root")).render(<TeslaHome></TeslaHome>)

