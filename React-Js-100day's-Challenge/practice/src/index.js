import React from "react";
import { ReactDOM } from "react-dom";

//Type-1
//ReactDOM.render( < h1 > Hello World!! < /h1>, document.getElementById("root"))

//Type-2
//ReactDom.render(React.createElement("h1",null,"Hello world !!"),document.getElementById("root"))

//Type-3
//var h1=document.createElement("h1");
//h1.innerHTML="Hello World!!";
//document.getElementById("root").appendChild(h1);

//Type-4 to render multiple JSX element
ReactDOM.render(
    <div>
        <h1>
            Hi 
        </h1>
        <p>
            this is subham how are you all doing.
        </p>
    </div>
)