import express from 'express';
import aboutController from '../controllers/AboutController';
import homeController from '../controllers/HomeController';
import UserController from '../controllers/UserController';
import LoginController from '../controllers/LoginController';
const router = express.Router();
const initWebRoute = (app) => {
    app.get('/', homeController);
    app.get('/about', aboutController);
    app.get('/login', LoginController.login);
    app.get('/register', LoginController.register);
    app.post('/add-register', LoginController.addRegister);
    app.get('/list-user', UserController.GetAllUser);
    app.get('/detail-user/:id', UserController.getDetailUser);
    app.get('/create-new-user', UserController.createNewUser);
    app.get('/edit-user/:id', UserController.getEditUser);
    app.post('/update-user', UserController.updateUser);
    app.post('/delete-user', UserController.deleteUser);
    app.post('/add-new-user', UserController.addNewUser);
    app.get('/forgetpass', LoginController.forgetpass);
    
    app.use('', router);
    
}

export default initWebRoute;