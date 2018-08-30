import React from 'react';

const push_pull=()=>{
    return(
        <section className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3>This is my header<small> Secondary Text</small></h3>
                        <p className="lead">This is leading paragraph</p>
                        <p>This is normal paragraph</p>
                        <p><small>terms and conditions</small></p>
                    </div>
                    <div className="col-lg-12">
                        You can <mark>highlight</mark> me and <del>you are deleted</del>
                    </div>
                    <div className="col-lg-12">
                        <p className="text-left text-uppercase">Left aligned text 44444 444444444 4444444444 44444444 44444444 444444444 4444444444 4444444444444 44444444444 444444 444444 444444444 444444444 44444444</p>
                        <p className="text-center text-lowercase">Center ALIGNED text 555555555555 5555555555 555555555 555555555 555555555555 55555555 55555555 5555555 5555555 55555555 555555555 5555555 5555555 555555</p>
                        <p className="text-right">Right aligned text 66666666 666666666666 66666666666 66666666 6666666666 6666666666 666666666 66666666 66666666666 666666 66666666 6666666666 66666666666</p>
                        <p className="text-justify">Justify aligned text 77777777 7777777777 7777777777 77777777777 77777777777777 777777777 77777777777 777777777777 77777777777 77777777777 77777777777 </p>
                    </div>
                </div>
        </section>
    )
}

export default push_pull;

                    {/*<div className="col-lg-4 col-lg-push-8 bg-cover">
                        <p>This is inner div</p>
                    </div>
                    <div className="col-lg-8 col-lg-pull-4 bg-warning">
                        <p>This is inner div</p>
                    </div>*/}