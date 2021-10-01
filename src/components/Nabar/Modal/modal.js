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
                                <Item Link='http://memberbutton.com' title='Home'/>
                                <Item Link='http://app.memberbutton.com' title='Influencers'/>
                                <Item Link='https://extranet.memberbutton.com/sign-up' title='Sign Up'/>
                                <Item Link='https://extranet.memberbutton.com/' title='Log In'/>
                                <Item Link='http://app.memberbutton.com/help' title='Help'/>
                                
                                <li>
                                    <a href="https://memberbutton.com/" aria-label="modalLanguge" data-toggle="modal" data-target="#languageModalCenter"> <i className="fa fa-globe"></i> <u>English </u></a>
                                    <a href="https://memberbutton.com/" aria-label="modalCurrency" data-toggle="modal" data-target="#currencyModalCenter"> <span className="ml-0">&#36; - <u>USD</u> </span></a>
                                </li>
                                <a className="mt-3" href="https://extranet.memberbutton.com/sign-up">
                                    <button className="btn vbtn-outline-success text-12 font-weight-500 pl-5 pr-5 pt-3 pb-3">
                                            Add Property
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