export interface ITask {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  deadline: Date;
}

export enum Priority { Low, Medium, High }

export const TASKS = [
  {
    id: 1,
    title: "Clean House",
    description: "I need to clean house",
    priority: Priority.Medium,
    deadline: new Date(2024, 1, 12)
  },
  {
    id: 2,
    title: "Make homework",
    description: "I need to make homework",
    priority: Priority.High,
    deadline: new Date(2024, 2, 9)
  },
  {
    id: 3,
    title: "Go to school",
    description: "I need to go to school",
    priority: Priority.Low,
    deadline: new Date(2025, 3, 7)
  }
]
