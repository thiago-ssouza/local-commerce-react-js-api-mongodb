import React from "react";
function DeletableCard({productName, price, userName, userPhone, deleteProductHandler}){

    return (
        <div className="card">
            <button onClick={deleteProductHandler}>Remove</button>

            <h2>{ productName }</h2>
            <h1>$ { price }</h1>
            <div className="card-info">
                <div className="card-indo-details">
                    {/*<img src="" alt=""/>*/}
                    {/*<p>Montreal Sandwiches</p>*/}
                    <p> {userName}</p>
                </div>
                <div className="card-indo-details">
                    {/*<img src="" alt=""/>*/}
                    {/*<p>+1 743 849 375</p>*/}
                    <p>{ userPhone }</p>
                </div>
            </div>
        </div>
    )
}

export default DeletableCard