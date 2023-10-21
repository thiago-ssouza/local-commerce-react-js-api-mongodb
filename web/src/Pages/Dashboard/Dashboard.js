import React, {useState, useContext, useEffect} from "react";
import Navbar from '../../Components/Navbar/Navbar'
import DeletableCard from "../../Components/DeletableCard/DeletableCard";
import api from '../../Source/Api'
import { UserContext } from '../../Context/UserContext'

function Dashboard(){

    const [userData, setUserData] = useContext(UserContext)
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productsData,setProductsData] = useState([])

    useEffect(()=>{
        getUsersProducts()
    },[productsData])
    async function addProductHandler(e){
        e.preventDefault()

        try{
            await api.post(`${userData._id}/product`,{
                name: productName,
                price: productPrice
            }, {
                headers: {
                    auth: userData._id
                }
            })

            alert('Product successfully registered!')
            setProductName('')
            setProductPrice('')

        }catch (err){
            alert('Product add failed!! Try again later!!')
        }
    }

    async function getUsersProducts(){

        try{
            const userProductsData = await api.get(`/product/${userData._id}`,{
                headers: {
                    auth: userData._id
                }
            })
            const { data } = userProductsData
            console.log(data)
            setProductsData(data)
            // console.log(userProductsData)
            // alert(userProductsData.data)
        }catch (err){
            alert('Error loading product list! Try again later!')
        }
    }

    async function deleteProductHandler(product_id, user_id){
        try{

            await api.delete(`${userData._id}/product/${product_id}`,{
                headers: {
                    auth: userData._id
                }
            })

            alert('Product successfully deleted!')

        }catch (err){
            alert('Error deleting product! Try again later!')
        }
    }

    return (
        <div>
            <Navbar/>
            <section className="input-section">
                <form action="">
                    <h1>Register Products</h1>
                    <div className="product-inputs">
                        <input
                            type="text"
                            placeholder="Product name"
                            value={productName}
                            onChange={e=>setProductName(e.target.value)}
                        />
                        <input
                            type="number"
                            min="0"
                            placeholder="Product price"
                            value={productPrice}
                            onChange={e=>setProductPrice(Number(e.target.value))}
                        />
                        <button onClick={addProductHandler}>Add Product</button>
                    </div>
                </form>
            </section>

            <section className="products-section">
                <div className="products-container">
                    {productsData.map(product => (
                        <DeletableCard
                            key={product._id}
                            productName={product.name}
                            price={product.price}
                            userName={product.user.name}
                            userPhone={product.user.phone}
                            deleteProductHandler={()=>{deleteProductHandler(product._id)}}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Dashboard