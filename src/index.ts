import express from 'express'

const PORT = 3000
const app: express.Express = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router: express.Router = express.Router()
router.get('/api/getTest', (req: express.Request, res: express.Response) => {
  res.send(req.query)
})
router.post('/api/postTest', (req: express.Request, res: express.Response) => {
  res.send(req.body)
})
app.use(router)

app.listen(PORT, () => console.log('Listern on port ' + PORT))
