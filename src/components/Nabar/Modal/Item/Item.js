import React from "react";
import styles from './../../navbar.module.css'

const Item = ({Link, title}) => {
    return (
        <li>
            <a href={Link} className={styles.text_color}>
                {title}
            </a>
        </li>
    )
}

export default Item;