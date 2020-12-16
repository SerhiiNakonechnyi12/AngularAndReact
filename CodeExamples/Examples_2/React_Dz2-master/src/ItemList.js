import React from "react";

export function ListItem(props) {
    return (<li>
        <img className="photo" width="350px" hight="200px"  src={props.name[2]} alt="Lviv"/>
        <img className="photo" width="350px" hight="200px"  src={props.name[1]} alt="Lviv"/>
        <img className="photo" width="350px" hight="200px"  src={props.name[3]} alt="Lviv"/>
        <img className="photo" width="350px" hight="200px"  src={props.name[4]} alt="Lviv"/>
    </li>)
    
}

export default function ItemList(props) {
    let { title, items } = props.data;
    return (
        <>
            <h3 style={{ color: "lightblue" }}>{title}</h3>
            <ul style={{ listStyleType: "none" }}>
                {items.map(item => {
                    return <ListItem name={item}></ListItem>
                })
                }
            </ul>
        </>
    )
}