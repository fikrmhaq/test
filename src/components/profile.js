import React from "react"

function Detail(props) {
    return (
        <div className={props.className}>
            <label className="font-bold text-3xl text-[#808080]">{props.label}</label>
            <p className="font-bold text-xl">{props.value}</p>
        </div>
    )
}

export default Detail