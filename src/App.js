//import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FigureImage from 'react-bootstrap/FigureImage'
import Figure from 'react-bootstrap/Figure'
import React from "react";

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css"

function App() {

  


  return (
    <div className="App">
      <div className="col-md-6 shadow mx-auto p-5">
     
                    <h1 className="text-center display-3">Welcome to my Calculator app</h1>
      </div>
      
      <Figure className="col-md-9 shadow mx-auto p-3 d-flex">
  <Figure.Image
    width={1100}
    height={1200}
    alt="171x180"
    
    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
  />
  <Figure.Caption>
    Created by Abel Okoh
  </Figure.Caption>
</Figure>
      
        
    
  </div>
 
  );
}

export default App;
