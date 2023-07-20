
import React from "react";
import Rigthside from "../src/rightside/rigth";
import Head from "../src/componant/head";
import Subhead from "./componant/subhead";
import Ercard from "../src/ercard/ercarddata";
import Projectcard from '../src/ercard/projectcard';


function App() {
  return (
    <div className="App" >

      <div className="row">
        <div className="col-2" >
          <div style={{
            backgroundColor: '#4e73df',
          }}>

            <Rigthside />
          </div>
        </div>
        <div className="col-10" style={{ backgroundColor: "#f8f9fc", margin: "0px" }}>
          <div >
            <Head />

            <Subhead />
            <Ercard />
            <Projectcard />
            

          </div>
        </div>



      </div>


    </div>



  );
}

export default App;
