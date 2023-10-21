import React from "react";
function Card({productName, price, userName, userPhone}){

    return (
        <div className="card">
            <h2> {productName}</h2>
            <h1>$ {price}</h1>
            <div className="card-info">
                <div className="card-indo-details">
                    {/*<img src="" alt=""/>*/}
                    <p> {userName} </p>
                </div>
                <div className="card-indo-details">
                    {/*<img src="" alt=""/>*/}
                    {/*<p>+1 743 849 375</p>*/}
                    <p>{userPhone}</p>
                </div>
            </div>
        </div>
    )
}

export default Card