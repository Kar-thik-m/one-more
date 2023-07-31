import React from "react";


const Linecard = () => {
    return (
        <div style={{ display: 'flex', justifyContent:"space-between", }}>
            <div style={{ width: '550px', height: '700px', backgroundColor: 'white', }}>




                <div style={{display:'flex',justifyContent:'space-between'}} >
                    <div className="card" style={{ margin: '10px', }}  >

                        <div className="card-body" style={{ padding: '15px 100px', backgroundColor: '#4e73df' }}>
                            <p className="card-text">Primary</p>
                            <p className="card-text">#4e73df</p>
                        </div>
                    </div>
                    <div className="card" style={{ margin: '10px' , }}  >

                        <div className="card-body" style={{ padding: '15px 100px', backgroundColor: '#1cc88a' }}>
                            <p className="card-text">Success</p>
                            <p className="card-text">#1cc88a</p>
                        </div>
                    </div>

                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}  >
                    <div className="card" style={{ margin: '10px', }}  >

                        <div className="card-body" style={{ backgroundColor: '#36b9cc', padding: '15px 100px' }}>
                            <p className="card-text">Info</p>
                            <p className="card-text">#36b9cc</p>
                        </div>
                    </div>
                    <div className="card" style={{ margin: '10px' }}  >

                        <div style={{ backgroundColor: '#f6c23e', padding: '15px 100px' }}>
                            <p className="card-text">Warning</p>
                            <p className="card-text">#f6c23e</p>
                        </div>
                    </div>

                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}  >
                    <div className="card" style={{ margin: '10px', }}  >

                        <div className="card-body" style={{ backgroundColor: '#e74a3b', padding: '15px 100px' }}>
                            <p className="card-text">Danger</p>
                            <p className="card-text">#e74a3b</p>
                        </div>
                    </div>
                    <div className="card" style={{ margin: '10px' }}  >

                        <div className="card-body" style={{ backgroundColor: '#858796', padding: '15px 100px' }}>
                            <p className="card-text">Secondary</p>
                            <p className="card-text">#858796</p>
                        </div>
                    </div>

                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}  >
                    <div className="card" style={{ margin: '10px' }}  >

                        <div className="card-body" style={{ backgroundColor: '#f8f9fc', padding: '15px 100px' }}>
                            <p className="card-text">Light</p>
                            <p className="card-text">#f8f9fc</p>
                        </div>
                    </div>
                    <div className="card" style={{ margin: '10px' }}  >

                        <div className="card-body" style={{ backgroundColor: '#5a5c69', padding: '15px 100px' }}>
                            <p className="card-text">Dark</p>
                            <p className="card-text">#5a5c69</p>
                        </div>
                    </div>

                </div>
            </div>
            <div>



























            </div>


            <div class="card" style={{ width: '550px', marginRight: '25px', height:'300px', }}>
                <h5 class="card-header" style={{ backgroundColor: '#f8f9fc', color: '#4e73df' }}>Development Approach</h5>
                <div class="card-body">

                    <p class="card-text" style={{ color: '#858796' }}>SB Admin 2 makes extensive use of Bootstrap 4 utility classes
                        in order to reduce CSS bloat and poor page performance.
                        Custom CSS classes are used to create custom components
                        and custom utility classes.</p>

                    <p style={{ color: '#858796' }} >Before working with this theme, you should become
                        familiar with the Bootstrap framework,
                        especially the utility classes.</p>
                </div>
            </div>
        </div>





    );
}
export default Linecard;