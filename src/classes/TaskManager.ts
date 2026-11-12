import { Task } from "../types/task.types";
import { CreateTaskInput } from "../types/task.types";
import { Statuses } from "../types/task.types";
import { Categories } from "../types/task.types";
import { Priorities } from "../types/task.types";
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

    changeTaskStatus(id: number, newStatus: Statuses): void{
        const target = this.tasks.find((task) => task.id === id);

        if (target == undefined) return;
        
        target.status = newStatus;
    }

    searchTasks(query: string): Task[] {
        const target = this.tasks.filter((task) => task.title.toLowerCase().includes(query.toLowerCase()));

        return target;
    }

    filterByStatus(status: Statuses): Task[] {
        const target = this.tasks.filter((task) => task.status === status);

        return target;
    }

    filterByCategory(category: Categories): Task[] {
        const target = this.tasks.filter((task) => task.category === category);

        return target;
    }

    filterByPriority(priority: Priorities): Task[] {
        const target = this.tasks.filter((task) => task.priority === priority);

        return target;
    }
}