/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {

  constructor(todo){
    this.todo = todo
  }

  add(task){
    this.todo.push(task)
    return this.todo
  }

  remove(index){
    this.todo.splice(index,1)
    return this.todo
  }

  update(index,task){
    this.todo[index] = task
    return this.todo

  }

  getAll(){
    return this.todo
  }

  get(index){
    return this.todo[index]
  }

  clear(){
    this.todo = []
    return this.todo
  }

}

var result = new Todo([])
console.log(result.add(1));
console.log(result.add(2));
console.log(result.remove(1));
console.log(result.update(0,5));
console.log(result.add(6));
console.log(result.add(8));
console.log(result.get(2));
console.log(result.clear());


module.exports = Todo;
