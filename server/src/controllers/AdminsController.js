import Admins from '../database/models/Admins';
import Users from '../database/models/Users';

class AdmisnController {
   // Retorna todos 'admins' cadastrados junto cons suas informações da tabela users
   async index(req, res) {
      await Admins.findAll({
         include: Users
      }).then(async admins => {
         if(!admins) {
            return res.status(400).send('Nenhum Admin encontrado!');
         } else {
            return res.status(200).send(admins);
         }
      }).catch(err => {
         console.log(err);
         return res.status(500);
      });
   }

   // Retorna admin conforme id mandado nas params
   async show(req, res){
      await Admins.findOne({ 
         where: { 'id': req.params.id } 
      }).then(admin => {
         if(admin){
            return res.status(200).send(admin);
         } else {
            return res.status(400).send('Admin não encontrado');
         }
      }).catch(err => {
         console.log(err);
         return res.status(500);
      });
   }

   // Cria um admin com informações contidas contidas body
   async store(req, res) {
      await Admins.create(req.body).then(response => {
         return res.status(201).send(req.body);
      }).catch(err => {
         console.log(err);
         return res.status(500)
      });
   }

   // Permite edição de Admins
   // Obs. Permite apenas a edição de atributos da tabela Admins.
   // Os emais atributros são da tabela Usuarios, para modificalos
   // usar as  rotas  de Usuarios para editalos. 
   async update(req, res) {
      await Admins.findOne({ 
         where: { 'id': req.params.id } 
      }).then(async (product) => {
         await Admins.update(req.body, {
            where: { 'id': product.id }
         }).then(() => {
            return res.status(200).send('Editado com sucesso!');
         }).catch((err) => {
            console.log(err);
            return res.status(500);
         })
      }).catch(() => {
         return res.status(400).send('Admin não encontrado.');
      });
   }

   // Permite exclusão de admins
   // Obs. Não deleta o registro do usuário
   async destroy(req, res) {
      // Verifica se admin esta cadastrado
      await Admins.findOne({ where: { id: req.params.id } }).then(async admin => {
         if(admin){
            // Deleta registro de admin da base
            
            await Admins.destroy({ where: { id: admin.id } }).then(() => {
               return res.status(200).send('Registro de admin excluido com sucesso!');
            }).catch(err => {
               console.log(err);
               return res.status(500);
            })
         } else {
            return res.status(400).send('Admin não encontrado!');
         }
      }).catch(err => {
         console.log(err);
         return res.status(500);
      });
   }
   
}

export default AdmisnController;