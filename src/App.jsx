
import React from "react";
import Rigthside from "../src/rightside/rigth";
import Head from "../src/componant/head";
import Subhead from "./componant/subhead";
import Ercard from "../src/ercard/ercarddata";
import Projectcard from '../src/ercard/projectcard';
import style from "./meadia.module.css"
import Linecard from "./ercard/linecard";


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
          <div className={style.control} >
            <Head />

            <Subhead />
            <Ercard />
            <Projectcard />
            <Linecard />

          </div>
        </div>



      </div>


    </div>



  );
}

export default App;