import React from "react";
import ER from '../ercard/ercaed.module.css';
import { Linechart } from "./linechart";
import { Piechart } from "./piechart";


const erdata = () => {
    return (

        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div className={ER.card}>
                <div className={ER.head}>
                    <span>Earnings Overview</span>

                </div>
                <Linechart />
            </div>

            <div className={ER.card1}>
                <div className={ER.head1}>
                    <span >Revenue Sources</span>



                </div >
                <div style={{width:'300px',marginLeft:'30px'}}>
                    <  Piechart />
                </div>
            </div>
        </div>



    );
}
export default erdata;