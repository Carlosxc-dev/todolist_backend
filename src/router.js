const express = require("express")

const taskController = require('./controller/taskController')
const middleware = require('./middlewares/middlewaresTask')

const router = express.Router()

router.get('/task', taskController.getAll);
router.get('/number', taskController.number_task);

router.post('/task', middleware.validateFieldTitle, taskController.createTask);
router.delete('/task/:id', taskController.deleteTask);
router.put('/task/:id',
    middleware.validateFieldTitle,
    middleware.validateFieldStatus,
    taskController.updateTask,
);

module.exports = router