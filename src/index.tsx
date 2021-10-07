import React from "react";
import ReactDOM from "react-dom";
import Counter from  "./counter";

ReactDOM.render(
    <React.StrictMode>
        <h1>Welcome!</h1>
        <Counter />
    </React.StrictMode>,

    document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

