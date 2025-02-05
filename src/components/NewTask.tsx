
import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from 'uuid';
import { FormEvent, useState } from 'react';

import styles from './NewTask.module.scss'
import { TaskList } from './TaskList';
import { ITask } from '../types/Task';


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
					<p className={styles.created}>Tarefas criadas <div className={styles.counter}>0</div></p>
					<p className={styles.completed}>Concluídas <div className={styles.counter}>0</div></p>
				</div>

				<TaskList tasks={taskList} />
			</div>
		</div>
	)
  }