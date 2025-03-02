

import { Router } from "express";
import { TodoController } from "./controller";



export class TodoRoutes {
    

    static get routes(): Router  {

        const routes = Router()
        const todoController = new TodoController();

        routes.get('/',  todoController.getTodos );
        routes.get('/:id',  todoController.getTodoById );
        routes.post('/', todoController.createTodo);
        routes.put('/:id',  todoController.updateTodo );
        routes.delete('/:id',  todoController.deleteTodo );
        return routes;
    }
}


