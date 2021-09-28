import React from "react";

const Item = ({Link, title}) => {
    return (
        <li>
            <a href={Link}>
                {title}
            </a>
        </li>
    )
}

export default Item;