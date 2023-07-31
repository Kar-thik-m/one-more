import React from "react";
import Pro from "./project.module.css"


const Ill = () => {
    return (
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
            
        </div>

    );
}
export default Ill;