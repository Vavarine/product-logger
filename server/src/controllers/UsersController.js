import Users from '../database/models/Users';
import Admins from '../database/models/Admins';

class UsersController {
   // Retorna todos usuários cadastrados no banco
   async index(req, res) {
      await Users.findAll().then(users => {
         return res.status(201).send(users);
      })
   }

   // Retorna um unico usuario do banco dado um 'id'
   async show(req, res) {
      await Users.findOne({ where: { id: req.params.id }}).then(user => {
         if(user){
            return res.status(200).send(user);
         } else {
            return res.status(400).send('Usuário não encontrado!');
         }
      }).catch(err => {
         return res.status(500).send(err);
      })
   }

   // Guarda usuario no banco
   async store(req, res) {
      await Users.findOne({ where: { email: req.body.email } }).then(async user => {
         if(!user) {
            await Users.create(req.body).then(() => {
               return res.status(200).send('Usuário cadastrado com sucesso!');
            }).catch(err => {
               return res.status(500).send(err);
            })
         } else {
            return res.status(400).send('Usuário já cadastrado!');
         }
      }).catch(err => {
         return res.status(500).send(err);
      })
   }

   // Atualiza dados do usuário no banco
   async update(req, res) {
      await Users.findOne({ where: { id: req.params.id }}).then(user => {
         if(user){
            Users.update(req.body, { where: { id: user.id } }).then(() => {
               return res.status(200).send('Usuário editado com sucesso!');
            }).catch(err => {
               return res.status(500);
            }).catch(err => {
               return res.status(500).send(err);
            })
         } else {
            return res.status(404).send('Usuário não encontrado!');
         }
      }).catch(err => {
         return res.status(500).send(err);
      })
   }

   // Apaga usuário do banco
   async destroy(req, res) {
      // Verifica se usuário está cadastrado
      return await Users.findOne({ where: { id: req.params.id } }).then(async user => {
         if(user){    
            // Verifica se usuário é admin
            await Admins.findOne({ where: { userId: req.params.id } }).then(async admin =>{
               if(admin){
                  // Apaga registro de administrador
                  await Admins.destroy({ where: { userId: req.params.id} }).then(() => {
                     console.log('Registro de administrador excluido');
                  })
               }

               // Apaga registro do usuário 
               return await Users.destroy({ where: { id: user.id } }).then(() => {
                  return res.status(200).send('Usuário excluido com sucesso!');
               }).catch(err => {
                  console.log(err);
                  return res.status(500);
               })
            })
         } else {
            return res.status(404).send('Usuário não encontrado!');
         }
      }).catch(err => {
         console.log(err);
         return res.status(500).send(err);
      })
   }
}

export default UsersController;