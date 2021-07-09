const logDb = require('../schemas/logSchema')

const getAll = async () => {
    return logDb.find()
}

module.exports = {
    upload: async (req, res) => {
        const {title, price, quantity} = req.body
        const log = new logDb()
        log.title = title
        log.price = price
        log.quantity = quantity
        await log.save()
        const products = await getAll()
        res.send({products})
    },
}