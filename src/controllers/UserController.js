import express from "express"
import userModel from './../services/userModel'

const GetAllUser = async (req, res) => {
    let userList = await userModel.GetAllUser()
    return res.render('layout',{ data:{ title: 'Getall User', page:'ListUser' , rows: userList}});
}
const getDetailUser = async (req, res) => {
    let id = req.params.id
    let dataUser = await userModel.getOneUser(id)
    return res.render('layout',{ data:{ title: 'Detail user', page:'DetailUser' , rows: dataUser}});
}
const getEditUser = async (req, res) => {
    let id = req.params.id
    let dataUser = await userModel.getOneUser(id)
    return res.render('layout',{ data:{ title: 'Edit user', page:'EditUser' , rows: dataUser}});
}

const deleteUser = async (req, res) => {
    let  { user } = req.body
    await userModel.DeleteUser(user)
    res.redirect("/list-user")
}

const updateUser = async (req, res) => {
    console.log(req.body)
    let quyen = 0
    let {fullname, user, password, address, sex, email } = req.body
    if ('quyen' in req.body)
        quyen = 1
    await userModel.UpdateUser(fullname, password, address, sex, email, quyen, user)
    res.redirect("/list-user")
}

const addNewUser = async (req, res) => {
    console.log(req.body)
    let role = 0
    let {fullname, user, password, address, sex, email, quyen } = req.body
    if ('quyen' in req.body)
        role = 1
    await userModel.addNewUser(fullname, user, password, address, sex, email, quyen )
    res.redirect("/list-user")
}

const createNewUser = (req, res) => {
    return res.render('layout',{data:{ title: 'Create new user', page:'CreateUser' }});
}

const login = (req, res) => {
    return res.render('layout',{ data:{ title: 'Login', page:'Login'}});
}
export default {
    getDetailUser,
    createNewUser,
    GetAllUser,
    updateUser,
    deleteUser,
    addNewUser,
    getEditUser,
    login
}
