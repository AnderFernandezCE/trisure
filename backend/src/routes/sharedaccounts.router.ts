import express, { Router, Request, Response } from "express";
const sharedAccountsRouter : Router = express.Router();
// const programmingLanguagesController = require('../controllers/programmingLanguages.controller');

let sharedAccounts = [
  { id: 1, name: 'Shared Account 1', balance: 5000 },
  { id: 2, name: 'Shared Account 2', balance: 10000 },
];
/* GET programming languages. */
// router.get('/', programmingLanguagesController.get);
sharedAccountsRouter.get('/', (req: Request, res: Response) =>{
  res.json(sharedAccounts)
})
  
// /* POST programming language */
// router.post('/', programmingLanguagesController.create);

// /* PUT programming language */
// router.put('/:id', programmingLanguagesController.update);

// /* DELETE programming language */
// router.delete('/:id', programmingLanguagesController.remove);

export default sharedAccountsRouter;