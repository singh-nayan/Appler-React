import React from 'react';

const nestingGrid=()=>{
    return(
        <section className="container">
            <div className="col-lg-6 bg-success">
                <p>This is outer div</p>
                <div className="row">
                    <div className="col-lg-3 bg-primary">
                        <p>This is inner div</p>
                    </div>
                    <div className="col-lg-4 bg-warning">
                        <p>This is inner div</p>
                    </div>
                    <div className="col-lg-5 bg-danger">
                        <p>This is inner div</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default nestingGrid;