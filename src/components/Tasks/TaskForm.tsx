import { FaSave } from "react-icons/fa";
import { useForm } from "@/hooks/useForm";
import type { Task } from "@/api/tasks/types";

export interface TaskFormProps {
  onSubmit: (formData: { task: string } | Task, resetForm?: () => void) => void;
  isEnabled?: boolean;
}

export function TaskForm({ onSubmit, isEnabled }: TaskFormProps) {
  const { formData, handleInputChange, handleFormSubmit, resetForm } = useForm(
    { task: "" },
    (formData) => {
      onSubmit(formData, resetForm);
    }
  );

  const { task } = formData;

  return (
    <form className="w-full" onSubmit={handleFormSubmit}>
      <div className="w-full flex flex-col gap-5">
        <input
          className="w-full input input-lg"
          type="text"
          name="task"
          placeholder="Add a task"
          value={task}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-secondary rounded-lg self-end text-base"
          disabled={!task || !isEnabled}
        >
          <FaSave />
          Save
        </button>
      </div>
    </form>
  );
}
