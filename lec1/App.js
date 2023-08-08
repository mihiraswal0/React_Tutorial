const heading1=React.createElement("h1",{},"Hello I am Mihir");  
const heading2=React.createElement("h2",{},"I am Mihir");  
 const containter=React.createElement("div",{id:"container"},[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(containter);