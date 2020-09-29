import express from 'express';
import ProductsController from './controllers/ProductsController';
import UsersController from './controllers/UsersController';
import AdminsController from './controllers/AdminsController';

const routes = express.Router();

const productsController = new ProductsController();
const usersController = new UsersController();
const adminsController = new AdminsController();

// Rotas de produtos
routes.get('/products', productsController.index);
routes.post('/products', productsController.store);
routes.get('/products/:id', productsController.show);
routes.put('/products/:id', productsController.update);
routes.delete('/products/:id', productsController.destroy);

// Rotas de usuarios
routes.get('/users', usersController.index);
routes.post('/users', usersController.store);
routes.get('/users/:id', usersController.show);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.destroy)
 
// Rotas de Admins
routes.get('/admins', adminsController.index);
routes.post('/admins', adminsController.store);
routes.get('/admins/:id', adminsController.show);
routes.put('/admins/:id', adminsController.update);

routes.get('/', (req, res) => {
   return res.send('Minha nossa');
});

export default routes;