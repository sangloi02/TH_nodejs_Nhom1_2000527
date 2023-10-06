import pool from './../configs/connectDB'
const GetAllUser = async () => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`')
    return rows
}
const getOneUser = async (id) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` WHERE id=?', [id])
    return rows
}
const UpdateUser = async (fullname, password, address, sex, email, quyen, user) => {
    await pool.execute("UPDATE `users` SET fullname=?, password=?, address=?, sex=?, email=?, quyen=? WHERE user=?", [fullname, password, address, sex, email, quyen, user])
}
const DeleteUser = async (user) => {
    await pool.execute('delete FROM `users` WHERE user=?', [user])
    
}

const addNewUser = async (fullname, user, password, address, sex, email, quyen) => {
    await pool.execute('insert into users (fullname, user, password, address, sex, email, quyen) values(?,?,?,?,?,?,?)',[fullname, user, password, address, sex, email, quyen])
}

const addNewUserRegiter = async (fullname, user, password, address, sex, email, role) => {
    await pool.execute('insert into users (fullname, user, password, address, sex, email, quyen) values(?,?,?,?,?,?,?)',[fullname, user, password, address, sex, email, role])
}

export default {
    GetAllUser,
    getOneUser,
    UpdateUser,
    DeleteUser,
    addNewUser,
    addNewUserRegiter

}