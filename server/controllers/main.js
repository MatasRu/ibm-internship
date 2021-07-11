const articleDb = require('../schemas/articleSchema')
const keywordDb = require('../schemas/keywordSchema')

module.exports = {
    keyword: async (req, res) => {
        const {searchInput, ipaddress} = req.body
        const keyword = new keywordDb()
        keyword.ip = ipaddress
        keyword.date = new Date()
        keyword.keyword = searchInput
        await keyword.save().then(async () => {
            res.send({
                error: false,
                message: 'Succsesfully logged'
            })
        }).catch(e => {
            res.send({
                error: true,
                message: 'There was an error',
                errorMessage: e.message
            })
        })
    },
    article: async (req, res) => {
        const {pressedArticle, ipaddress, url} = req.body
        const article = new articleDb()
        article.ip = ipaddress
        article.date = new Date()
        article.url = url
        article.article = pressedArticle
        await article.save().then(async () => {
            res.send({
                error: false,
                message: 'Succsesfully logged'
            })
        }).catch(e => {
            res.send({
                error: true,
                message: 'There was an error',
                errorMessage: e.message
            })
        })
    }
}