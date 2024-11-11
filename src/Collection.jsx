import React from "react";

export const Collection = ({ images, name }) => {
    return (
        <>
            <div className='collection'>
                <img className='collection_big' src={images[0]} alt="" />
                <div className='collection_bottom'>
                    <img className='collection_mini' src={images[1]} alt="" />
                    <img className='collection_mini' src={images[2]} alt="" />
                    <img className='collection_mini' src={images[3]} alt="" />
                </div>
                <h3 className="name_collection">{name}</h3>
            </div>
        </>
    );
}