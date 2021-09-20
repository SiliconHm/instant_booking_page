import React from "react";
import Card from './Card/Card'

const Middle = () => {
    return (
        <section class="recommandedbg bg-gray mt-4 magic-ball magic-ball-about pb-5">
            <div class="container-fluid container-fluid-90">
                <div class="row">
                    <div class="recommandedhead col-md-12">
                        <p class="item animated fadeIn text-25 font-weight-700 m-0">Featured Member Stays</p>
                    </div>
                </div>

                <div class="row mt-3">         
                        <Card title='Let&#039;s Hyde Resort &amp; Villas in Pattaya, Thailand' pic='No pic' mem='2 Member' bed='1 Bedrooms' bath='1.00 Bathrooms' loc='Muang Pattaya' rat1='0' rat2='0' rate='10 / night*'/>
                </div>

                <hr/>

                <div class="row mt-5">
                    <div class="recommandedhead col-md-12">
                        <p class="item animated fadeIn text-25 font-weight-700 m-0">Recent Places</p>
                    </div>
                </div>
            
            </div>
        </section>
    )
}

export default Middle;