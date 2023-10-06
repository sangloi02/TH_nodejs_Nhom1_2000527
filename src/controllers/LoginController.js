import express from "express"
import userModel from './../services/userModel'
const login = (req, res) => {
    res.render('layout',{ data:{ title: 'Login', page:'Login' }});
}
const register = (req, res) => {
    res.render('layout',{ data:{ title: 'Register', page:'Register' }});
}
const forgetpass = (req, res) => {
    res.render('layout',{ data:{ title: 'forgetpass', page:'forgetpass' }});
}
const addRegister = async (req, res) => {
    console.log(req.body)
    let {fullname, user, password, address, sex, email} = req.body
    let role = 'User'
    await userModel.addNewUserRegiter(fullname, user, password, address, sex, email, role)
    res.redirect("/login")
}
export default {
login,
register,
addRegister,
forgetpass
}
