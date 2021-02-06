import React from 'react';

const MyStoryBoard = () => {
    return ( 
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="200000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://sbt.blob.core.windows.net/classroom-public/529ee40c/malheur-chez-le-dentiste.png" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://sbt.blob.core.windows.net/classroom-public/529ee40c/malheur-chez-le-dentiste---page-2.png" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://sbt.blob.core.windows.net/classroom-public/529ee40c/malheur-chez-le-dentiste---page-3.png" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://sbt.blob.core.windows.net/classroom-public/529ee40c/malheur-chez-le-dentiste---page-4.png" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
     );
}
 
export default MyStoryBoard;