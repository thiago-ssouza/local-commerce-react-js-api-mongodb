import React, {useState} from "react";
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import Modal from '../../Components/Modal/Modal'

// import {Link} from 'react-router-dom'

function Home(){

    const [isModalOpen, setModalOpen] = useState(false)

    function openModal(){
        setModalOpen(true)
    }

    function closeModal(){
        setModalOpen(false)
    }

    return (
        <div>
            <Navbar openModal={openModal}/>

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
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>

            {/*Conditional rendering*/}
            {isModalOpen ? <Modal closeModal={closeModal}/> : null}

        </div>
    )
}

export default Home