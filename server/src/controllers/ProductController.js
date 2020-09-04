import Product from '../database/models/Product';

class ProductController {
   constructor(){
      this.pageSize = 5;
   }

   // Busca todos produtos da tabela 'products'
   async index(req, res){
      const { page = 1 } = req.query;

      await Product.paginate({ page, paginate: 10 }).then(products => {
         const data = Object.assign(products, {page: parseInt(page)});
         return res.send(data);
      }); 
   }

   // Mostra um único produto
   async show(req, res){
      await Product.findOne({ 
         where: { 'id': req.params.id } 
      }).then(product => {
         if(product){
            return res.status(200).send(product);
         } else {
            return res.status(400).send('Produto não encontrado');
         }
      }).catch(err => {
         return res.status(500).send(err);
      })
   }

   // Guarda produto no banco de dados
   async store(req, res){
      await Product.create(req.body).then(()=>{
         return res.status(201).send('Produto criado com sucesso');
      }).catch((error) =>{
         console.log(error);
         return res.status(500).send(error);
      })
   }

   // Edição de produto pelo id informado
   async update(req, res){
      await Product.findOne({ 
         where: { 'id': req.params.id } 
      }).then(async (product) => {
         await Product.update(req.body, {
            where: { 'id': product.id }
         }).then(() => {
            return res.status(200).send('Editado com sucesso!');
         }).catch((err) => {
            return res.status(500).send(err);
         })
      }).catch(() => {
         return res.status(400).send('Produto não encontrado.');
      })
   }

   // Exclui produto conforme o id informado
   async destroy(req, res){
      await Product.findOne({ 
         where: { 'id': req.params.id } 
      }).then(async (product) => {
         await Product.destroy({
            where: { 'id': product.id }
         }).then(() => {
            return res.status(200).send('Excluido com sucesso! ');
         }).catch(err => {
            return res.status(500).send(err);
         })
      }).catch(() => { 
         return res.status(400).send('Produto não encontrado.');
      })
   }
}

export default ProductController;