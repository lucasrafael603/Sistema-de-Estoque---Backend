import express from 'express'
import userRoutes from '../routes/user.routes'
import ProductRouter from '../routes/products.routes'
import BrandRouter from '../routes/brand.routes'
import transactionsRoutes from '../routes/transactions.routes'

const routes = express.Router()


routes.use('/users', userRoutes)
routes.use('/products', ProductRouter)
routes.use('/brands', BrandRouter)
routes.use('/transactions', transactionsRoutes)

export default routes