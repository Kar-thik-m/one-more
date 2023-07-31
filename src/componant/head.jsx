import React from "react";
import headstyle from '../componant/head.module.css';


const head = () => {
    return (

        <div className={headstyle.h}>

            <span>
            
            
            <input type="search" placeholder="Search" className={headstyle.search} />
            <i style={{
                fontSize: "25px",
                
                paddingTop:'4px',
                paddingBottom:'9px',
                paddingRight:"4px",
              
                backgroundColor: '#f8f9fc',
               
                color: "black",
                borderTopRightRadius: '10px'

            }} class="fa fa-search" ></i>
                

            </span>



            <span
              
            >
                <i class="fa fa-bell" aria-hidden="true"></i>
            </span>
            <span
                
            >
                <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>




            <span className={headstyle.photo}>
                <span ><i>Martin Scorsese</i></span>
                <img class="img-profile rounded-circle" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
                alt=""
                    style={{
                        width: "40px",

                    }}
                />
            </span>
        </div>


    );
}
export default head;