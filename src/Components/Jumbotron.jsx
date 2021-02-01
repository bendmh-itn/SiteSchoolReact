import React from 'react';

const Jumbotron = ({text}) => {
    return ( 
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{text}</h1>
                </div>
            </div>
        </>
     );
}
 
export default Jumbotron;