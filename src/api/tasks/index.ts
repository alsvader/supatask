import supabase from '@/utils/supabase';
import type { AddTaskParams, Task, TaskResponse, UpdateTaskParams } from './types';

export const getTasks = async (): Promise<Task[]> => {
	const { data, error } = await supabase.from('tasks').select('*').order('created_at', { ascending: false });

	if (error) {
		throw new Error(error.message);
	}

	return data;
};

export const addTask = async (task: AddTaskParams): Promise<TaskResponse> => {
	const { error } = await supabase.from('tasks').insert(task);

	if (error) {
		throw new Error(error.message);
	}

	return { success: true };
};

export const deleteTask = async (id: number): Promise<TaskResponse> => {
	const { error } = await supabase.from('tasks').delete().eq('id', id).single();

	if (error) {
		throw new Error(error.message);
	}

	return { success: true };
};

export const updateTask = async (formData: UpdateTaskParams): Promise<TaskResponse> => {
	const { id, task } = formData;

	const { error } = await supabase.from('tasks').update(task).eq('id', id);

	if (error) {
		throw new Error(error.message);
	}

	return { success: true };
};
