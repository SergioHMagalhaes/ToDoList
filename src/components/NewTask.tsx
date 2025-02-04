import styles from './NewTask.module.scss'
import { PlusCircle, ClipboardText, Trash } from "@phosphor-icons/react";

export function NewTask() {
	const taskList = [
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

				<div className={styles.taskContainer}>
					{
						taskList.length > 0 ? (
							<div>
								{taskList.map(task => {
									return (
										<div key={task.id} className={styles.taskList}>
											 <div className={styles.checkbox}>
												<input type="checkbox" id={`task-${task.id}`} />
												<label htmlFor={`task-${task.id}`}></label>
											</div>
											<p className={`${styles.name} ${task.isCompleted ? styles.completed : ''}`}>
												{task.title}
											</p>
											<button>
												<Trash size={20} weight="bold"/>
											</button>
										</div>
									)
								})}
							</div>	
						) : (
							<div className={styles.empty}>
								<div className={styles.emptyContent}>
									<ClipboardText size={56} className={styles.icon}/>
									<p><strong>Você ainda não tem tarefas cadastradas</strong></p>
									<p>Crie tarefas e organize seus itens a fazer</p>
								</div>
							</div>	
						)
					}
				</div>
			</div>
		</div>
	)
  }