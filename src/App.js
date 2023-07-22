import React from "react";
import Navbar from "./Navbar"
 import TextForm from "./textForm"
//import DarkMode from "./darkMode"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// let name = "isham";
function App() {
  return (
    <>
     <Navbar title="textUtils" about="about us"/>
     <div className="container my-3" >
        <TextForm heading=""/> 
        {/* <DarkMode/> */}

     </div>
    </>
  );
}
export default App;
