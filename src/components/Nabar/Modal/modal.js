import React from "react";
import Item from "./Item/Item"
import styles from './../navbar.module.css'

const Modal = ({showModel, onModelClick}) => {

    return (
        <div className={`modal fade right ${showModel ? `show ${styles.model}`: ''}`} id="left_modal" tabIndex="-1" role="dialog" aria-labelledby="left_modal" arial-model={`${showModel}`} arial-hidden={`${showModel}`}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0 secondary-bg"> 
                            
                            <button type="button" className="close text-28" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" onClick={onModelClick}>&times;</span>
                            </button>
                        </div>
                        
                        <div className="modal-body p-0">
                            <ul className="mobile-side">
                                <Item Link='http://app.memberbutton.com' title='Home'/>
                                <Item Link='http://app.memberbutton.com/become-host' title='Become Host'/>
                                <Item Link='http://app.memberbutton.com/help' title='Help'/>
                                <Item Link='http://app.memberbutton.com/signup' title='Sign Up'/>
                                <Item Link='http://app.memberbutton.com/login' title='Log In'/>
                                
                                <li>
                                    <a href="https://memberbutton.com/" aria-label="modalLanguge" data-toggle="modal" data-target="#languageModalCenter"> <i className="fa fa-globe"></i> <u>English </u></a>
                                    <a href="https://memberbutton.com/" aria-label="modalCurrency" data-toggle="modal" data-target="#currencyModalCenter"> <span className="ml-4">&#36; - <u>USD</u> </span></a>
                                </li>
                                <a className="mt-3" href="http://app.memberbutton.com/property/create">
                                    <button className="btn vbtn-outline-success text-14 font-weight-700 pl-5 pr-5 pt-3 pb-3">
                                            Add your Member Listing
                                    </button>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Modal;