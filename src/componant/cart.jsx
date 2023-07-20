import React from "react";

const card = ({ title, price, icon, color, }) => {
    return (


        <div className="card" style={{
            flex: "  auto",
          margin:'4px',

            borderRight: '2px solid black',
            borderRadius:'4% 3%',
            boxShadow:'0 .15rem 1.75rem 0 rgba(58,59,69,.15)',
  
        }}>

            <div class="card-body" style={{padding:'2px 10px'}}>

                <p class="card-text"
                    style={{
                        color
                    }}>
                    {title} <span style={{
                        marginLeft: "25px",
                        fontSize: "20px",
                        color: '#dddfeb'
                    }}>{icon}</span></p>
                <p><b><h4>{price}</h4></b></p>

            </div>
        </div>




    );
}
export default card;