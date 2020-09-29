import Products from '../database/models/Products';

class ProductController {
   constructor(){
      this.pageSize = 5;
   }

   // Busca todos produtos da tabela 'products'
   async index(req, res){
      const { page = 1 } = req.query;

      await Products.paginate({ page, paginate: 10 }).then(products => {
         const data = Object.assign(products, {page: parseInt(page)});
         return res.send(data);
      }); 
   }

   // Retorna produto conforme id mandado nas params
   async show(req, res){
      await Products.findOne({ 
         where: { 'id': req.params.id } 
      }).then(product => {
         if(product){
            return res.status(200).send(product);
         } else {
            return res.status(400).send('Produto não encontrado');
         }
      }).catch(err => {
         console.log(err);
         return res.status(500);
      })
   }

   // Cria produto no banco de dados
   async store(req, res){
      await Products.create(req.body).then(()=>{
         return res.status(201).send('Produto criado com sucesso');
      }).catch((err) =>{
         console.log(err);
         return res.status(500);
      })
   }

   // Edição de produto pelo id informado
   async update(req, res){
      await Products.findOne({ 
         where: { 'id': req.params.id } 
      }).then(async (product) => {
         await Product.update(req.body, {
            where: { 'id': product.id }
         }).then(() => {
            return res.status(200).send('Editado com sucesso!');
         }).catch((err) => {
            console.log(err);
            return res.status(500);
         })
      }).catch(() => {
         return res.status(400).send('Produto não encontrado.');
      })
   }

   // Exclui produto conforme o id informado
   async destroy(req, res){
      await Products.findOne({ 
         where: { 'id': req.params.id } 
      }).then(async (product) => {
         await Product.destroy({
            where: { 'id': product.id }
         }).then(() => {
            return res.status(200).send('Excluido com sucesso! ');
         }).catch(err => {
            console.log(err);
            return res.status(500);
         })
      }).catch(() => { 
         return res.status(400).send('Produto não encontrado.');
      })
   }
}

export default ProductController;