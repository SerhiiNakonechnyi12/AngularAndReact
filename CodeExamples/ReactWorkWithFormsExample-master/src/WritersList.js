import React from "react";
import Writer from "./Writer";
export default function WriterList(props) {
    let writers = props.data;
    return (
        <>
            {
                writers.map(writer => <Writer {...writer} key={writer.surname}></Writer>)
            }
        </>
    )
}