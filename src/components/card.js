import React from "react"

function Card(props) {
    return (
        <div className={`rounded-3xl bg-[#f8f8f8] border-2 ${props.className}`}>
            {props.children}
        </div>
    )
}


export default Card