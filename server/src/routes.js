import express from 'express';
import ProductController from './controllers/ProductController';

const routes = express.Router();

const productController = new ProductController();

routes.get('/products', productController.index);
routes.post('/products', productController.store);
routes.get('/products/:id', productController.show);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.destroy);

routes.get('/', (req, res) => {
   return res.send('Minha nossa');
});

export default routes;