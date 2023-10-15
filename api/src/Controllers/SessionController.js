const User = require('../Models/User')
const bcrypt = require('bcrypt')

module.exports = {
    async create(req, res) {

        const {email, password} = req.body

        try {
            const userExist = await User.findOne({ email })

            if(!userExist){
                return res.status(400).send({message: 'User does not exist'})
            }

            const validPassword = await bcrypt.compare(password, userExist.get("password") )

            if (!validPassword) {
                return res.status(400).send({message: 'Password invalid'})
            }

            return res.status(200).send(userExist)
        }catch (err){
            return res.status(400).send(err)
        }
    }
}