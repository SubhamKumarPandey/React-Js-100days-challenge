import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Type-1
//ReactDOM.render( < h1 > Hello World!! < /h1>, document.getElementById("root"))

//Type-2
//ReactDom.render(React.createElement("h1",null,"Hello world !!"),document.getElementById("root"))

//Type-3
//var h1=document.createElement("h1");
//h1.innerHTML="Hello World!!";
//document.getElementById("root").appendChild(h1);

//Type-4 to render multiple JSX element
//ReactDOM.render(
//    <div>
 //       <h1>
 //           Hi
 //       </h1>
 //       <p>
 //           this is subham how are you all doing.
 //       </p>
 //   </div>,
 //document.getElementById("root")
//)

//Type-5
/*ReactDOM.render(
    [
        <h1> Hi there</h1>,
        <p> How are you all doing </p>,
        <h1>hope for best</h1>
    ],document.getElementById("root")
);
Type-6
ReactDOM.render(
    <React.Fragment>
        <h1> Hi there</h1>,
        <p> How are you all doing </p>,
        <h1>hope for best</h1>
    </React.Fragment>
    ,document.getElementById("root")
);
ReactDOM.render(
    <>
    <h1> Hi there</h1>,
        <p> How are you all doing </p>,
        <h1>hope for best</h1>
    </>,
    document.getElementById("root")
);
*/
//Epressions
//usees of css in react

const heading = {
    color: 'bisque',
    textAlign: 'center',
    margin: '70px 0px',
    fontWeight: 'bold',
    textTtransform: 'capitalize',
};
ReactDOM.render(
<>
<h1 style={heading}>Gola Vertos!!</h1>
<div className="img_div">
    <img src="https://picsum.photos/id/237/200/300" alt="random images" />
    <img src="https://picsum.photos/id/237/200/300" alt="random images" />
    <img src="https://picsum.photos/id/237/200/300" alt="random images" />
</div>
</>,
document.getElementById("root")
);
