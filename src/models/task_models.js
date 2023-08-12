const connection = require('./conection')

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM task');
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO task(title, status, created_at) VALUES (?, ?, ?)';

  const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);
  return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {
  const [removedTask] = await connection.execute('DELETE FROM task WHERE id = ?', [id]);
  return removedTask;
};

const updateTask = async (id, task) => {
  const { title, status } = task;
  
  const query = 'UPDATE task SET title = ?, status = ? WHERE id = ?';

  const [updatedTask] = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
