import React from "react";
function DeletableCard(){

    return (
        <div className="card">
            <button>Remove</button>

            <h2>Gourmet Sandwich</h2>
            <h1>$ 5,00</h1>
            <div className="card-info">
                <div className="card-indo-details">
                    {/*<img src="" alt=""/>*/}
                    <p>Montreal Sandwiches</p>
                </div>
                <div className="card-indo-details">
                    {/*<img src="" alt=""/>*/}
                    <p>+1 743 849 375</p>
                </div>
            </div>
        </div>
    )
}

export default DeletableCard