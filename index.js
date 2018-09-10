const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res) => res.send('To Do Manager!'));
app.listen(3000, () => console.log('Server Started on port 3000!'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Método para executar o PUT
app.put('/tasks/:taskId', (request, response) => {
 const { body } = request;
 const task = tasks.find(t => t.id == request.params.taskId);

 if (task) {
 task.title = body.title;
 task.resume = body.resume;
 task.isDone = body.isDone;
 task.isPriority = body.isPriority;
 response.send(task);
 } else {
 response.status(404);
 response.send();
 }
});


//Método para deletar
app.delete('/tasks/:taskId', (request, response) => {
 const task = tasks.find(t => t.id == request.params.taskId);
 if (task) {
 tasks.pop(task);
 response.send(task);
 } else {
 response.status(404);
 response.send();
 }
});

