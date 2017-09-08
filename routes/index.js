import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index')
})

router.post('/api/suko', function (req, res, next) {
    const clientId = req.params.clientId
    const clientSecret = req.params.clientSecret
    const channel = req.params.channel
    const max = req.params.max
})
export default router
