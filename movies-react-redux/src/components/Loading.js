import React from 'react';
import { useSelector } from 'react-redux';

const Loading = () => {
    return (
        <>

            <div className="d-flex justify-content-center" style={{  margin: '15rem'}}>
                <div className="spinner-border " role="status" style={{width:' 15rem', height: '15rem'}}>
                    <span className="sr-only"></span>
                </div>
            </div>

        </>
    );
}

export default Loading;
