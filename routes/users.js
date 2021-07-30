import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../cp/users.js';
//inistialisng our router 
const router = express.Router();
// the thing here is with the / slash is that we have already written /people therr and inclduing /people here would seem like /people/people which would make the whole process redundant 
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);
 
router.patch('/:id', updateUser);

export default router;