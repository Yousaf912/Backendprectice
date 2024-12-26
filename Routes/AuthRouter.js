const express = require("express");
const controler = require("../controllers/controlers");
const signupValidate = require("../ZodValidation/Middleweare");
const SignupZodValidation = require("../ZodValidation/signupSchema");
const router = express.Router();

router.get('/home',controler.home);
router.post('/register',signupValidate(SignupZodValidation), controler.register);
router.post('/login',controler.login);

module.exports=router