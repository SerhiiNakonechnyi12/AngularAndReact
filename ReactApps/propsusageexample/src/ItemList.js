import React from "react";

export function ListItem(props){
return <li>{props.name}</li>
}
// 19_11 дописать
export default function ItemList(props){
    let {title, items} = props.data;
    return(
        <>
            <h3 style={{ color: "darkorange"}}>{title}</h3>
            <ul style={{lisrStyleType: "none"}}>
                {
                items.map(item => {
                    return <ListItem name={item} key={item}></ListItem>
                })
            }
            </ul>

        </>
    )
}
