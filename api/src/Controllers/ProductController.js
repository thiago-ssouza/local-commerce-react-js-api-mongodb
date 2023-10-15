const Product = require('../Models/Product')

const UserController = require('../Controllers/UserController')
const User = require('../Models/User')

module.exports = {

    async create (req, res) {
        const {name, price} = req.body
        const {user_id} = req.params

        const {auth} = req.headers

        if(user_id !== auth) {
            return res.status(400).send({message: 'Unauthorized'})
        }

        try {
            const  userInfo = await User.findById(user_id)

            const  {location} = userInfo
            const latitude = location.coordinates[0]
            const longitude = location.coordinates[1]

            const setLocation = {
                type: 'Point',
                coordinates: [latitude, longitude]
            }

            const createdProduct = await Product.create({
                name,
                price,
                user: user_id,
                location: setLocation
            })

            ///TODO Use the lates id. Do not use  it is not populating. execPopulate was removed. Need to find another way to do it
            await createdProduct.populate('user')

            return res.status(201).send(createdProduct)
        }catch (err){
            return res.status(400).send(err)
        }



    },

    async delete (req, res){

        const {product_id, user_id} = req.params

        const {auth} = req.headers

        if(user_id !== auth) {
            return res.status(400).send({message: 'Unauthorized'})
        }

        try {
            const deletedProduct = await Product.findByIdAndDelete(product_id)

            return res.status(200).send({status: "deleted", product: deletedProduct})
        }catch (err){
            return res.status(400).send(err)
        }

    },

    async indexByUser (req, res) {
        const {user_id} = req.params

        const {auth} = req.headers

        if(user_id !== auth) {
            return res.status(400).send({message: 'Unauthorized'})
        }

        try {
            const allProductsOfAnUser = await Product.find({
                user: user_id
            })

            return res.status(200).send(allProductsOfAnUser)
        }catch (err) {
            return res.status(400).send(err)
        }
    },

    async indexAll (req, res){
        const {latitude, longitude } = req.query

        const maxDistance = 5000

        try {
            const  allProducts = await Product.find({
                    location: {
                        $near: {
                            $geometry: {
                                type: 'Point',
                                coordinates: [latitude, longitude]
                            },
                            $maxDistance: maxDistance
                        }
                    }
            }).populate('user')

            return res.status(200).send(allProducts)
        }catch (err) {
            return res.status(400).send(err)
        }
    }

}