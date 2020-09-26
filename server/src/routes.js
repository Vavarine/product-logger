import express from 'express';
import ProductController from './controllers/ProductController';
import UserController from './controllers/UserController';

const routes = express.Router();

const productController = new ProductController();
const userController = new UserController();

routes.get('/products', productController.index);
routes.post('/products', productController.store);
routes.get('/products/:id', productController.show);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.destroy);

routes.get('/users', userController.index);
routes.post('/users', userController.store);
routes.get('/users/:id', userController.show);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.destroy)

routes.get('/', (req, res) => {
   return res.send('Minha nossa');
});

export default routes;