import React from "react";
import ReactDOM from 'react-dom'


const names =['Atilla','Zehra','Zeynep']

function App () {
    return(
     <div>

        {names.map(name=>(<h2>{name}</h2>))}
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