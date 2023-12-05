const express = require("express")
//importa do controller e das validacoes
const taskController = require('./controller/taskController')
const middleware = require('./middlewares/middlewaresTask')

//adiciona as rotas dentro do app
const router = express.Router()

//rota para buscar todas as tarefas do banco de dados
router.get('/task', taskController.getAll);
//rota para a quantidade total de tarefas do banco de dados
router.get('/number', taskController.number_task);
//rota para criar uma tarefa no banco de dados
router.post('/task', middleware.validateFieldTitle, taskController.createTask);
//rota para deletar uma tarefa do banco de dados
router.delete('/task/:id', taskController.deleteTask);
//rota para editar uma tarefa do banco de dados
router.put('/task/:id',
    middleware.validateFieldTitle,  //valida se tarefa tem nome
    middleware.validateFieldStatus, 
    taskController.updateTask,      //atualizada task no banco de dados
);

module.exports = router