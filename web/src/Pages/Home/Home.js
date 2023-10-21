import React, {useEffect, useState} from "react";
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import Modal from '../../Components/Modal/Modal'
import api from '../../Source/Api'

// import {Link} from 'react-router-dom'

function Home(){

    const [isModalOpen, setModalOpen] = useState(false)
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [productsData,setProductsData] = useState([])
    const [searchProductsByName, setSearchProductsByName] = useState('')
    const [searchProductsByMaxPrice, setSearchProductsByMaxPrice] = useState(0)

    const [filteredProductsData,setFilteredProductsData] = useState([])

    useEffect(() => {
        getUserLocation()
    }, [])

    async function getUserLocation(){
        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude, longitude} = position.coords
            //console.log(latitude,longitude)
            setLatitude(latitude)
            setLongitude(longitude)
        }, (err) => {
            console.log(err)
        }, {timeout: 10000})
    }

    useEffect(() => {
        getAllNearProductsByUserLocation()
    }, [latitude, longitude])


    // get all products near to the user location
    async function getAllNearProductsByUserLocation(){

        try{
            const nearProductUserLocationData = await api.get(`/product?latitude=${latitude}&longitude=${longitude}`)
            const {data} = nearProductUserLocationData

            //console.log(data)
            setProductsData(data)
            //console.log(nearProductUserLocationData)

        }catch (err){
            alert('Error loading product list! Try again later!')
        }
    }

    useEffect(() => {
        searchFilterProducts()
    }, [productsData, searchProductsByName, searchProductsByMaxPrice])

    function searchFilterProducts(){
        const searchFilteredProducts = productsData.filter(product =>
            (!searchProductsByName || product.name.toLowerCase().includes(searchProductsByName.toLowerCase())) &&
            (!searchProductsByMaxPrice || product.price <= searchProductsByMaxPrice)
        )
        setFilteredProductsData(searchFilteredProducts)
    }

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
                    <h1>Products search</h1>
                    {/*<p>{latitude} {longitude}</p>*/}
                    <div className="form-inputs">
                        <input
                            type="text"
                            placeholder="Search by Name"
                            value={searchProductsByName}
                            onChange={e=>setSearchProductsByName(e.target.value)}

                        />
                        <input
                            type="number"
                            min="0"
                            placeholder="Maximum Price"
                            value={searchProductsByMaxPrice}
                            onChange={e=>setSearchProductsByMaxPrice(Number(e.target.value))}
                        />
                    </div>
                </form>

            </section>

            <section className="products-section">
                <div className="products-container">



                    {productsData.length > 0 ? (
                        filteredProductsData.map(product => (
                                <Card
                                    key={product._id}
                                    productName={product.name}
                                    price={product.price}
                                    userName={product.user.name}
                                    userPhone={product.user.phone}
                                />
                        ))) :
                            <h1>Loading...</h1>
                    }

                    {/*{productsData.map(product => (*/}
                    {/*{filteredProductsData.map(product => <h1>{product.name}</h1>)}*/}

                    {/*{filteredProductsData.map(product => (*/}
                    {/*    <Card*/}
                    {/*        key={product._id}*/}
                    {/*        productName={product.name}*/}
                    {/*        price={product.price}*/}
                    {/*        userName={product.user.name}*/}
                    {/*        userPhone={product.user.phone}*/}
                    {/*    />*/}
                    {/*))}*/}

                </div>
            </section>

            {/*Conditional rendering*/}
            {isModalOpen ? <Modal closeModal={closeModal}/> : null}

        </div>
    )
}

export default Home