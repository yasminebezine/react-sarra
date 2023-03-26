import './App.css';
import React, {Component} from 'react';


class App extends Component {
  state={
    profile : [
      {name : "yasmine",lastname :"bezine",age:29},
      {name : "sirine",lastname :"bezine",age:25},
      {name : "meriem",lastname :"bezine",age:38},
      {name : "sabrine",lastname :"bezine",age:30},

      
    ]
  }
render(){
  const data= this.state.profile.map((item)=>{

    if (item.age>30){
    return(
      <ul key={Math.random()}>
        <li>{item.name}</li>
        <li>{item.lastname}</li>
        <li>{item.age}</li>
       
      </ul>
    ) 
}}
  )



  return (
  <div className="App">
  <h1> welcome to react js course</h1>
  <div>{data}</div>
  </div>
  )
};

}

export default App;

