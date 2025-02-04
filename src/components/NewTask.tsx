import styles from './NewTask.module.scss'
import { PlusCircle } from "@phosphor-icons/react";
import { TaskList } from './TaskList';
import { ITask } from '../types/Task';

export function NewTask() {
	const taskList: ITask[]  = [
		{
			id: 1,
			title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit mollitia nisi natus nemo, temporibus distinctio atque? Quod ducimus labore natus sit. Dolorum accusamus est vitae hic, delectus in adipisci explicabo.',
			isCompleted: true
		},
		{
			id: 2,
			title: 'Estudar C#',
			isCompleted: false
		},
		{
			id: 3,
			title: 'Criar site',
			isCompleted: false
		}
	];

	return (
		<div className={styles.container}>
			<form>
				<div className={styles.searchBar}>
					<input type="text" placeholder="Adicione uma nova tarefa" />
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