import { Task, TaskUpdatedParams } from "@/api/tasks/types";
import { TaskItem } from "@/components";

export interface TaskListProps {
  title?: string;
  tasks: Task[];
  onDelete: (id: number) => void;
  onUpdate: (task: TaskUpdatedParams, id: number) => void;
}
export function TaskList({
  title = "Tasks",
  tasks,
  onDelete,
  onUpdate,
}: TaskListProps) {
  return (
    <div className="w-full mt-10">
      <h2 className="text-xl mb-3">
        {title} - {tasks.length}
      </h2>
      <ul className="w-full flex flex-col gap-5">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </div>
  );
}
