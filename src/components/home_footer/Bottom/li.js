import React from "react";
// import { Link } from "react-router-dom";

const Li = ({link, aria, ClassName}) => {
    return (
        <li className="list-inline-item">
                                                      {/* target="_blank" */}
            <a className="social-icon text-color text-14"  href={link} aria-label={aria}>
                <i className={`fab ${ClassName}`}></i>
            </a>
        </li>
    )
}

export default Li;