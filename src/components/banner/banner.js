import React from "react"
import styles from './banner.module.css'

const Banner = () => {
    return (
        <section className="pb-70 mt-5">
            <div className="container-fluid container-fluid-90">
                <div className={`row ${styles.tryhosting}`}>
                    <div className={`col-md-12 ${styles.back}`}>
                            <h2 className={`font-weight-400 mb-2 text-white`}>Start Hosting &quot;Member&quot; Influencers</h2>
                            <p className="text-16 text-white">Invite member influencers to get more bookings <br/> in exchange for staying at your place.</p>
                            <a href="http://memberbutton.com/become-host">
                                <button className="p-3 rounded-4 border-0 font-weight-500 mt-5">
                                    Get Started
                                </button>
                            </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;