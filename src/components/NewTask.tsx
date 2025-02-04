import styles from './NewTask.module.scss'
import { PlusCircle, ClipboardText } from "@phosphor-icons/react";

export function NewTask() {
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
				<div>
					<div className={styles.empty}>
						<div className={styles.emptyContent}>
							<ClipboardText size={56} className={styles.icon}/>
							<p><strong>Você ainda não tem tarefas cadastradas</strong></p>
							<p>Crie tarefas e organize seus itens a fazer</p>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	)
  }