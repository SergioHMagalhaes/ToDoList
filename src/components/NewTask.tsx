import { PlusCircle } from "@phosphor-icons/react";
import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ITask } from '../types/Task';
import { TaskList } from './TaskList';
import styles from './NewTask.module.scss'

export function NewTask() {
	
	const [taskList, setTaskList] = useState<ITask[]>([]);
	const [newTaskText, setNewTaskText] = useState('')
	
	function handleCreateTask (event: FormEvent) {
		event.preventDefault();
		
		const newTask: ITask = {
			id: uuidv4(),
			title: newTaskText,
			isCompleted: false
		};
		setTaskList([...taskList, newTask]);
		setNewTaskText('');
	}

	function handleNewTaskText (event: FormEvent<HTMLInputElement>) {
		event.currentTarget.setCustomValidity('');
		setNewTaskText(event.currentTarget.value);
	}

	function handleNewTaskInvalid (event: FormEvent<HTMLInputElement>) {
		event.currentTarget.setCustomValidity('Digite uma tarefa válida');
	}

	function deleteTask (taskId: string) {
		const updatedTasks = taskList.filter(task => task.id !== taskId);
		setTaskList(updatedTasks);
	}

	function completeTask (taskId: string) {
		const updatedTasks = taskList.map(task => {
			if (task.id === taskId) {
				task.isCompleted = !task.isCompleted;
			}
			return task;
		});
		setTaskList(updatedTasks);
	}

	return (
		<div className={styles.container}>
			<form onSubmit={handleCreateTask}>
				<div className={styles.searchBar}>
					<input 
						type="text"
						value={newTaskText}
						placeholder="Adicione uma nova tarefa"
						onChange={handleNewTaskText}
						onInvalid={handleNewTaskInvalid}
						required
					/>
					<button type="submit">
						Criar <PlusCircle size={20} weight="bold"/>
					</button>
				</div>
			</form>

			<div className={styles.tasks}>
				<div className={styles.info}>
					<p className={styles.created}>
						Tarefas criadas 
						<div className={styles.counter}>{taskList.length}</div>
					</p>
					<p className={styles.completed}>
						Concluídas 
						<div className={styles.counter}>
							{taskList.reduce((prev, curr) => {
								return curr.isCompleted ? prev + 1 : prev
							}, 0)} de {taskList.length}
						</div>
					</p>
				</div>

				<TaskList 
					tasks={taskList}
					onDeleteTask={deleteTask}
					onCompleteTask={completeTask}
				/>
			</div>
		</div>
	)
  }