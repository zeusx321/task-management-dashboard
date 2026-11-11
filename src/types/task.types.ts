export interface User {
    readonly id: number,
    username: string,
    email: string,
    avatarColor: string,
}

export interface Task {
    readonly id: number,
    title: string,
    description?: string,
    status: Statuses,
    category: Categories,
    priority: Priorities,
    dueDate?: Date;
    createdAt: Date;
}

export interface CreateTaskInput {
    title: string;
    description?: string;
    status: Statuses;
    category: Categories;
    priority: Priorities;
    dueDate?: Date;
}

export type Statuses = "completed" | "progress" | "pending";

export type Categories = "work" | "study" | "personal";

export type Priorities = "low" | "medium" | "high";

export type SortOrder = "Ascending" | "Descending";
