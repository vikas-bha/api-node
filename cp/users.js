import { v4 as uuid } from 'uuid';
// here let signifies that it would become immutable and thus let will help us to modify delet and update or stuff
let users = [];
//get all users 
export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}
//post
export const createUser = (req, res) => {   
    const user = req.body;
// tryna create a user 
    users.push({...user, id: uuid()});
    // pushed this created user with the help of uuid into let users[] variable 
    //...user statement is implyint ki give this user this uuid id and and the user should have all the properties of a user 
    console.log(`User [${user.username}] added to the database.`);
};
//get by id
export const getUser = (req, res) => {
    res.send(req.params.id)
};
// delete
export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    //remove the elemetns for those the funtion returns false 
    // id to delete : 123
    //abc : 123
    // xyz : 456
    // for abc and id to be deleted it will return false thus filter function is going to delete the abc 
    // for xyz it will be true so naught action 
    users = users.filter((user) => user.id !== req.params.id);
};
//patch put is also used , but it's used when we need to overwrite everything 
export const updateUser =  (req,res) => {
    // this line below is tryin to find the particular user with that id and it will be saved in user and thus actions will take place as required
    const user = users.find((user) => user.id === req.params.id);
    // user here is the user to be upaated 
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};