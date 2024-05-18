import express, { Router, Request, Response } from "express";
const accountsRouter : Router = express.Router();
// const programmingLanguagesController = require('../controllers/programmingLanguages.controller');

let accounts = [
  { id: 1, name: 'Account 1', balance: 5000 },
  { id: 2, name: 'Account 2', balance: 10000 },
];
/* GET programming languages. */
// router.get('/', programmingLanguagesController.get);
accountsRouter.get('/', (req: Request, res: Response) =>{
  res.json(accounts)
})
  
// /* POST programming language */
// router.post('/', programmingLanguagesController.create);

// /* PUT programming language */
// router.put('/:id', programmingLanguagesController.update);

// /* DELETE programming language */
// router.delete('/:id', programmingLanguagesController.remove);

export default accountsRouter;