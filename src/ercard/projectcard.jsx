import React from "react";
import Pro from "../ercard/project.module.css";
import Bar from "./projectbar";
import Ill from "./illl";


const projectcard = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "space-between",flexWrap:'wrap' }}>
            
                <div className={Pro.card}>
                    <div className={Pro.head}>
                        <span >Projects</span>
                    </div>
                    <div>


                        <Bar />


                    </div>

                </div>
                <div>
                    
                 <Ill />
                </div>


            
        </div>
    );
}
export default projectcard;