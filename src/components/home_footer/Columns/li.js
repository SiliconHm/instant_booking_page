import React from "react";
import styles from './../footer.module.css'

const Li = ({ Link, title }) => {
    return (
        <li className="pt-3 text-10">
            <a href={Link} className={styles.text_color}>
                {title}
            </a>
        </li>
    )
}

export default Li;