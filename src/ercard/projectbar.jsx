import React from "react";


const Bar = () => {
    return (

        <div>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px', color: 'gray',marginTop:'20px' }}>
                <span>Server Migration</span>
                <span >20%</span>

               </div>
             <div>
                <div class="progress" style={{ width: '90%', margin: ' 0 20px', }}>
                    <div class="progress-bar" role="progressbar" style={{ width: '20%', ariavaluenow: "25", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px', color: 'gray',marginTop:'20px' }}>
                <span>Sales Tracking</span>
                <span >40%</span>

               </div>
             <div>
                <div class="progress" style={{ width: '90%', margin: ' 0 20px', }}>
                    <div class="progress-bar" role="progressbar" style={{ width: '40%', ariavaluenow: "25", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px', color: 'gray',marginTop:'20px' }}>
                <span>Customer Database</span>
                <span >60%</span>

               </div>
             <div>
                <div class="progress" style={{ width: '90%', margin: ' 0 20px', }}>
                    <div class="progress-bar" role="progressbar" style={{ width: '60%', ariavaluenow: "25", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px', color: 'gray',marginTop:'20px' }}>
                <span>Payout Details</span>
                <span >80%</span>

               </div>
             <div>
                <div class="progress" style={{ width: '90%', margin: ' 0 20px', }}>
                    <div class="progress-bar" role="progressbar" style={{ width: '80%', ariavaluenow: "25", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 20px', color: 'gray',marginTop:'20px' }}>
                <span>Account Setup</span>
                <span >Complete!</span>

               </div>
             <div>
                <div class="progress" style={{ width: '90%', margin: ' 0 20px', }}>
                    <div class="progress-bar" role="progressbar" style={{ width: '100%', ariavaluenow: "25", ariavaluemin: "0", ariavaluemax: "100" }}></div>
                </div>
            </div>

        </div>
    );
}
export default Bar;