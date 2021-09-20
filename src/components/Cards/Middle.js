import React from "react";
import Card from './Card/Card'

const Middle = () => {
    return (
        <section className="recommandedbg bg-gray mt-4 magic-ball magic-ball-about pb-5">
            <div className="container-fluid container-fluid-90">
                <div className="row">
                    <div className="recommandedhead col-md-12">
                        <p className="item animated fadeIn text-25 font-weight-700 m-0">Featured Member Stays</p>
                    </div>
                </div>

                <div className="row mt-3">         
                        <Card title='Let&#039;s Hyde Resort &amp; Villas in Pattaya, Thailand' mem='2 Member' bed='1 Bedrooms' bath='1.00 Bathrooms' loc='Muang Pattaya' rat1='0' rat2='0' rate='10 / night*'/>
                </div>

                <hr/>

                <div className="row mt-5">
                    <div className="recommandedhead col-md-12">
                        <p className="item animated fadeIn text-25 font-weight-700 m-0">Recent Places</p>
                    </div>
                </div>
            
            </div>
        </section>
    )
}

export default Middle;