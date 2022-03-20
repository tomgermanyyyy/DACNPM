import React, { Fragment } from 'react'

function RectangleBox({name, image, circle_around}) {
    return (
        <>
            <span class="circle"></span>
            <div className={circle_around ? "image circle_image" : "image"}>
                <img src={image} alt="illustration"></img>
            </div>
            <span class="name">{name}</span>
        </>
    )
}

export default RectangleBox