import React from "react";
import ReactDOM from 'react-dom'


const names =['Atilla','Zehra','Zeynep']
const data='React Button'
function App () {
    return(
     <div>

        {names.map(name=>(<h2>{name}</h2>))}
        <button
      type="button"
      style=
      { { padding: '10px',
        color: 'white',
        backgroundColor: 'red',
        border: '2px solid yellow'}}
      
    >
      {data}
    </button>
     </div>
    ) 
}

// class App extends React.Component{
//     render(){
//         return<h1>Hello Ali</h1>
//     }
// }

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)