import { MdDeleteForever, MdEdit } from "react-icons/md";
import type { Task, TaskUpdatedParams } from "@/api/tasks/types";

export interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onUpdate: (task: TaskUpdatedParams, id: number) => void;
}

export function TaskItem({ task, onDelete, onUpdate }: TaskItemProps) {
  const handleOnDelete = () => {
    onDelete(task.id);
  };

  const handleChangeIsCompleted = () => {
    onUpdate(
      {
        is_completed: task.is_completed === 1 ? 0 : 1,
      },
      task.id
    );
  };

  const lineThrough = task.is_completed ? "line-through" : "";
  const classes = `flex items-center gap-3 ${lineThrough}`;

  return (
    <li
      key={task.id}
      className="relative group bg-[#323d48] rounded-lg p-4 flex justify-between gap-3"
    >
      <div className={classes}>
        <input
          type="checkbox"
          checked={task.is_completed ? true : false}
          onChange={handleChangeIsCompleted}
          className="checkbox checkbox-secondary"
        />

        {task.task}
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 top-[50%] transform -translate-y-1/2 right-2 transition-all transition-discrete flex gap-2">
        <button
          type="button"
          className="btn btn-sm btn-error btn-circle"
          onClick={handleOnDelete}
        >
          <MdDeleteForever className="text-2xl text-white" />
        </button>
      </div>
    </li>
  );
}
