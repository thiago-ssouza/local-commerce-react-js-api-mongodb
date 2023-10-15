import React from "react";
import Navbar from '../../Components/Navbar/Navbar'
import DeletableCard from "../../Components/DeletableCard/DeletableCard";

function Dashboard(){
    return (
        <div>
            <Navbar/>
            <section className="input-section">
                <form action="">
                    <h1>Register Products</h1>
                    <div className="product-inputs">
                        <input type="text" placeholder="Product name"/>
                        <input type="number" min="0" placeholder="Product price"/>
                        <button>Add Product</button>
                    </div>
                </form>
            </section>

            <section className="products-section">
                <div className="products-container">
                    <DeletableCard/>
                    <DeletableCard/>
                    <DeletableCard/>
                </div>
            </section>
        </div>
    )
}

export default Dashboard