module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
         {
            name: 'Evailson',
            email: 'evailson.m.barbosa@gmail.com',
            password: '123',
            createdAt: new Date()
         },
         {
            name: 'Eva',
            email: 'Eva@eva.com',
            password: '123',
            createdAt: new Date()
         },
         {
            name: 'Jaquarela',
            email: 'jaqua@eva.com',
            password: '123',
            createdAt: new Date()
         },
         {
            name: 'Jaçanã',
            email: 'trem@onze.com',
            password: '123',
            createdAt: new Date()
         },
         {
            name: 'Jabaquara',
            email: 'jaba@quara.com',
            password: '123',
            createdAt: new Date()
         },
      ]);
   },
   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
   }
};