import React from "react";


const rigthside = () => {

    return (
        <div className="container" style={{marginLeft:"20px"}}>

            <div>


                <div  ><i className="fa fa-smile-o " style={{
                    fontSize: '40px',
                    color: "white",
                    margin: '20px'
                }} >
                </i><span style={{
                    color: "white",
                    pading: '30px',
                }}><b
                    style={{
                        width: '10px',
                        margin: '5px',
                        marginBottom: '10px'
                    }}> SB ADMIN </b><sup>2</sup></span>

                </div>
            </div>

            <hr className="sidebar-divider my-0" style={{ borderTop: '1px solid white' }}></hr>






            <div style={{ marginTop: '20px', marginBottom: '20px' }}><i className="fa fa-clock-o" style={{
                fontSize: '30px',
                color: "white",
                marginLeft: '20px'
            }}>
            </i><span style={{
                color: "white",
                margin: '20px',
                
            }}>
                    <b style={{
                        width: '10px',
                        margin: '5px',
                        padding: '30px',

                    }}>Dashbosrd </b></span>

            </div>
            <hr className="sidebar-divider my-0" style={{ borderTop: '1px solid white' }}></hr>









            <div className="int" style={{ marginTop: '20px', }}>
                <span style={{ color: 'white', fontFamily: 'arial', fontSize: '10px', width: '20px', pading: '30px', }}>interface</span>
                <div style={{ margin: '10px' }}>
                    <i className="fa fa-cog" aria-hidden="true" style={{ color: 'white', marginLeft: '10px' }}></i><span style={{ color: 'white', marginLeft: '10px' }}>components</span>
                </div>
                <div>
                    <div style={{ margin: '10px' }}>
                        <i className="fa fa-wrench" aria-hidden="true" style={{ color: 'white', marginLeft: '10px' }}></i> <span style={{ color: 'white', marginLeft: '10px' }}>Utilities</span>
                    </div>
                </div>
                <hr className="sidebar-divider my-0" style={{ borderTop: '1px solid white' }}></hr>
            </div>








            <div className="int" style={{ marginTop: '20px', }}>
                <span style={{ color: 'white', fontFamily: 'arial', fontSize: '10px', width: '20px', pading: '30px', }}>ADDONS</span>
                <div style={{ margin: '10px' }}>
                    <i class="fa fa-folder-open" style={{ color: 'white', marginLeft: '10px' }}></i><span style={{ color: 'white', marginLeft: '10px', pading: '30px', }}>Page</span>
                </div>
                <div>
                    <div style={{ margin: '10px' }}>
                        <i class="fa fa-area-chart" aria-hidden="true" style={{ color: 'white', marginLeft: '10px', pading: '20px', }}></i> <span style={{ color: 'white', marginLeft: '10px', pading: '30px', }}>Charts</span>
                    </div>
                </div>
                <div>
                    <div style={{ margin: '10px' }}>
                        <i class="fa fa-table" style={{ color: 'white', marginLeft: '10px' }}></i> <span style={{ color: 'white', marginLeft: '10px', pading: '30px', }}>Tables</span>
                    </div>
                </div>
                <hr className="sidebar-divider my-0" style={{ borderTop: '1px solid white' }}></hr>

            </div>





            <div >
                <div class="card" style={{width:'80%' ,backgroundColor:'#5c7dde', marginTop:"20px" ,marginRight:"20px",borderRadius:"30%,",}}>
                    <img style={{width:"80px",marginTop:'20px', }} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" class="card-img-top" alt="..."/>
                        <div class="card-body"  >
                            <p class="card-text" style={{color:'white'}}>SB Admin Pro is packed with premium features, components, and more!</p>
                            <a href="#" class="btn btn-primary" style={{paddig:" 0.2rbm 0.5rbm"}}>Upgrade to pro!</a>
                        </div>
                </div>
            </div>


              <div style={{paddingBottom:'600px'}}>
                <p>........</p>
              </div>
        </div>







    );

}
export default rigthside;