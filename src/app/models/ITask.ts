export interface ITask {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export enum Priority { Low, Medium, High }

export interface TaskResponse {
  todos: ITask[];
}

export const TASKS = [
  {
    id: 1,
    todo: "I need to clean house",
    completed: true,
    userId: 3
  },
  {
    id: 2,
    todo: "I need to make homework",
    completed: true,
    userId: 8
  },
  {
    id: 3,
    todo: "I need to go to school",
    completed: false,
    userId: 8
  }
]
