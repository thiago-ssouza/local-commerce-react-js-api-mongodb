import React from "react";
import logo from '../../assets/local-commerce-logo.png'

function Home(){
    return (
        <div>
            <nav>
                <div className="nav-container">
                    <img src={logo} alt="Local commerce logo"/>
                    <button>LOGIN</button>
                </div>
            </nav>

            <section className="input-section">
                <form action="">
                    <h1>Search products</h1>
                    <div className="form-inputs">
                        <input type="text" placeholder="Search by Name"/>
                        <input type="number" min="0" placeholder="Maximum Price"/>
                    </div>
                </form>

            </section>

            <section className="products-section">
                <div className="products-container">
                    <div className="card">
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
                </div>
            </section>
        </div>
    )
}

export default Home