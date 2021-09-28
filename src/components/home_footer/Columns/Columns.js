import React from "react";
import styles from './../footer.module.css'

const Column = ({heading, children}) => {
    return (
        <div className="col-6 col-sm-3 mt-0">
                
            <h2 className={`font-weight-500 m-0 text-uppercase text-10 ${styles.text_color}`}>{heading}</h2>
                
                <div className="row">
                    
                    <div className="col p-0">
                        
                        <ul className="m-0 p-0">
                            {children}
                        </ul>
                    
                    </div>
                
                </div>
      </div>
    )
}

export default Column;