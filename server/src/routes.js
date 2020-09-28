import express from 'express';
import ProductsController from './controllers/ProductsController';
import UsersController from './controllers/UsersController';

const routes = express.Router();

const productsController = new ProductsController();
const usersController = new UsersController();

routes.get('/products', productsController.index);
routes.post('/products', productsController.store);
routes.get('/products/:id', productsController.show);
routes.put('/products/:id', productsController.update);
routes.delete('/products/:id', productsController.destroy);

routes.get('/users', usersController.index);
routes.post('/users', usersController.store);
routes.get('/users/:id', usersController.show);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.destroy)

routes.get('/', (req, res) => {
   return res.send('Minha nossa');
});

export default routes;