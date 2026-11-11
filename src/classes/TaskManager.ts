import { Task } from "../types/task.types";
import { CreateTaskInput } from "../types/task.types";

export class TaskManager {
    private tasks: Task[] = [];
    private nextId: number = 0;

    addTask(task: CreateTaskInput): void {
        if (task.title.trim() === "") {
            return;
        }

        const newTask: Task = {
                ...task,
                id: this.nextId++,
                createdAt: new Date(),
            };

            this.tasks.push(newTask);
    }

    getAllTasks(): Task[]{
        return [...this.tasks];
    }

    getTaskById(id: number): Task | undefined{
        return this.tasks.find((task) => task.id === id);
    }

    deleteTask(id: number): void{
        const index = this.tasks.findIndex((task) => task.id === id);

        if (index === -1) {
            return;
        }

        this.tasks.splice(index, 1);
    }

    updateTask(id: number, updatedData: CreateTaskInput): void{
        const target = this.tasks.find((task) => task.id === id);

        if (target === undefined) {
            return;
        }

        target.title = updatedData.title;
        target.description = updatedData.description;
        target.status = updatedData.status;
        target.category = updatedData.category;
        target.priority = updatedData.priority;
        target.dueDate = updatedData.dueDate;

        if (target.title.trim() === "") {
            return;
        }
    }
}