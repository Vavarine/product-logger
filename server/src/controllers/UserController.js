import Users from '../database/models/Users';

class UsersController {
   // Retorna todos usuários cadastrados no banco
   async index(req, res) {
      Users.findAll().then(users => {
         return res.status(201).send(users);
      })
   }

   // Retorna um unico usuario do banco dado um 'id'
   async show(req, res) {
      Users.findOne({ where: { id: req.params.id }}).then(user => {
         if(user){
            return res.status(200).send(user);
         } else {
            return res.status(404).send('Usuário não encontrado!');
         }
      }).catch(err => {
         return res.status(500).send(err);
      })
   }

   // Guarda usuario no banco
   async store(req, res) {
      Users.create(req.body).then(() => {
         return res.status(200).send('Usuário cadastrado com sucesso!');
      }).catch(err => {
         return res.status(500).send(err);
      })
   }

   // Atualiza dados do usuário no banco
   async update(req, res) {
      Users.findOne({ where: { id: req.params.id }}).then(user => {
         if(user){
            Users.update(req.body, { where: { id: user.id } }).then(() => {
               return res.status(200).send('Usuário editado com sucesso!');
            }).catch(err => {
               return res.status(500);
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
      Users.findOne({ where: { id: req.params.id } }).then(user => {
         if(user){
            Users.destroy({ where: { id: user.id } }).then(() => {
               return res.status(200).send('Usuário excluido com sucesso!');
            }).catch(err => {
               return res.status(500);
            })
         } else {
            return res.status(404).send('Usuário não encontrado!');
         }
      }).catch(err => {
         return res.status(500).send(err);
      })
   }
}

export default UsersController;