const UserController = require('./controllers/UserController')
const HumanController = require('./controllers/HumanController')

module.exports = (app) => {
 /* RESFUL Api for users management */
 // create user
 app.post('/user',
 UserController.create
 )
 // edit user, suspend, active
 app.put('/user/:userId',UserController.put
 )
 // delete user
 app.delete('/user/:userId',
 UserController.remove
 )
 // get user by id
 app.get('/user/:userId',
 UserController.show
 )
 // get all user
 app.get('/users',
 UserController.index
 )
 

 app.post('/human',HumanController.create)
 // edit user, suspend, active
 app.put('/human/:humanId',HumanController.put)
 // delete user
 app.delete('/human/:humanId',
 HumanController.remove)
 // get user by id
 app.get('/user/:userId',
 HumanController.show)
 // get all user
 app.get('/Humans',
 HumanController.index
 )
}