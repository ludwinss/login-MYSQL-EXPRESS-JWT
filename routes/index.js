const express=require('express');
const controllerLogin=require('../controllers/login');
const verifyJWT=require('../service/authenticationJWT').verify;

const router=express.Router();

router.get('/signin',controllerLogin.getByUser);
router.post('/signup',controllerLogin.add);
router.get('/session',verifyJWT,controllerLogin.getAll);

module.exports=router;
