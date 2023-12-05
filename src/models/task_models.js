const connection = require('./conection')

// busca no banco de dados todas as tarefas 
const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM task');
  return tasks;
};
//criar uma tarefa no banco de dados 
const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO task(title, status, created_at) VALUES (?, ?, ?)';

  const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);
  return {insertId: createdTask.insertId};
};
// deletar uma task do banco de dados 
const deleteTask = async (id) => {
  const [removedTask] = await connection.execute('DELETE FROM task WHERE id = ?', [id]);
  return removedTask;
};
// atualizar uma task ja existente no banco de dados
const updateTask = async (id, task) => {
  const { title, status } = task;
  
  const query = 'UPDATE task SET title = ?, status = ? WHERE id = ?';

  const [updatedTask] = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

// busca quantas task tem no banco de dados
const number_task = async () =>{
  const query = 'SELECT COUNT(*) FROM task'
  const [number] = await connection.execute(query);

  return number;
}

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
  number_task,
};

