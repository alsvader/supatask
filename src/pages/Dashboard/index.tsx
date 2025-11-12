import { addTask, deleteTask, getTasks, updateTask } from '@/api/tasks';
import type { Task, TaskUpdatedParams } from '@/api/tasks/types';
import { Loading, TaskForm, TaskList } from '@/components';
import { useAuth } from '@/hooks/useAuth';
import { NOTIFICATION_SETTINGS } from '@/utils/constants';
import supabase from '@/utils/supabase';
import type { RealtimePostgresChangesPayload } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { MdLogout } from 'react-icons/md';
import { Store } from 'react-notifications-component';

function Dashboard() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const { signOut } = useAuth();

	useEffect(() => {
		fetchTasks();

		const channel = supabase
			.channel('tasks_changes')
			.on<Task>('postgres_changes', { event: '*', schema: 'public', table: 'tasks' }, handleRealTimeChange)
			.on('broadcast', { event: 'ready' }, () => {
				console.log('Channel fully ready!');
				setIsSubscribed(true);
			})
			.subscribe((status) => {
				if (status === 'SUBSCRIBED') {
					setTimeout(() => {
						setIsSubscribed(true);
					}, 1500);
				}
			});

		return () => {
			channel.unsubscribe();
		};
	}, []);

	const handleRealTimeChange = (payload: RealtimePostgresChangesPayload<Task>) => {
		switch (payload.eventType) {
			case 'INSERT': {
				const newTask = payload.new as Task;
				setTasks((tasks) => [newTask, ...tasks]);
				break;
			}
			case 'UPDATE': {
				const updatedTask = payload.new as Task;

				setTasks((prev) => {
					const newTasks = prev.map((task) => (task.id === updatedTask.id ? updatedTask : task));

					return [...newTasks];
				});

				break;
			}
			case 'DELETE': {
				setTasks((prev) => {
					const newTasks = prev.filter((task) => task.id !== payload.old.id);
					return [...newTasks];
				});
				break;
			}
			default:
				break;
		}
	};

	const fetchTasks = async () => {
		const tasks = await getTasks();
		setTasks(tasks);
		setIsLoading(false);
	};

	const handleAddTask = async (formData: { task: string }, resetForm?: () => void) => {
		const { success } = await addTask(formData);

		if (success) {
			Store.addNotification({
				...NOTIFICATION_SETTINGS,
				title: 'Success',
				type: 'success',
				message: 'Task added successfully',
			});

			resetForm?.();
		}
	};

	const handleOnDelete = async (id: number) => {
		const { success } = await deleteTask(id);

		if (success) {
			Store.addNotification({
				...NOTIFICATION_SETTINGS,
				title: 'Success',
				type: 'warning',
				message: 'Task removed successfully',
			});
		}
	};

	const handleOnComplete = async (task: TaskUpdatedParams, id: number) => {
		const { success } = await updateTask({ id, task });

		if (success) {
			Store.addNotification({
				...NOTIFICATION_SETTINGS,
				title: 'Success',
				type: 'success',
				message: 'Task updated successfully',
			});
		}
	};

	const tasksNotCompleted = tasks.filter((task) => !task.is_completed);
	const tasksCompleted = tasks.filter((task) => task.is_completed);

	return (
		<div className="w-full max-w-[700px] mx-auto flex flex-col items-center justify-center py-18">
			<button type="button" className="btn btn-sm btn-secondary self-end mb-7" onClick={signOut}>
				<MdLogout className="h-7 w-7" />
				Sign out
			</button>

			<h1 className="text-5xl font-bold">SupaTask</h1>

			<div className="w-full mt-10">
				<TaskForm onSubmit={handleAddTask} isEnabled={isSubscribed} />
			</div>

			{isSubscribed && !isLoading ? (
				<>
					<TaskList tasks={tasksNotCompleted} onDelete={handleOnDelete} onUpdate={handleOnComplete} />
					<TaskList
						title="Tasks Completed"
						tasks={tasksCompleted}
						onDelete={handleOnDelete}
						onUpdate={handleOnComplete}
					/>
				</>
			) : (
				<Loading message="Loading tasks..." className="!h-20 mt-40" />
			)}
		</div>
	);
}

export default Dashboard;
