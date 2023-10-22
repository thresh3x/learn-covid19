import express, {Express, Router, Request, Response} from 'express'
import axios from 'axios'

const app:Express = express()

const router:Router = express.Router()

app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.use('/api', router)

router.get('/list', async (req:Request, res:Response) => {
    const result = await import('./list.json').then(res => res.data)
    
    res.json({
        data:result
    })
})

app.listen(3333, () => {
    console.log('success server http://localhost:3333')
})
