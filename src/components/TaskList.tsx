import styles from './TaskList.module.scss'
import { ClipboardText, Trash } from "@phosphor-icons/react";
import { ITaskList } from '../types/Task';

function Empty () {
	return (
		<div className={styles.empty}>
			<div className={styles.emptyContent}>
				<ClipboardText size={56} className={styles.icon}/>
				<p><strong>Você ainda não tem tarefas cadastradas</strong></p>
				<p>Crie tarefas e organize seus itens a fazer</p>
			</div>
		</div>	
	)
}

export function TaskList({ tasks, onDeleteTask, onCompleteTask }: ITaskList) {
	function handleDeleteTask(taskId: string) {
		onDeleteTask(taskId);
	}

	function handleCompleteTask(taskId: string) {
		onCompleteTask(taskId);
	}

	if (!tasks.length) {
		return <Empty />;
	}

	return (
		<div  className={styles.taskContainer}>
			{tasks.map(task => {
				return (
					<div key={task.id} className={styles.taskList}>
							<div className={styles.checkbox}>
							<input
								type="checkbox" 
								id={`task-${task.id}`}
								onClick={() => handleCompleteTask(task.id)}
							/>
							<label htmlFor={`task-${task.id}`}></label>
						</div>
						<p className={`${styles.name} ${task.isCompleted ? styles.completed : ''}`}>
							{task.title}
						</p>
						<button
							onClick={() => handleDeleteTask(task.id)}
							title="Deletar comentário"
						>
							<Trash size={20} weight="bold"/>
						</button>
					</div>
				)
			})}
		</div>
	)
  }