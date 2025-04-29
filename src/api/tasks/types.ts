export interface Task {
  id: number;
  user_id: number;
  task: string;
  is_completed: number;
  created_at: string;
}

export interface AddTaskParams {
  task: string;
}

export interface TaskResponse {
  success: boolean;
}

export interface UpdateTaskParams {
  id: number;
  task: TaskUpdatedParams;
}

export interface TaskUpdatedParams {
  task?: string;
  is_completed?: number;
}
