import React from "react";
// avatar component
function Avatar(){
    return(
  <img className="card-image" src={require("./images/myapp-sarah.jpeg")} alt="Avatar" style={{width:100}}/>
  );
  }
  function Avatar2(){
    return(
  <img className="card-image" src={require("./images/myapp-austin.jpeg")} alt="Avatar" style={{width:100}}/>
  );
  }
export default Avatar;  