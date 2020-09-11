import express from 'express'
import userRoutes from '../routes/user.routes'
import ProductRouter from '../routes/products.routes'
import BrandRouter from '../routes/brand.routes'

const routes = express.Router()


routes.use('/users', userRoutes)
routes.use('/products', ProductRouter)
routes.use('/brands', BrandRouter)

export default routes