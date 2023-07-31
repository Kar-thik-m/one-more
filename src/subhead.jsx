import React from "react";
import Subhead from "../componant/subhead.module.css"
import Card from "./cart";

const subhead=()=>{

    return(
       <div>
         <div className={Subhead.dashbord}>
            <span><h2>Dashboard</h2></span>
            <span><button type="button" className="btn btn-outline-secondary" style={{backgroundColor:'#4e73df',color:'white'}}>Generate Report</button></span>
         </div>
         <div style={{display:"flex",justifyContent:'space-between',}}>
             
             <Card 
              title={'EARNINGS (MONTHLY)'}
              price={'$40,00'}
              icon={<i class="fa fa-suitcase" aria-hidden="true"></i>}
              color={"#4e73df"}
           
              />
               <Card 
              title={'EARNINGS (ANNUAL)'}
              price={'$215,000'}
              icon={<i class="fa fa-usd" aria-hidden="true"></i>}
              color={'#4edf5a'}
              
              />
              <Card 
              title={'TASKS'}
              price={'50%'}
              icon={<i class="fa fa-clipboard" aria-hidden="true"></i>}
              color={'#4cbacd'}
             
              />
             <Card 
              title={'PENDING REQUESTS'}
              price={'18'}
              icon={<i class="fa fa-comments" aria-hidden="true"></i>}
              color={'#cdc44c'}
              />
             
             
             
         </div>
       </div>
    );
}
export default subhead;