import React from "react";
import { Link } from "react-router-dom";

const Li = ({link, aria, ClassName}) => {
    return (
        <li className="list-inline-item">
                                                      {/* target="_blank" */}
            <Link className="social-icon text-color text-14"  to={link} aria-label={aria}>
                <i className={`fab ${ClassName}`}></i>
            </Link>
        </li>
    )
}

export default Li;