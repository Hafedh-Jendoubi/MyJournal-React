import React from "react"
import data from "./data"
import Place from "./Place"

export default function Body() {
    return (
        <div>
            {
                data.map(index => <Place {...index} />)
            }
        </div>
    );
}