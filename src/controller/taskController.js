const taskmodel = require("../models/task_models")
//faz uma requisicao pra model pedindo todas as tarefas 
const getAll = async (_request, response) => {
  const tasks = await taskmodel.getAll();
  return response.status(200).json(tasks);
};
//faz uma requisicao pra model para ela criar umas tarefa com os param da requisicao
const createTask = async (request, response) => {
  const createdTask = await taskmodel.createTask(request.body);
  return response.status(201).json(createdTask);
};
//faz uma requisicao pra model para ela deletar uma task dado um certo id
const deleteTask = async (request, response) => {
  const { id } = request.params;
  await taskmodel.deleteTask(id);
  return response.status(204).json();
};
//faz uma requisicao pra model atualizar uma tarefa com base nos param da requisicao
const updateTask = async (request, response) => {
  const { id } = request.params;
  await taskmodel.updateTask(id, request.body);
  return response.status(204).json();
};
//faz uma requisicao pra model pedindo o numero total de tarefas
const number_task = async(req, res) => {
  const [number] = await taskmodel.number_task();
  return res.status(200).json(number['COUNT(*)']);
}
// exporta as funcoes para outros arquivos
module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
  number_task,
};