import React from "react";
import Pro from "../ercard/project.module.css";
import Bar from "./projectbar";


const projectcard = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div>
                <div className={Pro.card}>
                    <div className={Pro.head}>
                        <span >Projects</span>
                    </div>
                    <div>
                      
 
                    <Bar />
                          

                    </div>

                </div>

                <div className="carditem" style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
                    <div className="card" style={{ margin: '10px', }}  >

                        <div className="card-body" style={{ padding: '15px 100px', backgroundColor: '#4e73df' }}>
                            <p className="card-text">Primary</p>
                            <p className="card-text">#4e73df</p>
                        </div>
                    </div>
                    <div className="card" style={{ margin: '10px' }}  >

                        <div className="card-body" style={{ padding: '15px 100px', backgroundColor: '#1cc88a' }}>
                            <p className="card-text">Success</p>
                            <p className="card-text">#1cc88a</p>
                        </div>
                    </div>

                </div>
                <div className="carditem" style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
                    <div className="card" style={{ margin: '10px' }}  >

                        <div className="card-body" style={{ backgroundColor: '#36b9cc', padding: '15px 100px' }}>
                            <p className="card-text">Info</p>
                            <p className="card-text">#36b9cc</p>
                        </div>
                    </div>
                    <div className="card" style={{ margin: '10px' }}  >

                        <div className="card-body" style={{ backgroundColor: '#f6c23e', padding: '15px 100px' }}>
                            <p className="card-text">Warning</p>
                            <p className="card-text">#f6c23e</p>
                        </div>
                    </div>

                </div>
                <div className="carditem" style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
                    <div className="card" style={{ margin: '10px' }}  >

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
                <div className="carditem" style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
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
                <div className={Pro.card1}>
                    <div className={Pro.head1}>
                        <span>Illustrations</span>
                    </div>
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "5rem;" }}
                        src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="..." />
                    <span style={{ color: '#858796', }}>
                        Add some quality, svg illustrations to your
                        project
                        courtesy of unDraw, a constantly updated
                        collection of beautiful svg images that you
                        can use completely free and without attribution!</span>
                    <a href="https://undraw.co/">Browse Illustrations on unDraw →</a>
                </div>
                <div class="card" style={{ width: '550px', marginRight: '25px' }}>
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
        </div>
    );
}
export default projectcard;