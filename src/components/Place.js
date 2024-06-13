import React from "react"

export default function Place(props) {
    return (
        <>
            <div className="card">
                <img src={props.imageUrl} alt="Image" />
                <div className="container">
                    <h4>{props.location.toUpperCase()}<a href={props.googleMapsUrl}>View on Google Maps</a></h4>
                    <h2>{props.title}</h2>
                    <h3>{props.startDate} - {props.endDate}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr></hr>
        </>
    );
}